import React from 'react';
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

// 🔹 Helper function (40 chars max)
const truncateText = (text, maxChars = 50) => {
  if (!text) return "";
  return text.length > maxChars
    ? text.slice(0, maxChars) + "..."
    : text;
};



const Property = ({ image, price, summary, bathrooms, bedrooms }) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
          cursor: 'pointer',
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="property"
        sx={{
          objectFit: 'cover',
          width: '100%',
        }}
      />

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        {/* Summary (max 50 chars) */}
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontWeight: 500,
            fontSize: '0.95rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {truncateText(summary, 50)}
        </Typography>

        {/* Details */}
        <Box
          sx={{
            display: "flex",
            flexDirection:{
              xs:"column",
              lg:"row"
            },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <BathtubIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {bathrooms} Baths
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <BedIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {bedrooms} Rooms
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AttachMoneyIcon fontSize="small" color="action" />
            <Typography variant="body2" fontWeight="bold" color="primary">
              £{price?.toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Property;