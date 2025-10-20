import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  const handleGetStarted = () => {
    alert('Start Your Free Shop Now — this would navigate to the signup/onboarding flow.')
  }

  const handleLearnMore = () => {
    alert('Learn more — this would open the features/overview section or page.')
  }

  const handleJoinBeta = () => {
    alert('Join the Beta — this would open the beta signup form.')
  }

  const handleShopNow = () => {
    alert('Shop Now — this would navigate to the product details.')
  }

  const handleViewProfile = () => {
    alert('View Profile — this would show the student\'s profile.')
  }

  const filters = ['All', 'Top Sellers', 'Clothing', 'Tech', 'Art', 'Food']
  const priceFilters = ['Recently Added', 'Services', 'Under $10-20', 'Above $20']

  const shops = [
    {
      id: 1,
      name: "Kemi",
      title: "Custom Handmade Bracelets",
      category: "Services",
      price: "$20/hour",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 2,
      name: "Kemi",
      title: "Landing Page Templates",
      category: "Tech",
      price: "From $10",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 3,
      name: "Kemi",
      title: "Custom Handmade Bracelets",
      category: "Services",
      price: "$20/hour",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      featured: false
    }
  ]

  return (
    <div className="app">
      {/* Header Navigation */}
      <header className="main-header">
        <div className="header-content">
          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo-icon">
              <svg width="35" height="43" viewBox="0 0 35 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="6" width="35" height="37" rx="8" fill="white"/>
                <path d="M8 13c0-5.523 4.03-10 9-10s9 4.477 9 10" stroke="#3C75EE" strokeWidth="3" strokeLinecap="round"/>
                <path d="M12 20c1.5 2 3.8 3.2 5 3.2 1.2 0 3.5-1.2 5-3.2" stroke="#3C75EE" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="logo-text">Campus Hustle</span>
          </div>

          {/* Navigation Links */}
          <nav className="main-nav">
            <a href="#home" className="nav-link active">Home</a>
          </nav>

          {/* Join Beta Button */}
          <button className="join-beta-btn">Join the Beta</button>
        </div>
      </header>

      {/* Hero Section - Responsive Design */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content-wrapper">
            {/* New Coming 2026 Tag */}
            <div className="hero-tag">
              <div className="tag-content">
                <span className="tag-new">New</span>
                <span className="tag-text">Coming 2026</span>
                <div className="tag-arrow">→</div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-main-text">Empowering Students to Build and Grow their Business</h1>

            {/* Subtitle */}
            <p className="hero-subtitle">Create your digital storefront for free and access powerful tools to grow your business.</p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button className="hero-btn-primary">Start Your Free Shop Now</button>
              <button className="hero-btn-secondary">
                <span>Learn More</span>
                <div className="btn-arrow">→</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Frame Section */}
      <section className="frame-section">
        <div className="frame-container">
          <img 
            src="/images/frames/frame-1000005783.png" 
            alt="Campus Hustle Frame" 
            className="frame-image"
          />
        </div>
      </section>

      {/* Product or Service Showcase Section - Figma Design */}
      <section className="figma-showcase">
        <div className="figma-container">
          {/* Header Section */}
          <div className="figma-header">
            <div className="header-text">
              <div className="subtitle">Product or Service Showcase</div>
              <div className="title">Browse, Support, and Get Inspired by Top Student Shops</div>
            </div>
            
            {/* Filter Section */}
            <div className="filter-section">
              <div className="filter-row-1">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Clothing</button>
                <button className="filter-btn">Tech</button>
                <button className="filter-btn">Art</button>
                <button className="filter-btn">Food</button>
                <button className="filter-btn">Top Sellers</button>
              </div>
              <div className="filter-row-2">
                <button className="filter-btn">Services</button>
                <button className="filter-btn">Under $10 - 20</button>
                <button className="filter-btn">Above $20</button>
                <button className="filter-btn">Recently Added</button>
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="figma-grid">
            {/* Card 1 */}
            <div className="figma-card">
              <div className="card-image">
                <img src="/images/frames/Frame 1000005785.png" alt="Product" />
                <div className="overlay-buttons">
                  <button className="overlay-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#4B5563" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="#4B5563" strokeWidth="2"/>
                    </svg>
                  </button>
                  <button className="overlay-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h9" stroke="#4B5563" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="content-header">
                  <div className="product-info">
                    <div className="creator">Crafted by Kemi</div>
                    <div className="product-title">Custom Handmade Bracelets</div>
                  </div>
                  <div className="category-tag">Services</div>
                </div>
                <div className="content-footer">
                  <div className="price">$20/hour</div>
                  <div className="rating">
                    <svg width="20" height="19" viewBox="0 0 24 24" fill="#FACC15">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Featured */}
            <div className="figma-card featured">
              <div className="featured-badge">Featured</div>
              <div className="card-image">
                <img src="/images/misc/image (1).png" alt="Product" />
                <div className="overlay-buttons">
                  <button className="overlay-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#4B5563" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="#4B5563" strokeWidth="2"/>
                    </svg>
                  </button>
                  <button className="overlay-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h9" stroke="#4B5563" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="content-header">
                  <div className="product-info">
                    <div className="creator">Crafted by Kemi</div>
                    <div className="product-title">Custom Handmade Bracelets</div>
                  </div>
                  <div className="category-tag">Tech</div>
                </div>
                <div className="content-footer">
                  <div className="price">From $10</div>
                  <div className="rating">
                    <svg width="20" height="19" viewBox="0 0 24 24" fill="#FACC15">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="figma-card">
              <div className="card-image">
                <img src="/images/frames/Frame 1000005785 (1).png" alt="Product" />
                <div className="overlay-buttons">
                  <button className="overlay-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#4B5563" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="#4B5563" strokeWidth="2"/>
                    </svg>
                  </button>
                  <button className="overlay-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h9" stroke="#4B5563" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="content-header">
                  <div className="product-info">
                    <div className="creator">Crafted by Kemi</div>
                    <div className="product-title">Custom Handmade Bracelets</div>
                  </div>
                  <div className="category-tag">Services</div>
                </div>
                <div className="content-footer">
                  <div className="price">$20/hour</div>
                  <div className="rating">
                    <svg width="20" height="19" viewBox="0 0 24 24" fill="#FACC15">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="featured-services">
        <div className="featured-services-container">
          {/* Header Section */}
          <div className="featured-services-header">
            <div className="featured-services-subtitle">Featured Services</div>
            <div className="featured-services-title">Everything You Need to Start, Run, and Grow — All in One Place</div>
          </div>
          
          {/* Services Cards Container */}
          <div className="featured-services-scroll">
            <div className="featured-services-cards">
              {/* Service Card 1 */}
              <div className="featured-service-card">
                <div className="service-number">1</div>
                <div className="service-image">
                  <img src="/images/sections/Frame 1000005322.png" alt="Free Digital Shop Setup" />
                </div>
                <div className="service-content">
                  <div className="service-title">Free Digital Shop Setup</div>
                  <div className="service-description">Get started with a basic storefront and product listing at no cost.</div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="featured-service-card">
                <div className="service-number">2</div>
                <div className="service-image">
                  <img src="/images/sections/Frame 1000005323.png" alt="Premium Analytics & Insights" />
                </div>
                <div className="service-content">
                  <div className="service-title">Premium Analytics & Insights</div>
                  <div className="service-description">Unlock data-driven insights to understand your customers and grow faster.</div>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="featured-service-card">
                <div className="service-number">3</div>
                <div className="service-image">
                  <img src="/images/sections/Frame 1000005322.png" alt="Priority Listing for Paid Users" />
                </div>
                <div className="service-content">
                  <div className="service-title">Priority Listing for Paid Users</div>
                  <div className="service-description">Stand out with featured listings that give you visibility and more exposure.</div>
                </div>
              </div>

              {/* Service Card 4 */}
              <div className="featured-service-card">
                <div className="service-number">4</div>
                <div className="service-image">
                  <img src="/images/sections/Frame 1000005322.png" alt="Booking & Scheduling Tools" />
                </div>
                <div className="service-content">
                  <div className="service-title">Booking & Scheduling Tools</div>
                  <div className="service-description">Manage appointments and bookings directly through the platform.</div>
                </div>
              </div>

              {/* Service Card 5 */}
              <div className="featured-service-card">
                <div className="service-number">5</div>
                <div className="service-image">
                  <img src="/images/sections/Frame 1000005323.png" alt="Subleasing & Housing Listings" />
                </div>
                <div className="service-content">
                  <div className="service-title">Subleasing & Housing Listings</div>
                  <div className="service-description">Browse or list available student housing, apartments, or subleases.</div>
                </div>
              </div>

              {/* Service Card 6 */}
              <div className="featured-service-card">
                <div className="service-number">6</div>
                <div className="service-image">
                  <img src="/images/sections/Frame 1000005323.png" alt="In-App Messaging & Community Features" />
                </div>
                <div className="service-content">
                  <div className="service-title">In-App Messaging & Community Features</div>
                  <div className="service-description">Engage directly with other students and customers via the integrated messaging system.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made for Students Section */}
      <section className="made-for-students">
        <div className="made-for-students-container">
          <div className="made-for-students-content">
            <div className="made-for-students-text">MADE FOR STUDENTS</div>
            <div className="made-for-students-image">
              <img src="/images/frames/Frame 1000005787.png" alt="Made for Students" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section with Frame 1000005327 */}
      <section className="additional-section">
        <div className="additional-section-container">
          <div className="additional-section-image">
            <img src="/images/frames/Frame 1000005327.png" alt="Additional Section" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-icon">
            <div className="quote-mark-hidden">"</div>
            <div className="quote-mark-visible">"</div>
          </div>
          <div className="quote-text">
            "What do you need to start a business? Three simple things: know your product better than anyone, know your customer, and have a burning desire to succeed." –Dave Thomas, Founder, Wendy's
          </div>
          <div className="quote-image">
            <img src="/images/misc/Img3.png" alt="Quote illustration" className="quote-illustration" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <div className="testimonials-subtitle">Testimonials</div>
            <div className="testimonials-title">
              Loved by the<br />
              community.
            </div>
            <div className="testimonials-description">
              Don't just take our word for it. See what customers, student entrepreneurs and companies have to say about our campus hustle platform.
            </div>
          </div>
          
          {/* Review Image */}
          <div className="testimonials-review-container">
            <img src="/images/reviews/Img5.png" alt="Customer Review" className="testimonials-review-image" />
          </div>
          
          {/* Drag Bar Section */}
          <div className="testimonials-drag-container">
            <div className="drag-bar">
              <div className="drag-handle"></div>
            </div>
            <div className="drag-content">
              <p>Scroll to see more testimonials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Companies Section */}
      <section className="trusted-companies">
        <div className="trusted-companies-container">
          <div className="trusted-companies-content">
            <h2 className="trusted-companies-title">Trusted by companies worldwide</h2>
            <div className="companies-logos-image">
              <img src="/images/logos/Img4.png" alt="Trusted Companies Logos" className="trusted-companies-logos" />
            </div>
          </div>
        </div>
      </section>

      {/* Events and Community Section */}
      <section className="events-community">
        <div className="events-container">
          {/* Header */}
          <div className="events-header">
            <div className="events-subtitle">Event and Community</div>
            <div className="events-title">Join Events, Build Your Network, and Be Part of a Thriving Community</div>
          </div>

          {/* Event Cards */}
          <div className="events-grid">
            {/* Campus Pitch Competition Card */}
            <div className="event-card">
              <div className="event-date-badge blue">
                <div className="date-text">JAN 20</div>
              </div>
              <div className="event-image">
                <div className="event-image-placeholder"></div>
              </div>
              <div className="event-content">
                <h3 className="event-title">Campus Pitch Competition</h3>
                <p className="event-description">Compete for $10,000 in funding for your student business idea.</p>
                <div className="event-details">
                  <div className="event-detail">
                    <div className="detail-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#6B7280" strokeWidth="1.33"/>
                        <path d="M12 6v6l4 2" stroke="#6B7280" strokeWidth="1.33"/>
                      </svg>
                    </div>
                    <span className="detail-text">1:00 PM - 5:00 PM EST</span>
                  </div>
                  <div className="event-detail">
                    <div className="detail-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#6B7280" strokeWidth="1.33"/>
                        <circle cx="12" cy="10" r="3" stroke="#6B7280" strokeWidth="1.33"/>
                      </svg>
                    </div>
                    <span className="detail-text">NYC Campus Hub</span>
                  </div>
                </div>
                <button className="event-button">
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="#3C75EE" strokeWidth="1.33"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Student Entrepreneur Workshop Card */}
            <div className="event-card">
              <div className="event-date-badge green">
                <div className="date-text">JAN 20</div>
              </div>
              <div className="event-image">
                <div className="event-image-placeholder"></div>
              </div>
              <div className="event-content">
                <h3 className="event-title">Student Entrepreneur Workshop</h3>
                <p className="event-description">Learn the fundamentals of starting and growing your student business.</p>
                <div className="event-details">
                  <div className="event-detail">
                    <div className="detail-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#6B7280" strokeWidth="1.33"/>
                        <path d="M12 6v6l4 2" stroke="#6B7280" strokeWidth="1.33"/>
                      </svg>
                    </div>
                    <span className="detail-text">6:00 PM - 8:00 PM EST</span>
                  </div>
                  <div className="event-detail">
                    <div className="detail-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#6B7280" strokeWidth="1.33"/>
                        <circle cx="12" cy="10" r="3" stroke="#6B7280" strokeWidth="1.33"/>
                      </svg>
                    </div>
                    <span className="detail-text">Virtual Event</span>
                  </div>
                </div>
                <button className="event-button">
                  <span>Register Now</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="#09090B" strokeWidth="1.33"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            {/* Company Column */}
            <div className="footer-column">
              <div className="footer-column-title">Company</div>
              <div className="footer-links">
                <a href="#careers" className="footer-link">Careers</a>
                <a href="#blog" className="footer-link">Blog</a>
                <a href="#partners" className="footer-link">Partners</a>
                <a href="#brand" className="footer-link">Brand</a>
              </div>
            </div>

            {/* Product Column */}
            <div className="footer-column">
              <div className="footer-column-title">Product</div>
              <div className="footer-links">
                <a href="#features" className="footer-link">Features</a>
                <a href="#security" className="footer-link">Security</a>
                <a href="#pricing" className="footer-link">Pricing</a>
              </div>
            </div>

            {/* Legal Column */}
            <div className="footer-column">
              <div className="footer-column-title">Legal</div>
              <div className="footer-links">
                <a href="#terms" className="footer-link">Terms of Service</a>
                <a href="#privacy" className="footer-link">Privacy Policy</a>
                <a href="#cookies" className="footer-link">Cookie Policy</a>
                <a href="#refund" className="footer-link">Refund Policy</a>
              </div>
            </div>

            {/* Socials Column */}
            <div className="footer-column">
              <div className="footer-column-title">Socials</div>
              <div className="footer-links">
                <a href="#facebook" className="footer-link">Facebook</a>
                <a href="#instagram" className="footer-link">Instagram</a>
                <a href="#twitter" className="footer-link">X (Formally Twitter)</a>
                <a href="#linkedin" className="footer-link">LinkedIn</a>
              </div>
            </div>

            {/* Support Column */}
            <div className="footer-column">
              <div className="footer-column-title">Support</div>
              <div className="footer-links">
                <a href="#help" className="footer-link">Help Center</a>
                <a href="#faqs" className="footer-link">FAQs</a>
                <a href="mailto:hello@campushustle.com" className="footer-link">hello@campushustle.com</a>
                <a href="tel:+2347057152692" className="footer-link">+234 7057152692</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <div className="footer-copyright">© 2025 Campus Hustle. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
