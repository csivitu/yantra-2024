import readXlsxFile from 'read-excel-file/node';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
    const filePath = path.join(__dirname, 'yantra_events.xlsx');
    const rows = await readXlsxFile(filePath);
    rows.shift();

    for (const row of rows) {

        await prisma.events.create({
            data: {
                eventName: row[4].toString(),
                eventType: row[3].toString(),
                description: row[13].toString(),
                clubName: row[2].toString(),
                venue: row[12].toString(),
                eventStart: row[8].toString(),
                eventEnd: row[9].toString(),
                isOvernight: row[10].toString(),
                logo: row[14].toString(),
                collaboratingWith: row[7]? row[7].toString() : null
            }
        })

        // await pool.query(
        //     `INSERT INTO events (event_name, event_type, description, club_name, venue, event_start, event_end, is_overnight, logo, collaborating_with) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        //     [row[4], row[3], row[14], row[2], row[12],row[8], row[9], row[11], row[14], row[7]]
        // );
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });