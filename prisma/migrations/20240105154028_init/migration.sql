/*
  Warnings:

  - A unique constraint covering the columns `[personId]` on the table `Introduce` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `personId` to the `Introduce` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Introduce" ADD COLUMN     "personId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Introduce_personId_key" ON "Introduce"("personId");

-- AddForeignKey
ALTER TABLE "Introduce" ADD CONSTRAINT "Introduce_personId_fkey" FOREIGN KEY ("personId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
