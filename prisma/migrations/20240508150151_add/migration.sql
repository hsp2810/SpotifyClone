/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `artist` ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Artist_username_key` ON `Artist`(`username`);
