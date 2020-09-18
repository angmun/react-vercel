// apiKey: 'keyr1gsZzM2vaTR2k'
export function fetchEvents(baseKey, table, { noOfRecords, tableView }) {
  return fetch(
    `https://api.airtable.com/v0/${baseKey}/${table}?maxRecords=${noOfRecords}&view=${encodeURI(
      tableView
    )}&api_key=keyr1gsZzM2vaTR2k`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.records;
    })
    .catch((error) => console.error("From fetchEvents:", error));
}
