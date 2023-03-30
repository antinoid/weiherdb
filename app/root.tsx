import type {
  LinksFunction,
  LoaderArgs,
  MetaFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import React from "react";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import Header from "~/components/layout/navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "WeiherDB" },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <Document>
      <Header />
      <Outlet />
    </Document>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen mx-auto text-base bg-slate-800 text-lime-600">
        {/* <body className="transition duration-500 bg-white dark:bg-gray-900"> */}
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
