-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F', 'NB');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "gender" "Gender";
