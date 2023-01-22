"use client";
import {
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
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
    <div>
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
      <Input placeholder="Basic usage" />
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
