import React, { useRef } from "react";
import Input from "../components/Input";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageUrlRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1 className="text-4xl font-bold mb-5 text-center">Sign Up</h1>
      <form className="grid grid-cols-[auto, 1fr] gap-x-3 gap-y-5 items-center">
        <label htmlFor="userName">Username</label>
        <Input id="userName" pattern="\S*" required ref={usernameRef} />

        <label htmlFor="name">Name</label>
        <Input id="name" required ref={nameRef} />

        <label htmlFor="imageUrl">Image Url</label>
        <Input id="imageUrl" type="url" ref={imageUrlRef} />
      </form>
    </>
  );
};

export default Signup;
