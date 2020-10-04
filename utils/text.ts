export const capitalize = (text: string) => text[0].toUpperCase() + text.substr(1, text.length);
export const weightDescription = (weight: number) => {
  if (weight === 400) {
    return 'Regular';
  } if (weight === 500) {
    return 'Medium';
  }

  return 'Bold';
};
