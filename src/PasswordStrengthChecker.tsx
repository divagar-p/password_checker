
// Password strength function
const getPasswordStrength = (password: string): number => {
  let missingRequirements = 0;
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);

  if (!hasLowerCase) missingRequirements++;
  if (!hasUpperCase) missingRequirements++;
  if (!hasDigit) missingRequirements++;

  const length = password.length;
  let repeatingChars = 0;
  for (let i = 2; i < length; i++) {
    if (password[i] === password[i - 1] && password[i - 1] === password[i - 2]) {
      repeatingChars++;
      i++; // Skip the next character as it's a repeat
    }
  }

  // Calculate the number of steps required
  let steps = 0;
  if (length < 6) {
    steps += 6 - length;
  } else if (length > 20) {
    steps += length - 20;
  }

  return Math.max(steps, missingRequirements, repeatingChars);
};

export default getPasswordStrength;
