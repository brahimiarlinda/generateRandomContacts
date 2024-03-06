const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generateRandomContact(numContacts, filePath) {
  const stream = fs.createWriteStream(filePath, {flags: 'w'});
  stream.write("Phone number,Organisation name,First name,Last name,Email,Date of birth\n");

  for (let i = 0; i < numContacts; i++) {
    const phoneNumber = faker.phone.number();
    const organisationName = faker.person.firstName();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email(firstName,lastName);
    const dateOfBirth = faker.date.past(30, new Date(2000, 0, 1)).toISOString().split('T')[0]; // Corrected method for date of birth
    stream.write(`${phoneNumber},${organisationName},${firstName},${lastName},${email},${dateOfBirth}\n`);
  }

  stream.end();
}

let numContacts = Number(process.argv[2]) || 1;
let fileName = process.argv[3] || 'file-name.txt';

numContacts = Number.isInteger(numContacts) && numContacts > 0 ? numContacts : 1;

generateRandomContact(numContacts, fileName);
