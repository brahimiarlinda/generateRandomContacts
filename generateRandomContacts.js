const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generateRandomContact(numContacts, filePath) {
  const stream = fs.createWriteStream(filePath, {flags: 'w'});
  stream.write("Email,First Name,Last Name,Phone Number\n");

  for (let i = 0; i < numContacts; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email =faker.internet.email({ firstName, lastName })
    const phoneNumber = faker.phone.imei();
    stream.write(`${email},${firstName},${lastName},${phoneNumber}\n`);
  }

  stream.end();
}

let numContacts = Number(process.argv[2]) || 1;
let fileName = process.argv[3] || 'file-name.txt';

numContacts = Number.isInteger(numContacts) && numContacts > 0 ? numContacts : 1;

generateRandomContact(numContacts, fileName);
