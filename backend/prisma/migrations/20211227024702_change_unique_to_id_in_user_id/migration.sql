-- DropIndex
DROP INDEX "User_uuid_key";

-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("uuid");
