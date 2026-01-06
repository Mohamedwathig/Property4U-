import React, { useState, useEffect } from "react";
import { Box, Select, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { filterData } from "../utils/FilterData";
import { fetchApi } from "../utils/fetchApi";
import { Button } from "@mui/material";

const SearchFilters = ({ properties, setProperties }) => {
  const [filters] = useState(filterData);
  // const [properties, setProperties] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const searchProperties = (filterValues) => {
    const searchParams = new URLSearchParams(location.search);

    Object.keys(filterValues).forEach((key) => {
      if (filterValues[key]) {
        searchParams.set(key, filterValues[key]);
      } else {
        searchParams.delete(key);
      }
    });

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
const getProperties = async () => {
  const searchParams = new URLSearchParams(location.search);
  const purpose = searchParams.get("purpose") || "for-rent";

  let endpoint = "";
  let query = {};

  if (purpose === "for-sale") {
    endpoint = "/buy/property-for-sale";
    query = {
      identifier: "REGION^1036",
      sort_by: "HighestPrice",
      search_radius: "0.0",
      added_to_site: "1",
    };
  } else {
    endpoint = "/rent/property-to-rent";
    query = {
      identifier: "REGION^1036",
      sort_by: "HighestPrice",
      search_radius: "0.0",
      added_to_site: "1",
      type_of_let: "LongTerm",
    };
  }

  for (const [key, value] of searchParams.entries()) {
    if (key !== "purpose") query[key] = value;
  }

  const queryString = new URLSearchParams(query).toString();

  try {
    const data = await fetchApi(`${endpoint}?${queryString}`);
    setProperties(data);
  } catch (error) {
    console.error("API fetch error:", error);
    setProperties([]);
  }
};

 useEffect(() => {
  const getProperties = async () => {
    const searchParams = new URLSearchParams(location.search);
    const purpose = searchParams.get("purpose") || "for-rent";

    let endpoint = "";
    let query = {};

    if (purpose === "for-sale") {
      endpoint = "/buy/property-for-sale";
      query = {
        identifier: "REGION^1036",
        sort_by: "HighestPrice",
        search_radius: "0.0",
        added_to_site: "1",
      };
    } else {
      endpoint = "/rent/property-to-rent";
      query = {
        identifier: "REGION^1036",
        sort_by: "HighestPrice",
        search_radius: "0.0",
        added_to_site: "1",
        type_of_let: "LongTerm",
      };
    }

    // Add filters from URL if any
    for (const [key, value] of searchParams.entries()) {
      if (key !== "purpose") query[key] = value;
    }

    const queryString = new URLSearchParams(query).toString();

    try {
      const data = await fetchApi(`${endpoint}?${queryString}`);
      console.log("Fetched data:", data);
      setProperties(data);
    } catch (error) {
      console.error("API fetch error:", error);
      setProperties([]);
    }
  };

  getProperties();
}, [location.search]);


  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      <Button
  variant="contained"
  onClick={getProperties}
>
  Apply Filters
</Button>

      {filters.map((filter) => (
        <Select
          key={filter.queryName}
          sx={{ width: 200 }}
          displayEmpty
          defaultValue=""
          onChange={(e) =>
            searchProperties({ [filter.queryName]: e.target.value })
          }
        >
          <MenuItem value="" disabled>
            {filter.placeholder}
          </MenuItem>
          {filter.items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      ))}
    </Box>
  );
};

export default SearchFilters;
