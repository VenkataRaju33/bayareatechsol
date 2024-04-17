import React from "react";
import { fetchUsers } from "./api/base";
import Layout from "@/components/Layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { userInterface } from "@/components/types";
import Head from "next/head";

interface props {
  data: userInterface[];
  err: string;
}
const users = ({ data, err }: props) => {
  if (err) {
    return <p>Something went wrong, Please try after some time</p>;
  }
  
  return (
    <Layout>
      <Head>
        <title>Bay area technology solutions</title>
      </Head>
      <div className="ml-3">
        <p>https://demo6396395.mockable.io/prompts</p>
        <p>https://demo6396395.mockable.io/bcf-boards</p>
        <p className="font-semibold">
          these 2 apis have an issue with the SSL certificate verification,
          <br />
          Hence could not use for ssr
        </p>
      </div>
      <h1 className="text-center text-3xl font-bold py-5">Users Data</h1>
      <div className="m-3 flex flex-wrap justify-center gap-4 text-center">
        {data.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>{user.phone}</CardContent>
            <CardFooter>
              {user.website} <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default users;
export async function getServerSideProps() {
  try {
    const data = await fetchUsers();
    return { props: { data } };
  } catch (err: any) {
    return { props: { err: err.message } };
  }
}
