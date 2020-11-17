export const upperCaseString = (string = '') => string.toUpperCase();

export const lowerCaseString = (string = '') => string.toLowerCase();

export const capitalizeString = (string = '') =>
  string ? string.charAt(0).toUpperCase() + string.slice(1) : '';

export const thousandSeparator = (number = 0) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const formatRupiah = (number = 0) => `Rp${thousandSeparator(number)}`;

export const monthListIndonesia = {
  '01': 'Januari',
  '02': 'Februari',
  '03': 'Maret',
  '04': 'April',
  '05': 'Mei',
  '06': 'Juni',
  '07': 'Juli',
  '08': 'Agustus',
  '09': 'September',
  10: 'Oktober',
  11: 'November',
  12: 'Desember',
};

export const formatDateIndonesia = (string = '2020-01-01') => {
  const year = string.slice(0, 4);
  const month = string.slice(5, 7);
  const date = string.slice(8, 10);

  const convertedDate = Number(date);
  const convertedMonth = monthListIndonesia[month];

  return `${convertedDate} ${convertedMonth} ${year}`;
};

export function sortObjectByStringAscending(array = [], sortAccessor) {
  return array.sort((a, b) => {
    const stringA = a[sortAccessor].toLowerCase();
    const stringB = b[sortAccessor].toLowerCase();

    let comparison = 0;
    if (stringA > stringB) {
      comparison = 1;
    } else if (stringA < stringB) {
      comparison = -1;
    }
    return comparison;
  });
}

export function sortObjectByStringDescending(array = [], sortAccessor) {
  return array.sort((a, b) => {
    const stringA = a[sortAccessor].toLowerCase();
    const stringB = b[sortAccessor].toLowerCase();

    let comparison = 0;
    if (stringB > stringA) {
      comparison = 1;
    } else if (stringB < stringA) {
      comparison = -1;
    }
    return comparison;
  });
}

export function sortObjectByDateAscending(array = [], sortAccessor) {
  return array.sort((a, b) => {
    const dateStringA = a[sortAccessor];
    const yearA = Number(dateStringA.slice(0, 4));
    const monthA = Number(dateStringA.slice(5, 7));
    const dateA = Number(dateStringA.slice(8, 10));

    const dateStringB = b[sortAccessor];
    const yearB = Number(dateStringB.slice(0, 4));
    const monthB = Number(dateStringB.slice(5, 7));
    const dateB = Number(dateStringB.slice(8, 10));

    return new Date(yearA, monthA, dateA) - new Date(yearB, monthB, dateB);
  });
}

export function sortObjectByDateDescending(array = [], sortAccessor) {
  return array.sort((a, b) => {
    const dateStringA = a[sortAccessor];
    const yearA = Number(dateStringA.slice(0, 4));
    const monthA = Number(dateStringA.slice(5, 7));
    const dateA = Number(dateStringA.slice(8, 10));

    const dateStringB = b[sortAccessor];
    const yearB = Number(dateStringB.slice(0, 4));
    const monthB = Number(dateStringB.slice(5, 7));
    const dateB = Number(dateStringB.slice(8, 10));

    return new Date(yearB, monthB, dateB) - new Date(yearA, monthA, dateA);
  });
}
