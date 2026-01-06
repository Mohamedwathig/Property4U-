import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchFilters from "../pages/SearchFilters"
import image from "../assets/not-found.webp"
import Property from "../components/Property";

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const [properties, setProperties] = useState([]); // <-- lift state here

  return (
    <Box>
      {/* Filters header */}
      <Box sx={{
        display: "flex", 
        padding: "10px 20px", 
        borderTop: "2px solid", 
        borderColor: "grey.300", 
        backgroundColor: "primary.light",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 1,
        mb: 2
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Search Property By Filters
        </Typography>
        
        <Button
          variant="contained"
          startIcon={<FilterListIcon />}
          onClick={() => setSearchFilters(!searchFilters)}
          sx={{
            backgroundColor: "primary.main",
            '&:hover': {
              backgroundColor: "primary.dark"
            }
          }}
        >
          {searchFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </Box>

      {/* SearchFilters Component */}
      {searchFilters && (
        <SearchFilters properties={properties} setProperties={setProperties} />
      )}

      {/* Properties Grid */}
      {properties.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <img src={image} width={"400px"} />
          <Typography>No properties found</Typography>
        </Box>
      ) : (
        <Grid container spacing={4} sx={{ justifyContent: "center", paddingTop:"50px" }}>
          {properties.map((p) => (
            <Grid item xs={12} sm={6} lg={6} key={p.contactUrl || p.id || Math.random()}>
              <Property 
                image={p.propertyImages?.mainImageSrc}
                price={p.price?.amount} 
                summary={p.summary}
                bedrooms={p.bedrooms} 
                bathrooms={p.bathrooms}
                isForSale={p.channel === "BUY"} // adjust if needed
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Search;
