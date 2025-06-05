export const fetchCountries = async () => {
  const res = await fetch("https://api.first.org/data/v1/countries");
  const data = await res.json();
  return Object.values(data.data);
};