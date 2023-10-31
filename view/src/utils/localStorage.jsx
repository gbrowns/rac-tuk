// Function to set a key-value pair in localStorage
export function setLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('localStorage error:', error);
  }
}

// Function to get a value from localStorage
export function getLocalStorageItem(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('localStorage error:', error);
    return null;
  }
}

// Function to remove an item from localStorage
export function removeLocalStorageItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('localStorage error:', error);
  }
}

// Function to clear all data from localStorage
export function clearLocalStorage() {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('localStorage error:', error);
  }
}
