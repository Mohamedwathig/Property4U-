import React from 'react';
import { Box, Typography, Grid, Container, Divider,Button } from "@mui/material";
import {Link} from "react-router-dom"
import bgimage from "../assets/bg-home.jpg";
import Sec1 from "../components/Sec1";
import Property from "../components/Property";

const Home = ({ propertiesBuy, propertiesRent }) => {
  return (
    <Box sx={{  
      minHeight: "100vh",
      width: "100%",
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Hero section with background and overlay */}
      <Box sx={{ 
        width: '100%',
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: 'relative',
        minHeight: '70vh'
      }}>
        {/* Overlay */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.94) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
        
        {/* Content */}
        <Box sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
          <Sec1 />
        </Box>
      </Box>
      
      {/* Properties section */}
      <Container maxWidth="xl" sx={{ mt: 8, mb: 4  }}>
        
        {/* Properties For Sale Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Box sx={{ 
              width: 4, 
              height: 40, 
              bgcolor: 'primary.main', 
              mr: 2, 
              borderRadius: 1 
            }} />
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700,
                color: 'text.primary'
              }}
            >
              Properties For Sale
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                ml: 2,
                color: 'text.secondary',
                bgcolor: 'primary.light',
                px: 2,
                py: 0.5,
                borderRadius: 10,
                fontSize: '0.875rem'
              }}
            >
              {propertiesBuy?.length || 0} properties
            </Typography>
          </Box>
          
          {propertiesBuy?.length === 0 ? (
            <Box sx={{ 
              textAlign: 'center', 
              py: 10, 
              bgcolor: 'grey.50', 
              borderRadius: 2 
            }}>
              <Typography variant="h6" color="text.secondary">
                No properties for sale available at the moment
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Check back soon for new listings
              </Typography>
            </Box>
          ) : (
            <Grid sx={{justifyContent:"center"}} container spacing={4}>
              {propertiesBuy?.map((p) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  lg={6} 
                  key={p.contactUrl || p.id || Math.random()}
                >

                  <Link to={`/property/${p.property_id}`} style={{ textDecoration: "none" }}>
                  <Property 
                  
                    image={p.primary_photo.href}
                     price={p.list_price} 
                    summary={p.summary}
                    bedrooms={p.description.beds} 
                    bathrooms={p.description.baths}
                    isForSale={true}
                  />
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
        
        {/* Divider with icon */}
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
          <Box sx={{ 
            width: '100%', 
            maxWidth: 200, 
            height: 2, 
            bgcolor: 'divider',
            position: 'relative',
            '&::before': {
              content: '"🏠"',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              px: 3,
              fontSize: '1.5rem'
            }
          }} />
        </Box>
        
        {/* Properties For Rent Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Box sx={{ 
              width: 4, 
              height: 40, 
              bgcolor: 'secondary.main', 
              mr: 2, 
              borderRadius: 1 
            }} />
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700,
                color: 'text.primary'
              }}
            >
              Properties For Rent
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                ml: 2,
                color: 'text.secondary',
                bgcolor: 'secondary.light',
                px: 2,
                py: 0.5,
                borderRadius: 10,
                fontSize: '0.875rem'
              }}
            >
              {propertiesRent?.length || 0} properties
            </Typography>
          </Box>
          
          {propertiesRent?.length === 0 ? (
            <Box sx={{ 
              textAlign: 'center', 
              py: 10, 
              bgcolor: 'grey.50', 
              borderRadius: 2 
            }}>
              <Typography variant="h6" color="text.secondary">
                No rental properties available at the moment
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Check back soon for new rental listings
              </Typography>
            </Box>
          ) : (
            <Grid sx={{justifyContent:"center"}} container spacing={4}>
              {propertiesRent?.map((p) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  lg={6} 
                  key={p.contactUrl || p.id || Math.random()}
                >
                <Link to={`/property/${p.property_id}`} style={{ textDecoration: "none" }}>
                  <Property 
                  
                    image={p.primary_photo.href}
                     price={p.list_price} 
                    summary={p.summary}
                    bedrooms={p.description.beds} 
                    bathrooms={p.description.baths}
                    isForSale={true}
                  />
                  </Link>
                  
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
        
        {/* Call to Action */}
        <Box sx={{ 
          bgcolor: 'primary.light', 
          borderRadius: 3, 
          p: 5, 
          textAlign: 'center',
          mt: 8,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Can't Find What You're Looking For?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            Sign up for our newsletter and be the first to know about new properties that match your criteria.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: 600
            }}
          >
            Get Property Alerts
          </Button>
        </Box>
        
      </Container>
    </Box>
  );
};

export default Home;