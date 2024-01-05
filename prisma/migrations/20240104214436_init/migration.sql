-- CreateTable
CREATE TABLE "Introduce" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "job_title" VARCHAR(255),
    "bio" VARCHAR(255),

    CONSTRAINT "Introduce_pkey" PRIMARY KEY ("id")
);
