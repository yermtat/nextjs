"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface IAuthProvider {
  session: Session | null;
  children: React.ReactNode;
}

export default function AuthProvider({ session, children }: IAuthProvider) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
