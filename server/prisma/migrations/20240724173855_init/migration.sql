-- CreateTable
CREATE TABLE "GuestWishes" (
    "id" SERIAL NOT NULL,
    "name" CHAR(30) NOT NULL,
    "address" CHAR(30) NOT NULL,
    "wishes" TEXT NOT NULL,

    CONSTRAINT "GuestWishes_pkey" PRIMARY KEY ("id")
);
