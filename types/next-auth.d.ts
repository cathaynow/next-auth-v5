import { DefaultSession } from "@auth/core/types";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }

  interface User {
    role: String | null;
  }
}
