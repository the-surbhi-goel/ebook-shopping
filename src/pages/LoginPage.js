import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "../firebase/config";
import { emailRegex } from "../_helpers";
import { useNavigate } from "react-router-dom";
import PATH from "../constants/path";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((cred) => {
        localStorage.setItem("token", JSON.stringify(cred.user.accessToken));
        localStorage.setItem("email", JSON.stringify(cred.user.email));
        navigate(PATH.products);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { closeButton: true });
      });
  };

  return (
    <>
      <section className="flex flex-col dark:text-white items-center">
        <h3 className="text-5xl font-bold mb-30"> Login</h3>

        <form
          className="flex flex-col border m-5 p-5 rounded w-4/5 laptop:w-2/5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-12 mb-30">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="first_name"
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                {...register("email", {
                  required: true,
                  pattern: emailRegex,
                })}
              />

              {errors?.username?.type === "required" && (
                <p className="text-red-500 mt-3">Please enter your user name</p>
              )}

              {errors?.username?.type === "pattern" && (
                <p className="text-red-500 mt-3">Please enter valid email-id</p>
              )}
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />

              {errors?.password?.type === "required" && (
                <p className="text-red-500 mt-3">Please enter your password</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>

        {/* 
        <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            label="Enter your user name"
            placeholder="Username"
            {...register("username", {
              required: true,
            })}
          />

          {errors?.username?.type === "required" && (
            <p className="text-danger">Please enter your user name</p>
          )}

          <input
            type="password"
            label="Enter your password"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />

          {errors?.password?.type === "required" && (
            <p className="text-danger">Please enter your password</p>
          )}

          <div className="d-flex justify-content-center mt-30">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-blue-800"
              text="Login"
            />
          </div>
        </form> */}
      </section>
    </>
  );
};

