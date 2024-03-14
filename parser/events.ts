import pkg from 'pg';
import readXlsxFile from 'read-excel-file/node';
import 'dotenv/config';

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function main() {
    const rows = await readXlsxFile('events.xlsx'); 
    rows.shift(); 

    for (const row of rows) {
        const [eventName, eventType, description, clubName, venue, eventStart, eventEnd, isOvernight, id] = row;

        await pool.query(
            `INSERT INTO events ("eventName", "eventType", "description", "clubName", "venue", "eventStart", "eventEnd", "isOvernight", "id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [eventName, eventType, description, clubName, venue, eventStart, eventEnd, isOvernight, id]
        );
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await pool.end();
    });