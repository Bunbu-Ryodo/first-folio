/*
  Warnings:

  - You are about to drop the column `cv` on the `CV` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CV" DROP COLUMN "cv",
ADD COLUMN     "cvPath" TEXT,
ADD COLUMN     "cvUrl" TEXT;
