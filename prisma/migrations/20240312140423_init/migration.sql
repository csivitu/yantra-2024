-- DropForeignKey
ALTER TABLE "teams" DROP CONSTRAINT "teams_user_name_fkey";

-- AlterTable
ALTER TABLE "teams" ALTER COLUMN "user_name" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_user_name_fkey" FOREIGN KEY ("user_name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;
