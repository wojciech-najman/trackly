export const truncateText = (text: string, maxLength: number = 20): string | null => {
  return text.length > maxLength ? text.substr(0, maxLength) + '...' : text;
};
