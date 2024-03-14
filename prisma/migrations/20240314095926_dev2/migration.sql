/*
  Warnings:

  - You are about to drop the column `createdAt` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `dLink` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `fLink` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `gLink` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `teamCode` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `teamName` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `team_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[team_name]` on the table `teams` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[team_code]` on the table `teams` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `team_code` to the `teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_name` to the `teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "teams" DROP CONSTRAINT "teams_user_name_fkey";

-- DropIndex
DROP INDEX "teams_teamCode_key";

-- DropIndex
DROP INDEX "teams_teamName_key";

-- DropIndex
DROP INDEX "teams_user_name_key";

-- AlterTable
ALTER TABLE "teams" DROP COLUMN "createdAt",
DROP COLUMN "dLink",
DROP COLUMN "fLink",
DROP COLUMN "gLink",
DROP COLUMN "teamCode",
DROP COLUMN "teamName",
DROP COLUMN "updatedAt",
DROP COLUMN "user_name",
ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "figma_link" TEXT,
ADD COLUMN     "github_link" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Team pending review',
ADD COLUMN     "team_code" TEXT NOT NULL,
ADD COLUMN     "team_name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "team_name",
DROP COLUMN "updatedAt",
ADD COLUMN     "bio" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "github_profile" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "linkedin_profile" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "projects" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "teamId" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "event_name" TEXT NOT NULL,
    "event_type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "club_name" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "event_start" TIMESTAMP(3) NOT NULL,
    "event_end" TIMESTAMP(3) NOT NULL,
    "is_overnight" BOOLEAN NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "events_event_name_key" ON "events"("event_name");

-- CreateIndex
CREATE UNIQUE INDEX "teams_team_name_key" ON "teams"("team_name");

-- CreateIndex
CREATE UNIQUE INDEX "teams_team_code_key" ON "teams"("team_code");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
