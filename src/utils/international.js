export const formatDate = (date, formatStr = 'PPP', locale = 'en') => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const formatNumber = (number, locale = 'en-US') => {
  return new Intl.NumberFormat(locale).format(number);
};

export const getLocalizedDirection = (locale) => {
  return ['ar', 'he', 'fa'].includes(locale) ? 'rtl' : 'ltr';
}; 