export const formatDate = (date) => {
  const d = new Date(date);
  if (isNaN(d.getDate())) {
    return d;
  }
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
