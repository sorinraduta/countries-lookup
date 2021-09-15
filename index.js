const lookup = require('country-code-lookup')

const countryNames = [
  'Albania',
  'Nicaragua',
  'Belarus',
  'Bosnia and Herzegovina',
  'Bulgaria',
  'Democratic Republic of the Congo',
  'Croatia',
  'Kosovo',
  'Republic of Macedonia',
  'Montenegro',
  'Congo',
  'Romania',
  'Serbia',
  'Slovenia',
  'Burundi',
  'Central African Republic',
  'Cuba',
  'Iran',
  'Iraq',
  'Lebanon',
  'Libya',
  'North Korea (DPRK)',
  'Somalia',
  'Sudan',
  'Syria ',
  'Venezuela',
  'Yemen',
  'Belgium',
  'Brazil,Canada',
  'China (PRC)',
  'Hong Kong',
  'Indonesia',
  'Latvia',
  'Netherlands',
  'Norway',
  'Pakistan',
  'Portugal',
  'Singapore',
  'Spain',
  'Sweden',
  'Switzerland',
  'United Arab Emirates (UAE)',
  'United States of America (USA)',
  'Greece',
  'Finland',
  'Ukraine',
]

countryNames.forEach((countryName) => {
  const countryLookup = lookup.byCountry(countryName) || {};
  const { iso3 = '???' } = countryLookup;

  console.log(iso3);
});

// {
//   continent: 'Europe',
//   region: 'Western Europe',
//   country: 'United Kingdom',
//   capital: 'London',
//   fips: 'UK',
//   iso2: 'GB',
//   iso3: 'GBR',
//   isoNo: '826',
//   internet: 'UK'
// }
