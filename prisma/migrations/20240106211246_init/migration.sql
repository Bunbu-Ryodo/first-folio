/*
  Warnings:

  - Added the required column `experience` to the `Tech` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tech" ADD COLUMN     "experience" TEXT NOT NULL;
