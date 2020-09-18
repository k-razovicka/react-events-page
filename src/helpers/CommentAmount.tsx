export const commentAmount = () => {
  const min = 1;
  const max = 20;
  const rand = min + Math.floor(Math.random() * (max - min));
  return rand;
};
