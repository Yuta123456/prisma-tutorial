"use client";
import { FC, useState } from "react";
import { Box, Text, Input, Button } from "../common/components";

export default function Login() {
  const signUp = async (email: string, password: string) => {
    fetch("api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then(async (res) => console.log(await res.json()));
  };
  return (
    <div
      style={{
        maxWidth: "900px",
        display: "flex",
        flexFlow: "column",
        margin: "auto",
      }}
    >
      <LoginComponent onSubmit={signUp}></LoginComponent>
    </div>
  );
}

type LoginComponentProps = {
  onSubmit: (name: string, email: string) => Promise<void>;
};
const LoginComponent: FC<LoginComponentProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Text fontSize="6xl">Sign Up</Text>
      <Input
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={() => onSubmit(email, password)}>Submit</Button>
    </>
  );
};
