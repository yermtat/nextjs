// prisma/prisma-client.ts
import * as client from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: client.PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new client.PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
