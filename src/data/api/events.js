const apiKey = process.env.REACT_APP_AIRTABLE_TEST;
export function fetchEvents(
  baseKey,
  table,
  { noOfRecords, tableView, pageSize = 100 }
) {
  return fetch(
    `https://api.airtable.com/v0/${baseKey}/${table}?maxRecords=${noOfRecords}&pageSize=${pageSize}&view=${encodeURI(
      tableView
    )}&api_key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.records;
    })
    .catch((error) => console.error('From fetchEvents:', error));
}

export function fetchAnEvent(baseKey, table, eventId) {
  return fetch(
    `https://api.airtable.com/v0/${baseKey}/${table}/${eventId}?api_key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error('From fetchAnEvent:', error));
}
