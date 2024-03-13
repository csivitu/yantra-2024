import pkg from 'pg';
import { faker } from '@faker-js/faker';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'pgpass',
    port: 5432,
});


async function main() {
    for (let i = 0; i < 100; i++) {
        const eventName = faker.lorem.words(3);
        const eventType = faker.lorem.word();
        const description = faker.lorem.sentence();
        const clubName = faker.company.name();
        const venue = faker.location.street();
        const eventStart = faker.date.future();
        const eventEnd = faker.date.future();
        const isOvernight = faker.datatype.boolean();
        const id = faker.string.uuid();

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