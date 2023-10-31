// Function to format a date as a string (e.g., "yyyy-mm-dd")
export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`; //can change format here
}

// Function to get the current date as a string
export function getCurrentDate() {
  const currentDate = new Date();
  return formatDate(currentDate);
}

// Function to add days to a given date
export function addDaysToDate(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

// Function to check if a date is in the future
export function isDateInFuture(date) {
  const currentDate = new Date();
  return date > currentDate;
}
