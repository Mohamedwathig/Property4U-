import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Snackbar,
  Alert,
  Stack,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Schedule,
  Send,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Person,
  Subject,
  Message,
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <Phone />, title: 'Phone', details: '+1 (555) 123-4567', color: '#1976d2' },
    { icon: <Email />, title: 'Email', details: 'info@propertyfinders.com', color: '#d32f2f' },
    { icon: <LocationOn />, title: 'Office', details: '123 Real Estate Ave, NY', color: '#2e7d32' },
    { icon: <Schedule />, title: 'Hours', details: 'Mon-Fri 8:00-18:00', color: '#ed6c02' },
  ];

  const socialLinks = [
    { icon: <Facebook />, color: '#1877F2' },
    { icon: <Twitter />, color: '#1DA1F2' },
    { icon: <LinkedIn />, color: '#0A66C2' },
    { icon: <Instagram />, color: '#E4405F' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="600px" mx="auto">
          Reach out to our expert team. We're here to help you find your dream property.
        </Typography>
      </Box>

      {/* Flex Container for both sections */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // stack on small screens
          gap: 4,
        }}
      >
        {/* Contact Info */}
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, flex: 1 }}>
          <Stack spacing={3}>
            {contactInfo.map((item, i) => (
              <Box key={i} display="flex" alignItems="center" gap={2}>
                <Box
                  sx={{
                    backgroundColor: item.color + '15',
                    color: item.color,
                    p: 1.5,
                    borderRadius: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography fontWeight="bold">{item.title}</Typography>
                  <Typography>{item.details}</Typography>
                </Box>
              </Box>
            ))}

            <Box mt={2}>
              <Typography fontWeight="bold" mb={1}>Follow Us</Typography>
              <Box display="flex" gap={1}>
                {socialLinks.map((social, idx) => (
                  <IconButton
                    key={idx}
                    sx={{
                      backgroundColor: social.color + '15',
                      color: social.color,
                      '&:hover': { backgroundColor: social.color, color: 'white' },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Stack>
        </Paper>

        {/* Contact Form */}
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, flex: 2 }}>
          <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
            Send a Message
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                InputProps={{ startAdornment: <Person color="action" /> }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                InputProps={{ startAdornment: <Email color="action" /> }}
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                InputProps={{ startAdornment: <Subject color="action" /> }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={5}
                InputProps={{ startAdornment: <Message color="action" /> }}
              />
              <Button type="submit" variant="contained" endIcon={<Send />} size="large">
                Send Message
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
