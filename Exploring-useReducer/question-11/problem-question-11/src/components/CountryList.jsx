import { useEffect, useReducer, useState } from "react";
import { fetchCountries } from "../api/countryAPI";
import { appReducer, initialState } from "../context/AppReducer";
import CountryCard from "./CountryCard";
import PaginationControls from "./PaginationControls";
import { useDebounce } from "../hooks/useDebounce";

const CountryList = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const debouncedSearch = useDebounce(state.search);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        dispatch({ type: "SET_COUNTRIES", payload: data });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
        setError("Failed to load countries.");
        setLoading(false);
      });
  }, []);

  const searchValue = debouncedSearch.trim().toLowerCase();
     

const filtered = state.countries.filter((c) =>
  (c.name || "").toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const start = (state.page - 1) * state.perPage;
  const paginated = filtered.slice(start, start + state.perPage);

  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="text"
        placeholder="Search by country name..."
        value={state.search}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
        style={{ padding: "0.5rem", marginBottom: "1rem", width: "100%" }}
      />

      {loading && <p>Loading countries...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && filtered.length === 0 && (
        <p>No countries found for your search.</p>
      )}

      <div className="grid">
        {paginated.map((c) => (
          <CountryCard key={c.country} country={c} />
        ))}
      </div>

      {filtered.length > state.perPage && (
        <PaginationControls
          currentPage={state.page}
          total={filtered.length}
          perPage={state.perPage}
          onPageChange={(page) =>
            dispatch({ type: "SET_PAGE", payload: page })
          }
        />
      )}
    </div>
  );
};

export default CountryList;
