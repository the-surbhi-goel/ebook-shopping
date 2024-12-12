import React, { useState } from "react";
import CartCard from "./CartCard";
import { Button } from "../common";
import CheckoutModal from "./CheckoutModal";

export const CartLst = ({ list, total }) => {
  const [showModal, setModal] = useState(false);

  return (
    <>
      <section>
        <h1 className="text-4xl font-bold mb-5 text-center dark:text-white">Cart({list.length})</h1>

        <div className="flex flex-col laptop:flex-row">
          <div className="laptop:w-3/5 px-10">
            {list?.map((product, index) => (
              <CartCard key={index} product={product} />
            ))}
            <div className="text-sm font-medium mt-5 p-5 flex justify-end text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <Button classname="mt-0" onClick={() => setModal(true)}>
                Place Order
              </Button>
            </div>
          </div>
          <div className="laptop:w-2/5">
            <div className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <div className="block w-full px-4 py-3 border-b border-gray-200 rounded-t-lg  dark:bg-gray-800 dark:border-gray-600">
                PRICE DETAILS
              </div>
              {list.map((book, index) => (
                <div key={index} className="block w-full px-4 py-3 flex justify-between">
                  <div>Price({index + 1})</div>
                  <div>
                    <i className="bi bi-currency-rupee"></i> {book.price}
                  </div>
                </div>
              ))}
              <div className="block w-full px-4 py-3 flex justify-between border-b border-gray-200 dark:border-gray-600">
                <div>Platform Fee</div>
                <div>
                  <strike>
                    <i className="bi bi-currency-rupee"></i> 100
                  </strike>{" "}
                  <span className="text-green-500">FREE</span>
                </div>
              </div>

              <div className="block w-full px-4 py-3 flex justify-between border-b border-gray-200 dark:border-gray-600">
                <div>TOTAL</div>
                <div>
                  <i className="bi bi-currency-rupee"></i> {total}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showModal && <CheckoutModal setModal={setModal} />}
      </section>
    </>
  );
};
