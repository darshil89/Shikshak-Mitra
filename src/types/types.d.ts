import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;
type CustomType = Date | null;


declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    emailVerified: CustomType;
    accessToken: string!;
    role: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      emailVerified: CustomType;
      role: string;
    };
  }

  interface User {
    emailVerified: CustomType;
    role: string;
  }
}
