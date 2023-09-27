# Generate Random Contacts

## Introduction

This project allows you to generate a specified number of random contacts. The generated contacts will follow the format shown below:

```csv
Email,First Name,Last Name,Phone Number
emily.williams@mail.com,Emily,Williams,+1 919-298-4641
jane.smith@example.com,Jane,Smith,+1 738-231-8908
jane.smith@mail.com,Jane,Smith,+1 706-616-7961
michael.smith@test.org,Michael,Smith,+1 422-795-9151
jane.doe@test.org,Jane,Doe,+1 453-677-9716
john.doe@example.com,John,Doe,+1 208-253-1101
jane.doe@mail.com,Jane,Doe,+1 264-791-1007
jane.brown@example.com,Jane,Brown,+1 303-832-5787
```

## Installation

To install the project, run the following command:

```bash
npm install
```

## Usage

To generate 100 contacts and export them to a file named `file-name.txt` in the root of the project, execute the following command:

```bash
npm run generate:data -- 100 > file-name.txt
```

## Tips

To identify duplicate entries, you can use the following online tool: [Somacon Duplicate Line Tool](https://www.somacon.com/p568.php)
