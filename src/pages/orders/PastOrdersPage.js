import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../../firebase/config";
import { OrderCard, SkeletonOrderCard } from "../../components/order";
import convertFirebaseDate from "../../_helpers/firebaseDate";

export const PastOrdersPage = () => {
  const userEmail = localStorage.getItem("email");
  const collectionRef = collection(db, "cart");
  const queryRef = useRef(query(collectionRef, where("userId", "==", userEmail)));
  const [orders, setOrders] = useState([false, false]);

  useEffect(() => {
    async function getFeatureBooks() {
      getDocs(queryRef.current)
        .then((data) => {
          let temp = [];
          data.docs.forEach((element) => {
            let date = new Date(element.data().createdAt);
            let data = element.data();
            temp.push({
              ...data,
              id: element.id,
              createdAt: convertFirebaseDate(date),
            });
          });
          setOrders(temp);
        })
        .catch((error) => console.log(error));
    }
    getFeatureBooks();
  }, [queryRef]);

  return (
    <section>
      <div className="flex flex-col">
        <h2 className="dark:text-white underline text-2xl text-center mb-8">Your Orders</h2>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {orders.length > 0 &&
            orders.map((order, index) =>
                order ? (
                <OrderCard key={index} order={order} />
              ) : (
                <SkeletonOrderCard key={index} />
              )
            )}
        </div>

        {orders.length === 0 && <div className="text-center text-3xl dark:text-white">No Past Orders</div>}
      </div>
    </section>
  );
};
