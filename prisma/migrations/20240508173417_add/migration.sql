/*
  Warnings:

  - You are about to drop the column `public_id` on the `music` table. All the data in the column will be lost.
  - You are about to drop the column `secure_url` on the `music` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `music` DROP COLUMN `public_id`,
    DROP COLUMN `secure_url`,
    ADD COLUMN `music_public_id` VARCHAR(191) NULL,
    ADD COLUMN `music_secure_url` VARCHAR(191) NULL,
    ADD COLUMN `thumbnail_public_id` VARCHAR(191) NULL,
    ADD COLUMN `thumbnail_secure_url` VARCHAR(191) NULL;
