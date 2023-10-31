// A function to validate an email address
export function validateEmail(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

// A function to validate a password for minimum length
export function validatePassword(password, minLength = 8) {
  return password.length >= minLength;
}

// A function to validate a required field
export function validateRequiredField(value) {
  return value.trim() !== '';
}

// A function to validate a phone number
export function validatePhoneNumber(phoneNumber) {
  // This regular expression checks if the provided phone number is in a valid format.
  // It accepts various formats like (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, and more.
  const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return phoneRegex.test(phoneNumber);
}

// A function to validate a URL
export function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
