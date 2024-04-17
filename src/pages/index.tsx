import { Inter } from "next/font/google";
import { fetchBoards, fetchPrompts } from "./api/base";
import Head from "next/head";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { boardInterface, promptsInterface } from "@/components/types";
import Layout from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [prompts, setPrompts] = React.useState<promptsInterface[]>([]);
  const [boards, setBoards] = React.useState<boardInterface[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const prompt = await fetchPrompts();
        setPrompts(prompt);
        const board = await fetchBoards();
        setBoards(board.boards);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>Bay area technology solutions</title>
      </Head>
      <Layout>
        <div className="flex gap-4 m-4 flex-wrap">
          {loading ? (
            <Skeleton className="h-4 w-1/2 h-[200px] w-[49%]" />
          ) : (
            <Card className="w-full lg:w-[calc(50%-0.5rem)]">
              <CardHeader>
                <CardTitle className="mx-auto underline">Boards</CardTitle>
                <div className="flex justify-around flex-wrap">
                  {boards.map((item) => (
                    <CardDescription key={item.id} className="font-medium">
                      {item.name}
                    </CardDescription>
                  ))}
                </div>
              </CardHeader>
              <div className="flex justify-around flex-wrap">
                {boards.map((el) =>
                  el.bcfs?.map((item) => (
                    <CardContent key={item.id}>{item.name}</CardContent>
                  ))
                )}
              </div>
              <div className="flex justify-around flex-wrap">
                {boards.map((el) =>
                  el.bcfs?.map((item) =>
                    item.bcfBoards.map((ele) => (
                      <CardFooter key={ele.id} className="p-2">
                        {ele.name}
                      </CardFooter>
                    ))
                  )
                )}
              </div>
            </Card>
          )}
          {loading ? (
            <Skeleton className="h-4 w-1/2 h-[200px] w-[49%]" />
          ) : (
            <Card className="w-full lg:w-[calc(50%-0.5rem)] flex flex-wrap">
              {prompts.map((prompt) => (
                <Card key={prompt.id} className="p-2 m-1 ">
                  {prompt.name}
                </Card>
              ))}
            </Card>
          )}
        </div>
      </Layout>
    </main>
  );
}
