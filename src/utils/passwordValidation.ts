export interface PasswordStrength {
  score: number;
  label: "weak" | "fair" | "good" | "strong";
  checks: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    symbol: boolean;
    noConsecutive: boolean;
  };
}

export function validatePassword(password: string): PasswordStrength {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    noConsecutive:
      !/(?:012|123|234|345|456|567|678|789|890|321|432|543|654|765|876|987|098)/
        .test(password),
  };

  const passedChecks = Object.values(checks).filter(Boolean).length;

  let score = 0;
  let label: "weak" | "fair" | "good" | "strong" = "weak";

  if (passedChecks === 6) {
    score = 100;
    label = "strong";
  } else if (passedChecks >= 5) {
    score = 75;
    label = "good";
  } else if (passedChecks >= 4) {
    score = 50;
    label = "fair";
  } else if (passedChecks >= 3) {
    score = 25;
    label = "weak";
  } else {
    score = 0;
    label = "weak";
  }

  return { score, label, checks };
}
