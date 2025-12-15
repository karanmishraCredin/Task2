export default function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-");
   return `${d}-${m}-${y}`;
}
