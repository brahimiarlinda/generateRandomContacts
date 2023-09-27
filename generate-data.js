
const generateCsvHeader = (headers) => {
  return headers.map(header => header.title).join(',') + '\n';
};

const generateCsvRow = (record, headers) => {
  return headers.map(header => record[header.id]).join(',') + '\n';
};

const generateRandomRecords = (count) => {
  const records = [];

  for (let i = 0; i < count; i++) {
    records.push({
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
    });
  }

  return records;
};

const logCsvContent = (records, headers) => {
  let csvContent = generateCsvHeader(headers);

  for (const record of records) {
    csvContent += generateCsvRow(record, headers);
  }

  console.log(`CSV content with ${records.length} random records generated.`);
  console.log(csvContent);  // Logging the CSV content to the console
};

const headers = [
  { id: 'email', title: 'Email' },
  { id: 'firstName', title: 'First Name' },
  { id: 'lastName', title: 'Last Name' },
  { id: 'phone', title: 'Phone' },
];

const recordCount = 5000;
const randomRecords = generateRandomRecords(recordCount);
logCsvContent(randomRecords, headers);
