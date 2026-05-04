const currency = 'usd';
const date_from = '20220707';
const date_to = '20220719';

const nbuUrl = new URL('https://bank.gov.ua/NBU_Exchange/exchange_site');

nbuUrl.searchParams.append('start', date_from);
nbuUrl.searchParams.append('end', date_to);
nbuUrl.searchParams.append('valcode', currency);
nbuUrl.searchParams.append('json','');

console.log(nbuUrl.toString());