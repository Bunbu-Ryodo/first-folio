/*
  Warnings:

  - You are about to drop the column `website` on the `Project` table. All the data in the column will be lost.
  - Added the required column `url` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "website",
ADD COLUMN     "url" TEXT NOT NULL;
