import { createConnection } from 'typeorm';

createConnection()
  .then(() => {
    console.log('Connected to database ✔');
  })
  .catch(error => {
    console.log(`Error trying to create connection with database: ${error}`);
  });
