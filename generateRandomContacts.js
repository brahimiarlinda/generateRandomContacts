function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateRandomContact(numContacts) {
    const firstNames = ['John', 'Jane', 'Emily', 'Michael'];
    const lastNames = ['Doe', 'Smith', 'Brown', 'Williams'];
    const domains = ['example.com', 'mail.com', 'test.org'];
  
    // Print CSV header
    console.log("Email,First Name,Last Name,Phone Number");
  
    for (let i = 0; i < numContacts; i++) {
      const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
      const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domains[getRandomInt(0, domains.length - 1)]}`;
      const phoneNumber = `+1 ${getRandomInt(100, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`;
  
      // Print CSV row
      console.log(`${email},${firstName},${lastName},${phoneNumber}`);
    }
  }
  
  // Usage example: Generate 5 random contacts
  const numContacts = process.argv[2] || 1;  // Get the number from the command line arguments or default to 1
  generateRandomContact(numContacts);
  
