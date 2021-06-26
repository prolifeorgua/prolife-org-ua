export function formatNum (number) {
  return new Intl.NumberFormat('uk-UA').format(number);
}

export function formatDate (date) {
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
}
