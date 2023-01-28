import * as yup from 'yup';

const weatherRequestZipCodeSchema = yup
  .string()
  .trim()
  .matches(/^[0-9]{5}$/, 'Zip code must be a 5-digit number.');

export { weatherRequestZipCodeSchema };
