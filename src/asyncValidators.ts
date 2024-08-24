// asyncValidators.ts

// Simulate an async email check (e.g., against a database)
export const asyncEmailCheck = async (value: string): Promise<boolean> => {
  // Simulate a delay (e.g., API call)
  return new Promise((resolve) =>
    setTimeout(() => resolve(value.includes("@")), 1000)
  );
};
