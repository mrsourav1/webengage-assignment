import fs from "fs";
import { Parser } from 'json2csv';

export const createCSV = async (data, filePath) => {
  try {
    const fields = ['name', 'title', 'body'];
    const parser = new Parser({ fields });

    const csv = parser.parse(data);

    const dir = filePath.substring(0, filePath.lastIndexOf('/'));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, csv, 'utf8');
  } catch (error) {
    throw new Error(`Error generating CSV file: ${error.message}`);
  }
};
