// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise((resolve) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => resolve(func(...args)), waitFor);
    });
}

export default debounce;
