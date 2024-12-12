import React from "react";
import { useForm } from "react-hook-form";
import { emailRegex, numberRegex } from "../../_helpers";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useCart } from "../../context-reducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PATH from "../../constants/path";

const CheckoutModal = ({ setModal }) => {
  const { cartList, clearCart, total } = useCart();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    const collectionRef = collection(db, "cart");

    addDoc(collectionRef, {
      userId: localStorage.getItem("email"),
      name: formData.username,
      phoneNumber: formData.phoneNumber,
      createdAt: new Date().getTime(),
      order: cartList,
      total: total,
    })
      .then((res) => {
        toast("Order Placed Successfully");
        clearCart();
        setModal(false);
        const sentData = { status: true, id: res.id };
        navigate(PATH.orderSummary, { state: sentData });
      })
      .catch((error) => {
        navigate(PATH.orderSummary, { state: { status: false } });
      });
  };

  return (
    <>
      <div
        id="authentication-modal"
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden bg-slate-200/75 flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full  md:h-auto overflow-y-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Checkout</h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={() => setModal(false)}
              >
                <i className="bi bi-x-lg"></i>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Name"
                    {...register("username", {
                      required: true,
                    })}
                  />

                  {errors?.username?.type === "required" && (
                    <p className="text-red-500 mt-3">Please enter your user name</p>
                  )}

                  {errors?.username?.type === "pattern" && (
                    <p className="text-red-500 mt-3">Please enter valid email-id</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="1234567890"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    {...register("phoneNumber", {
                      required: true,
                      pattern: numberRegex,
                      minLength: 10,
                      maxLength: 10,
                    })}
                  />
                  {errors?.phoneNumber?.type === "required" && (
                    <p className="text-red-500 mt-3">Please enter your phone number</p>
                  )}

                  {errors?.phoneNumber?.type === "pattern" && (
                    <p className="text-red-500 mt-3">Please enter valid phone number</p>
                  )}

                  {(errors?.phoneNumber?.type === "minLength" ||
                    errors?.phoneNumber?.type === "maxLength") && (
                    <p className="text-red-500 mt-3">Phone number must be of 10 in length</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
