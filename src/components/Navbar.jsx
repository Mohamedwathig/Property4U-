import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  AppBar, 
  Toolbar, 
  Typography, 
  Menu, 
  MenuItem,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../App.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Search', path: '/search' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar 
        position="fixed"
        sx={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          py: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.98)',
            boxShadow: '0 4px 25px rgba(0, 0, 0, 0.12)',
          }
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            minHeight: '70px'
          }}>
            
            {/* Logo */}
            <Typography
              variant="h4"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'black',
                fontWeight: 900,
                fontFamily: '"Playfair Display", serif',
                letterSpacing: '1px',
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: '30%',
                  height: '3px',
                  background: 'linear-gradient(90deg, black, #666)',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease'
                },
                '&:hover': {
                  '&:after': {
                    width: '100%'
                  }
                }
              }}
            >
              PROPERTY<span style={{ color: '#333', fontStyle: 'italic' }}>4U</span>
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box 
                component="nav" 
                sx={{ 
                  display: 'flex', 
                  gap: 3,
                  alignItems: 'center'
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: '#333',
                      fontWeight: 500,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      letterSpacing: '0.5px',
                      position: 'relative',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '20px',
                        border: '1px solid transparent',
                        background: 'linear-gradient(90deg, #000, #333) border-box',
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      },
                      '&:hover': {
                        color: 'black',
                        fontWeight: 600,
                        backgroundColor: 'rgba(0, 0, 0, 0.02)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                        '&:before': {
                          opacity: 1
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Auth Buttons - Desktop */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: '#333',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    padding: '8px 24px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '25px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: '#000',
                      color: 'white',
                      borderColor: '#000',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
                    }
                  }}
                >
                  Sign In
                </Button>
                
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
                    color: 'white',
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    padding: '8px 28px',
                    borderRadius: '25px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      transition: 'left 0.5s ease'
                    },
                    '&:hover': {
                      background: 'linear-gradient(135deg, #000 0%, #333 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)',
                      '&:before': {
                        left: '100%'
                      }
                    }
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={toggleMobileMenu}
                sx={{
                  color: 'black',
                  backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  borderRadius: '10px',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)'
                  }
                }}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: 'white',
            zIndex: 9999,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            animation: 'slideDown 0.3s ease',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)'
          }}
        >
          <Box sx={{ py: 3, px: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  color: '#333',
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '1rem',
                  py: 1.5,
                  px: 2,
                  justifyContent: 'flex-start',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                    color: 'black',
                    fontWeight: 600
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            
            <Box sx={{ mt: 3, px: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                component={RouterLink}
                to="/login"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  color: '#333',
                  fontWeight: 600,
                  textTransform: 'none',
                  border: '1px solid #e0e0e0',
                  borderRadius: '25px',
                  py: 1.5
                }}
              >
                Sign In
              </Button>
              
              <Button
                component={RouterLink}
                to="/register"
                fullWidth
                variant="contained"
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
                  color: 'white',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: '25px',
                  py: 1.5
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;