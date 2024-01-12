-- CreateTable
CREATE TABLE "CV" (
    "id" SERIAL NOT NULL,
    "cv" BYTEA,
    "jobSeekerId" TEXT NOT NULL,

    CONSTRAINT "CV_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CV_jobSeekerId_key" ON "CV"("jobSeekerId");

-- AddForeignKey
ALTER TABLE "CV" ADD CONSTRAINT "CV_jobSeekerId_fkey" FOREIGN KEY ("jobSeekerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
