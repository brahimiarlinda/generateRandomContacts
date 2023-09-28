const faker = require('faker');

function generateRandomContact(numContacts) {
  // Print CSV header
  console.log("Email,First Name,Last Name,Phone Number");

  for (let i = 0; i < numContacts; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const phoneNumber = faker.phone.phoneNumber('+1 ###-###-####');

    // Print CSV row
    console.log(`${email},${firstName},${lastName},${phoneNumber}`);
  }
}

// Usage example: Generate 5 random contacts
const numContacts = process.argv[2] || 1;  // Get the number from the command line arguments or default to 1
generateRandomContact(numContacts);
