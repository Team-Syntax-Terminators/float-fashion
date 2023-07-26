"use client";

import { createUser } from "@/utils/api/user";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

// icons
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleAuth = async (data) => {
    const { name, email, password } = data;

    const userData = {
      name,
      email,
      password,
    };

    createUser(userData);
  };

  return (
    <div>
      <section className="bg-white">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit(handleAuth)}>
              <div className="flex justify-center mx-auto">
                <img
                  className="w-40"
                  src="./assets/logo/logo-01.png"
                  alt=""
                />
              </div>

              <div className="flex items-center justify-center mt-6">
                <Link
                  href="/login"
                  className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b">
                  sign in
                </Link>

                <Link
                  href="/register"
                  className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-orange-500">
                  sign up
                </Link>
              </div>

              <div className="relative flex items-center mt-8">
                <span className="absolute px-2 text-gray-300">
                  <AiOutlineUser size={"1.5rem"} />
                </span>

                <input
                  {...register("name", {
                    required: "*name is required",
                  })}
                  type="text"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Username"
                />
              </div>
              {errors.name && (
                <span className="text-orange-500">{errors.name.message}</span>
              )}

              <div className="relative flex items-center mt-4">
                <span className="absolute px-2 text-gray-300">
                  <AiOutlineMail size={"1.5rem"} />
                </span>

                <input
                  {...register("email", {
                    required: "*email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>
              {errors.email && (
                <span className="text-orange-500">{errors.email.message}</span>
              )}

              <div className="relative flex items-center mt-4">
                <span className="absolute px-2 text-gray-300">
                  <AiOutlineLock size={"1.5rem"} />
                </span>

                <input
                  {...register("password", {
                    required: "*password is required",
                    minLength: {
                      value: 6,
                      message: "password must be 6 characters",
                    },
                  })}
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
              {errors.password && (
                <span className="text-orange-500">
                  {errors.password.message}
                </span>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                Sign Up
              </button>
            </form>

            <p className="mt-4 text-center text-gray-600">or sign in with</p>

            <button
              onClick={() => signIn("google")}
              type="button"
              className="flex items-center justify-center w-full px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50">
              <svg
                className="w-6 h-6 mx-2"
                viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>

              <span className="mx-2">Sign up with Google</span>
            </button>

            <div className="mt-6 text-center ">
              <Link
                href="/login"
                className="text-sm text-orange-500 hover:underline">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
