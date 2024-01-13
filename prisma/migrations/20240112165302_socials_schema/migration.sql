-- CreateTable
CREATE TABLE "Socials" (
    "id" SERIAL NOT NULL,
    "contact_email" TEXT,
    "x" TEXT,
    "instagram" TEXT,
    "facebook" TEXT,
    "linked_in" TEXT,
    "contactId" TEXT NOT NULL,

    CONSTRAINT "Socials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Socials_contactId_key" ON "Socials"("contactId");

-- AddForeignKey
ALTER TABLE "Socials" ADD CONSTRAINT "Socials_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
