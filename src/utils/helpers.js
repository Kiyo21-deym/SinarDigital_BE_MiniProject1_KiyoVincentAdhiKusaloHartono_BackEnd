exports.calculateProgress = (current, total) => {
  if (total == 0) return 0;
  return Math.round((current / total) * 100);
};
