import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client globally
const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient();
}

export const db = globalForPrisma.prisma;
