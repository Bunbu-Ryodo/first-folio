-- CreateTable
CREATE TABLE "Tech" (
    "id" SERIAL NOT NULL,
    "technologies" TEXT[],
    "developerId" TEXT NOT NULL,

    CONSTRAINT "Tech_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tech_developerId_key" ON "Tech"("developerId");

-- AddForeignKey
ALTER TABLE "Tech" ADD CONSTRAINT "Tech_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
