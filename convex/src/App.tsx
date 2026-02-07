"use client";

import { Authenticated, Unauthenticated, useConvexAuth } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";

export default function App() {
  const { isLoading } = useConvexAuth();

  return (
    <>
      <header className="sticky top-0 z-10 bg-light dark:bg-dark p-4 border-b-2 border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span className="font-semibold">Convex Auth</span>
        <SignOutButton />
      </header>
      <main className="p-8 flex flex-col gap-8">
        {isLoading ? (
          <div className="mx-auto">Loading...</div>
        ) : (
          <>
            <Authenticated>
              <ProtectedRoute />
            </Authenticated>
            <Unauthenticated>
              <AuthCard />
            </Unauthenticated>
          </>
        )}
      </main>
    </>
  );
}

function SignOutButton() {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <button
      className="bg-slate-200 dark:bg-slate-800 text-dark dark:text-light rounded-md px-2 py-1"
      onClick={() => void signOut()}
    >
      Sign out
    </button>
  );
}

function AuthCard() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      <div className="flex items-center justify-center gap-4">
        <button
          className={`px-3 py-1 rounded-md border ${
            flow === "signIn"
              ? "bg-dark text-light"
              : "bg-light dark:bg-dark text-dark dark:text-light"
          }`}
          onClick={() => setFlow("signIn")}
        >
          Sign in
        </button>
        <button
          className={`px-3 py-1 rounded-md border ${
            flow === "signUp"
              ? "bg-dark text-light"
              : "bg-light dark:bg-dark text-dark dark:text-light"
          }`}
          onClick={() => setFlow("signUp")}
        >
          Sign up
        </button>
      </div>
      <form
        className="flex flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);
          formData.set("flow", flow);
          void signIn("password", formData).catch((error) => {
            setError(error.message);
          });
        }}
      >
        {flow === "signUp" && (
          <input
            className="bg-light dark:bg-dark text-dark dark:text-light rounded-md p-2 border-2 border-slate-200 dark:border-slate-800"
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
        )}
        <input
          className="bg-light dark:bg-dark text-dark dark:text-light rounded-md p-2 border-2 border-slate-200 dark:border-slate-800"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="bg-light dark:bg-dark text-dark dark:text-light rounded-md p-2 border-2 border-slate-200 dark:border-slate-800"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          className="bg-dark dark:bg-light text-light dark:text-dark rounded-md py-2"
          type="submit"
        >
          {flow === "signIn" ? "Sign in" : "Sign up"}
        </button>
        {error && (
          <div className="bg-red-500/20 border-2 border-red-500/50 rounded-md p-2">
            <p className="text-dark dark:text-light font-mono text-xs">
              Error: {error}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

function ProtectedRoute() {
  return (
    <div
      aria-label="Protected route"
      className="mx-auto max-w-2xl w-full h-64 rounded-lg border border-slate-200 dark:border-slate-800 bg-light dark:bg-dark"
    />
  );
}
