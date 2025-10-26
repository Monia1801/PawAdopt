import { useState, useEffect } from 'react';
import Button from './Button.jsx';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './Card.jsx';

export default function HomePage({ setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: '🏪',
      title: 'Pet Shop Owners',
      description: 'Connect with verified pet shops offering healthy, well-cared-for pets ready for adoption.',
    },
    {
      icon: '✈️',
      title: 'On-Vacation Care',
      description: 'Find trusted caretakers for your pets while you travel. Peace of mind guaranteed.',
    },
    {
      icon: '🏡',
      title: 'Independent Owners',
      description: 'Adopt directly from independent pet owners looking to rehome their beloved companions.',
    },
    {
      icon: '🚶',
      title: 'Pet Walkers',
      description: 'Book professional pet walkers in your area for daily exercise and outdoor adventures.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Pet Owner',
      text: 'Adopting Max from PawsAdopt was the best decision ever! The process was smooth and the team was incredibly supportive.',
      initials: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Pet Owner',
      text: 'Amazing platform! Found my perfect companion Luna here. The verification process made me feel secure about my choice.',
      initials: 'MC',
    },
    {
      name: 'Emma Davis',
      role: 'Pet Shop Owner',
      text: 'As a pet shop owner, partnering with PawsAdopt has helped countless pets find loving homes. Highly recommended!',
      initials: 'ED',
    },
  ];

  return (
    <div className="w-full">
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-brand">
              <h1 className="navbar-logo">PawsAdopt</h1>
              <div className="navbar-links">
                <button
                  onClick={() => scrollToSection('home')}
                  className="navbar-link"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="navbar-link"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="navbar-link"
                >
                  Testimonials
                </button>
              </div>
            </div>
            <Button onClick={() => setCurrentPage('login')}>Login / Signup</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="section section-home">
        <div className="section-container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">Find Your Perfect Companion</h1>
              <p className="hero-description">
                Discover loving pets waiting for their forever home. Browse through our
                collection of adorable dogs, cats, and other pets ready for adoption.
              </p>
              <div className="hero-buttons">
                <Button size="lg">Browse Pets</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1616620649761-48f5ca3e17f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMGNhdCUyMHBldHN8ZW58MXx8fHwxNzYxNDUwODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy pets"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section section-features">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Complete Pet Care Services</h2>
            <p className="section-subtitle">
              From adoption to daily care, we connect you with trusted pet services and caregivers
              to ensure your furry friends get the love and attention they deserve.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card">
                <CardHeader>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What Our Community Says</h2>
            <p className="section-subtitle">
              Hear from pet owners and partners who have found joy through PawsAdopt.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">PawsAdopt</h3>
              <p className="footer-description">
                Connecting loving pets with caring families since 2025.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="footer-link"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="footer-link"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="footer-link"
                  >
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Support</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; 2025 PawsAdopt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
