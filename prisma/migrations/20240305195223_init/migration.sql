/*
  Warnings:

  - A unique constraint covering the columns `[teamName]` on the table `teams` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `teams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "teams_teamName_key" ON "teams"("teamName");

-- CreateIndex
CREATE UNIQUE INDEX "teams_user_id_key" ON "teams"("user_id");
