import csv from "csv-parser";
import fs from "fs";

export default function handler(req, res) {
  const filePath = "./public/ExecTeam2023-2024.csv";
  const results = [];
  var index = 0;

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => {
      // Add each row of the CSV data to the results array
      data.id = index;
      index += 1;
      results.push(data);
    })
    .on("end", () => {
      console.log("CSV file successfully read.");
      res.status(200).json(results);
    })
    .on("error", (error) => {
      console.error("Error reading CSV file:", error);
      res.status(500).json({ message: "Error reading CSV file." });
    });
}
