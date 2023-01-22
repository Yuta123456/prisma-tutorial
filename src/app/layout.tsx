import { ChakraProvider } from "@chakra-ui/react";
import NextLink from "next/link";
import { Box, Button, Link, Text } from "./common/components";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <Box
      bg="teal"
      w="100%"
      color="white"
      h="100px"
      alignItems="center"
      display={"flex"}
    >
      <Box
        maxW={"900px"}
        w="100%"
        margin={"auto"}
        display={"flex"}
        alignItems="center"
      >
        <Text fontSize={"30px"} whiteSpace="nowrap">
          Prisma + supabase Tutorial
        </Text>
        <Box
          alignItems={"right"}
          display="flex"
          w="100%"
          justifyContent={"right"}
        >
          <Button variant="outline" size="lg">
            <Link as={NextLink} href="/">
              <Text fontSize={"30px"}>Home</Text>
            </Link>
          </Button>
          <Button variant="outline" size="lg" marginLeft={"20px"}>
            <Link as={NextLink} href="/login">
              <Text fontSize={"30px"}>Login</Text>
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
