/*
  Warnings:

  - You are about to drop the column `user_id` on the `teams` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_name]` on the table `teams` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_name` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teams" DROP CONSTRAINT "teams_user_id_fkey";

-- DropIndex
DROP INDEX "teams_user_id_key";

-- AlterTable
ALTER TABLE "teams" DROP COLUMN "user_id",
ADD COLUMN     "user_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "teams_user_name_key" ON "teams"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_user_name_fkey" FOREIGN KEY ("user_name") REFERENCES "users"("name") ON DELETE CASCADE ON UPDATE CASCADE;
