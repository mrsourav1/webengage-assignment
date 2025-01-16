# CSV Generator
This project is an Express.js server that generates a CSV file by integrating data from three APIs. The CSV contains the fields `name`, `title`, and `body` mapped by ID.

## Requirements
- Node.js
- NPM (node package manager)

## SETUP Instructions
1. Clone this repository:
    git clone <repository-url>
    cd <repository-name>
2. create .env file and copy whats inside the example.env file into .env file or you could just run
    cp example.env .env
3. RUN "npm install" .
4. Start the server just RUN this command "node index.js"
5. now open your browser or any tool where you could test your api for example:
http://localhost:3005/generate-csv this is the url i am going to run in my postman.
6. 
{
  "message": "CSV generated successfully!",
  "filePath": "output/data.csv"
}
This is the response you will get and checkout your output directory for the generated CSV file.