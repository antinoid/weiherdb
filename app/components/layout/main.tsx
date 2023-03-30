import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  return <main className="p-4 ml-20">{children}</main>;
}
