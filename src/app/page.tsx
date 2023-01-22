"use client";
import {
  Button,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "../app/common/components";
import { User } from "@prisma/client";
import { FC, useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState<User[] | undefined>();
  useEffect(() => {
    fetch("api/hello").then(async (res) => {
      console.log(res);
      res.json().then((res) => setResult(res.users));
    });
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        display: "flex",
        flexFlow: "column",
        margin: "auto",
      }}
    >
      <div style={{ marginTop: "30px" }}>
        <UserRegistration
          onSubmit={(name, email) => {
            fetch("api/save", {
              method: "POST",
              body: JSON.stringify({ name, email }),
            });
          }}
        />
      </div>
      <Text fontSize={"5xl"} sx={{ marginTop: "30px" }}>
        User Table
      </Text>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>name</Th>
              <Th>id</Th>
              <Th>email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {result &&
              result?.map((user) => <UserCard key={user.id} user={user} />)}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

type UserCardProps = {
  user: User;
};
const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Tr>
      <Td>{user.name}</Td>
      <Td>{user.id}</Td>
      <Td>{user.email}</Td>
    </Tr>
  );
};

type UserRegistrationProps = {
  onSubmit: (name: string, email: string) => void;
};
const UserRegistration: FC<UserRegistrationProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Text fontSize="6xl">UserRegistration</Text>
      <Input
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button onClick={() => onSubmit(name, email)}>Submit</Button>
    </>
  );
};
