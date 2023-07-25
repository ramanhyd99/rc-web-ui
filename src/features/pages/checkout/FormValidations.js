export const isValidName = (name_str) => {
    // Trim leading and trailing whitespace
    const trimmedName = name_str.trim();
  
    // Check if the name contains any invalid characters
    const regex = /^[A-Za-z\s]+$/; // eslint-disable-line
    const isValid = regex.test(trimmedName);
  
    return isValid;
  };

  export const isValidNumber = (number_str) => {
    if (number_str === "") return false;
    // Trim leading and trailing whitespace
    const trimmedNumber = number_str.trim();
  
    // Check if the number contains any invalid characters
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // eslint-disable-line
    const isValid = regex.test(trimmedNumber);
  
    return isValid;
  };
  
  export const isValidEmail = (email) => {
    if (email === "") return false;
    // Trim leading and trailing whitespace
    const trimmedEmail = email.trim();
  
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // eslint-disable-line
    const isValid = regex.test(trimmedEmail);
  
    return isValid;
  };
