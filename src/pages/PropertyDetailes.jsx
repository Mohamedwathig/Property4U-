import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { Box, Typography, Grid, Container, Divider,Button } from "@mui/material";
import { fetchApi } from "../utils/fetchphotos";
import {fetchApiDetails} from "../utils/fetchDetailes"
import { Slide } from 'react-slideshow-image';
import BedIcon from "@mui/icons-material/Bed";
import millify from "millify";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import 'react-slideshow-image/dist/styles.css'
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const Slideshow = ({ images }) => {
  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="slide-container">
      <Slide
        arrows={true}
        indicators={true}
        autoplay={true}
        duration={3000}
        transitionDuration={500}
        infinite={true}
      >
        {images.map((img, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${img.href || img.url})`
              }}
            >
              <span style={spanStyle}>
                {`Image ${index + 1}`}
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};


const PropertyDetails = () => {
  const { propertyId } = useParams();
  const [details, setDetails] = useState(null);
  const [photos, setPhotos] = useState(null); // Fixed variable name (was setphotos)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!propertyId) {
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(null);

      try {
        // Fetch both in parallel for better performance
        const [photosData, detailsData] = await Promise.all([
          fetchApi(propertyId),
          fetchApiDetails(propertyId)
        ]);
        
        setPhotos(photosData);
        setDetails(detailsData);
      } catch (error) {
        console.error("Failed to fetch property data:", error);
        setError("Failed to load property data");
        setPhotos(null);
        setDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [propertyId]); // Only one useEffect needed
 
  console.log(photos)
  console.log(details)
  console.log("PHOTOS COUNT:", details?.home?.photos?.length);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!details && !photos) return <div>No property data found</div>;

  return (
    <div>
      <h2>Property Detailes</h2>

      {details?.photos?.length === 0 ? (
        <p>No photos available</p>
      ) : (
        <div>
          <Slideshow images={details.home.photos} />
        </div>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, padding: "50px" }}>
  {/* Price */}
  <Typography sx={{ fontSize: "54px", fontWeight: "bold" }}>
    {millify(details.home.list_price)} USD
  </Typography>

  {/* Property details like beds, baths, area */}
  <Grid container spacing={4} alignItems="center" justifyContent="center">
    {/* Beds */}
    <Grid item sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <BedIcon />
      <Typography>{details.home.description.beds} Beds</Typography>
    </Grid>

    {/* Baths */}
    <Grid item sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <BathtubIcon />
      <Typography>{details.home.description.baths} Baths</Typography>
    </Grid>

    {/* Area (if available) */}
    {details.home.description.sqft && (
      <Grid item sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>{millify(details.home.description.sqft)} sqft</Typography>
      </Grid>
    )}
  </Grid>

  {/* Divider */}
  <Divider sx={{ marginY: 3 }} />

  {/* Description */}
  <Typography sx={{ fontSize: "18px", lineHeight: 1.6 }}>
    {details.home.description.text || "No description available."}
  </Typography>

  {/* Optional action button */}
  <Button href="/contact" variant="contained" color="primary" sx={{ marginTop: 2 }}>
    Contact Agent
  </Button>
</Box>

    </div>
  );
};

export default PropertyDetails;