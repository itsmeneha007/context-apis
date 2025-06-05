const CountryCard = ({ country }) => (
  <div className="card">
    <h3>{country.name}</h3>
    <p>{country.region}</p>
    <p>{country.country}</p>
  </div>
);
export default CountryCard;