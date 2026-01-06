import { Box, Typography, Button, Link, Grid, Container } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import "../styles/home.css"
const Sec1 = () => {
  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        height: '100%',        
        py: 4,
        position: 'relative', // Add this
        zIndex: 2 // Ensure content is above overlay
      }}
    >
      <Box 
        sx={{ 
          width: '100%',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 3
          ,paddingTop:"400px"
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', position: 'relative', zIndex: 3,borderRadius:"20px" }}>Post</Button>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', position: 'relative', zIndex: 3,borderRadius:"20px" }}>Atachment</Button>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', position: 'relative', zIndex: 3,borderRadius:"20px" }}>Tech</Button>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                textAlign:"left",
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.2,
                position: 'relative',
                zIndex: 3
              }}
            >
              Own Your World,
              <br/>
              One Property at a Time
            </Typography>
          </Box>
          
          <Box sx={{ display: "flex", gap: 2, flexWrap: 'wrap' }}>
            <Box sx={{ display: "flex", alignItems: "center", bgcolor: 'rgba(255,255,255,0.1)', px: 2, py: 1, borderRadius: 1, position: 'relative', zIndex: 3 }} >
              <Typography sx={{ color: 'white', mr: 1 }}>Type</Typography>
              <ArrowDropDownIcon sx={{ color: 'white' }}/> 
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", bgcolor: 'rgba(255,255,255,0.1)', px: 2, py: 1, borderRadius: 1, position: 'relative', zIndex: 3 }}>
              <Typography sx={{ color: 'white', mr: 1 }}>Price</Typography>
              <ArrowDropDownIcon sx={{ color: 'white' }}/> 
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", bgcolor: 'rgba(255,255,255,0.1)', px: 2, py: 1, borderRadius: 1, position: 'relative', zIndex: 3 }}>
              <Typography sx={{ color: 'white', mr: 1 }}>Area</Typography>
              <ArrowDropDownIcon sx={{ color: 'white' }}/> 
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", bgcolor: "primary.main", px: 3, py: 1, borderRadius: 1, cursor: 'pointer', position: 'relative', zIndex: 3 }}>
              <SearchIcon sx={{ color: 'white', mr: 1 }}/>
              <Typography sx={{ color: 'white' }}>Search</Typography>
            </Box>
          </Box>
        </Box>
        
        <Box sx={{ maxWidth: { xs: '100%', md: '40%' }, mt: { xs: 3, md: 0 }, position: 'relative', zIndex: 3,justifyContent:"start" }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'white',
              fontStyle: 'italic',
              fontSize: { xs: '1rem', md: '1.25rem' },
              lineHeight: 1.6
            }}
          >
            "Discover homes that match your lifestyle. Filter by price, location, and amenities. Start your property journey today."
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
export default Sec1;