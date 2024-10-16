import { PrismaClient } from '@prisma/client'
import { envServer } from '@/config/env-server'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma: PrismaClient =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: envServer.DATABASE_LOGGER as any,
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export const getPrisma = () => {
  return prisma
}
