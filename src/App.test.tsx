import getPasswordStrength from "./PasswordStrengthChecker";

describe('getPasswordStrength', () => {
  it('should return 5 for a weak password with 1 character', () => {
    const password = 'a';
    const steps = getPasswordStrength(password);
    expect(steps).toBe(5);
  });

  it('should return 3 for a weak password with 3 characters', () => {
    const password = 'aA1';
    const steps = getPasswordStrength(password);
    expect(steps).toBe(3);
  });

  it('should return 0 for a strong password', () => {
    const password = '1337C0d3';
    const steps = getPasswordStrength(password);
    expect(steps).toBe(0);
  });
});
