import { createAuthClient } from "better-auth/react";

export const { signUp, signIn, signOut, useSession } = createAuthClient({
  baseURL: import.meta.env.VITE_AUTH_URL || "http://localhost:3000",
});
