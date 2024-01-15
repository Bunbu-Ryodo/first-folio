-- CreateTable
CREATE TABLE "Endorsement" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "comments" TEXT,
    "candidateId" TEXT NOT NULL,

    CONSTRAINT "Endorsement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Endorsement" ADD CONSTRAINT "Endorsement_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
