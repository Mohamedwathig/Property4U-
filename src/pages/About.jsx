import React from 'react';
import image from "../assets/house2.jpg"
const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
    },
   hero: {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: '80px 20px',
  textAlign: 'center',
},
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '24px',
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#1f2937',
    },
    subtitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '16px',
      color: '#1f2937',
    },
    text: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#6b7280',
      marginBottom: '16px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginTop: '40px',
    },
    teamMember: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.section}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' }}>
            About Our Company
          </h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: '0.9' }}>
            Leading the way in real estate with innovation, integrity, and exceptional service since 2010.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div style={styles.section}>
        <div style={styles.card}>
          <h2 style={styles.title}>Our Mission</h2>
          <p style={styles.text}>
            To simplify the property journey by connecting people with their perfect homes and investments 
            through innovative technology, expert guidance, and personalized service.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.title}>Our Story</h2>
          <p style={styles.text}>
            Founded in 2010 by Sarah Johnson, our company started as a small local agency with 
            a big vision: to make real estate transactions transparent, fair, and efficient for everyone.
          </p>
          <p style={styles.text}>
            Over the years, we've grown from a single-office operation to a nationwide network 
            of dedicated professionals, but our core values remain unchanged.
          </p>
        </div>

        {/* Team Section */}
        <h2 style={styles.subtitle}>Meet Our Team</h2>
        <div style={styles.grid}>
          {[
            { name: 'Sarah Johnson', role: 'CEO & Founder' },
            { name: 'Michael Chen', role: 'Lead Agent' },
            { name: 'Emma Rodriguez', role: 'Property Manager' },
            { name: 'James Wilson', role: 'Market Analyst' },
          ].map((member, index) => (
            <div key={index} style={styles.teamMember}>
              <div style={{ height: '200px', backgroundColor: '#e5e7eb' }}></div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                  {member.name}
                </h3>
                <p style={{ color: '#4f46e5', fontWeight: '500' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div style={{
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', opacity: '0.9' }}>
            Ready to start your property journey? Contact us today!
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                Call Us
              </h3>
              <p>(555) 123-4567</p>
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                Email Us
              </h3>
              <p>info@propertyfinders.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;