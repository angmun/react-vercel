export function fetchEvents(baseKey, table, { noOfRecords, tableView }) {
  const apiKey = process.env.REACT_APP_AIRTABLE_TEST;
  return fetch(
    `https://api.airtable.com/v0/${baseKey}/${table}?maxRecords=${noOfRecords}&view=${encodeURI(
      tableView
    )}&api_key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.records;
    })
    .catch((error) => console.error('From fetchEvents:', error));
}
