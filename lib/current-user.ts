export const currentUser = async (): Promise<boolean> => {
  return new Promise((resolve) => setTimeout(() => resolve(false), 50));
};
