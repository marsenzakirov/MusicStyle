import React, { useState } from "react";
import { Modal } from "@ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { Icon, LabelError } from "@ui";
import { CSSTransition } from "react-transition-group";

type AuthenticationType = {
  email: string;
  password: string;
};

type RegistrationType = {
  email: string;
  name: string;
  password: string;
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal
      buttonChildren={<Icon size={40} name="defaultUser" alt="user logo" />}
    >
      <h1 className="text-2xl font-bold mb-4">
        {isLogin ? "Sign in" : "Sign up"}
      </h1>
      {isLogin ? <Authentication /> : <Registration />}
      <button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
        className=" block mx-auto mt-4"
      >
        {isLogin ? "Create an account" : "I have an account"}
      </button>
    </Modal>
  );
}

function Authentication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticationType>();

  const onSubmit: SubmitHandler<AuthenticationType> = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 text-black">
        <input
          type="text"
          placeholder="Email"
          className="w-80 h-10 rounded-[20px] px-4 text-black"
          {...register("email", {
            required: "Email is require filed",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <LabelError condition={!!errors?.email}>
          {errors?.email?.message}
        </LabelError>
        <input
          type="password"
          placeholder="Password"
          className="w-80 h-10 rounded-[20px] px-4 text-black"
          {...register("password", {
            required: "Password is require filed",
          })}
        />
        <LabelError condition={!!errors?.password}>
          {errors?.password?.message}
        </LabelError>
        <button
          type="submit"
          className="w-80 h-10 rounded-[20px] px-4 bg-[#270045] text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationType>();

  const onSubmit: SubmitHandler<RegistrationType> = (data) => {};
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 text-black">
        <input
          type="text"
          placeholder="Email"
          className="w-80 h-10 rounded-[20px] px-4 text-black"
          {...register("email", {
            required: "Email is require filed",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <LabelError condition={!!errors?.email}>
          {errors?.email?.message}
        </LabelError>
        <input
          type="text"
          placeholder="Username"
          className="w-80 h-10 rounded-[20px] px-4 text-black"
          {...register("name", {
            required: "Username is require filed",
          })}
        />
        <LabelError condition={!!errors?.name}>
          {errors?.name?.message}
        </LabelError>
        <input
          type="password"
          placeholder="Password"
          className="w-80 h-10 rounded-[20px] px-4 text-black"
          {...register("password", {
            required: "Password is require filed",
          })}
        />
        <LabelError condition={!!errors?.password}>
          {errors?.password?.message}
        </LabelError>
        <button
          type="submit"
          className="w-80 h-10 rounded-[20px] px-4 bg-[#270045] text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
