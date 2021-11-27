import { Joke, User } from ".prisma/client";
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import JokeCard from "~/components/JokeCard";
import { db } from "~/utils/db";

type IndexData = {
  jokes: Array<
    Joke & {
      user: User | null;
    }
  >;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  let data: IndexData = {
    jokes: await db.joke.findMany({
      include: {
        user: true,
      },
    }),
  };
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Jokes",
    description: "Welcome to Jokes!",
  };
};

export default function Index() {
  let data = useLoaderData<IndexData>();
  return (
    <div>
      <h1>Joke</h1>
      <div className="grid md:grid-cols-2">
        {data.jokes.map((joke) => (
          <div className="my-2">
            <JokeCard
              user={joke.user?.name.toString() || ""}
              question={joke.question}
              answer={joke.answer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
