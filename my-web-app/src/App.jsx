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
            <a href="#home" className="nav-link active">
              <svg className="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="6" width="24" height="30" rx="6" fill="#FFFFFF"/>
                <path d="M6 9c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#3C75EE" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 14c1 1.333 2.533 2.133 3.333 2.133 0.8 0 2.333-0.8 3.333-2.133" stroke="#3C75EE" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              HOME
            </a>
            <a href="#marketplace" className="nav-link">
              <svg className="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="6" width="24" height="30" rx="6" fill="#3C75EE"/>
                <path d="M6 9c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 14c1 1.333 2.533 2.133 3.333 2.133 0.8 0 2.333-0.8 3.333-2.133" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              MARKETPLACE
            </a>
          </nav>

          {/* Join Community Button */}
          <button className="join-beta-btn">Join the Community</button>
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
            <h1 className="hero-main-text">Empowering Students to Build and Grow their Businesses</h1>

            {/* Subtitle */}
            <p className="hero-subtitle">Create your digital store for free and access powerful tools to grow your business.</p>

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
            {/* Card 1 - Duplicate of Card 1 */}
            <div className="figma-card">
              <div className="new-badge">New</div>
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
                <button className="buy-now-btn" onClick={handleShopNow}>Buy Now</button>
              </div>
            </div>

            {/* Card 5 - Duplicate of Card 2 */}
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
                <button className="buy-now-btn" onClick={handleShopNow}>Buy Now</button>
              </div>
            </div>

            {/* Card 6 - Duplicate of Card 3 */}
            <div className="figma-card featured">
              <div className="featured-badge">Featured</div>
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
                <button className="buy-now-btn" onClick={handleShopNow}>Buy Now</button>
              </div>
            </div>

            {/* Card 4 - Duplicate of Card 1 */}
            <div className="figma-card">
              <div className="new-badge">New</div>
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
                <button className="buy-now-btn" onClick={handleShopNow}>Buy Now</button>
              </div>
            </div>

            {/* Card 5 - Duplicate of Card 2 */}
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
                <button className="buy-now-btn" onClick={handleShopNow}>Buy Now</button>
              </div>
            </div>

            {/* Card 6 - Duplicate of Card 3 */}
            <div className="figma-card featured">
              <div className="featured-badge">Featured</div>
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
                <button className="buy-now-btn" onClick={handleShopNow}>Buy Now</button>
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
            <img src="/images/frames/Frame 1000005327 (1).png" alt="Additional Section" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <img 
            src="/images/misc/Quote.png" 
            alt="Quote by Dave Thomas" 
            className="quote-screenshot"
          />
        </div>
      </section>

      {/* Ready to Launch Banner Section */}
      <section className="launch-banner-section">
        <div className="launch-banner-container">
          <div className="launch-banner">
            {/* Decorative Icons */}
            <div className="launch-banner-icon launch-banner-icon-top-left">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Megaphone - beige/light brown with orange interior */}
                <path d="M24 12C30 12 35 17 35 23V29C35 30.1 34.1 31 33 31H19C17.9 31 17 30.1 17 29V23C17 17 20 12 24 12Z" fill="#D4A574" stroke="#FFFFFF" strokeWidth="2.5"/>
                <path d="M20 22C22 22 24 24 24 26V28C24 30 22 32 20 32C18 32 16 30 16 28V26C16 24 18 22 20 22Z" fill="#FFA500"/>
                <path d="M19 31V37H33V31" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M21 37V41H31V37" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M23 41V45H29V41" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="26" cy="23" r="2.5" fill="#FFFFFF"/>
                {/* Sound waves to the right */}
                <path d="M38 18C38 18 40 16 42 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M38 22C38 22 41 20 44 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M38 26C38 26 40 28 42 28" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className="launch-banner-icon launch-banner-icon-top-right">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Lightbulb - yellow with black filament and base */}
                <ellipse cx="28" cy="20" rx="10" ry="12" fill="#FFD700" stroke="#FFFFFF" strokeWidth="2.5"/>
                <rect x="24" y="28" width="8" height="6" rx="1" fill="#000000" stroke="#FFFFFF" strokeWidth="2"/>
                <rect x="25" y="34" width="6" height="2" rx="1" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5"/>
                {/* Filament inside bulb */}
                <path d="M28 16V24" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 18L32 22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M32 18L24 22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Light rays upwards and outwards */}
                <path d="M28 8L28 4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 10L16 8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M36 10L40 8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M18 18L14 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M38 18L42 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className="launch-banner-icon launch-banner-icon-bottom-left">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Dollar sign - green */}
                <path d="M28 8C34.6274 8 40 13.3726 40 20C40 26.6274 34.6274 32 28 32C21.3726 32 16 26.6274 16 20C16 13.3726 21.3726 8 28 8Z" fill="#22C55E" stroke="#FFFFFF" strokeWidth="2.5"/>
                <path d="M28 16V40" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
                <path d="M28 14C30.2091 14 32 15.7909 32 18C32 20.2091 30.2091 22 28 22C25.7909 22 24 20.2091 24 18C24 15.7909 25.7909 14 28 14Z" fill="#FFFFFF"/>
                <path d="M28 30C30.2091 30 32 31.7909 32 34C32 36.2091 30.2091 38 28 38C25.7909 38 24 36.2091 24 34C24 31.7909 25.7909 30 28 30Z" fill="#FFFFFF"/>
              </svg>
            </div>
            
            <div className="launch-banner-icon launch-banner-icon-bottom-right">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Laptop - light blue with dark grey keyboard and screen */}
                <rect x="10" y="14" width="36" height="26" rx="2" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="2.5"/>
                <rect x="14" y="18" width="28" height="18" rx="1" fill="#374151" stroke="#FFFFFF" strokeWidth="1.5"/>
                <rect x="16" y="20" width="24" height="14" rx="1" fill="#FFFFFF"/>
                {/* Shopping bag icon on screen - white with black outline */}
                <path d="M22 24C22 22.8954 22.8954 22 24 22H32C33.1046 22 34 22.8954 34 24V28H22V24Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5"/>
                <path d="M20 28H36V32H20V28Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5"/>
                <path d="M20 32H36V34H20V32Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5"/>
                {/* Handles */}
                <path d="M20 24L18 22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M36 24L38 22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Keyboard */}
                <rect x="12" y="40" width="32" height="4" rx="1" fill="#374151" stroke="#FFFFFF" strokeWidth="1"/>
              </svg>
            </div>

            {/* Main Content */}
            <div className="launch-banner-content">
              <h2 className="launch-banner-heading">Ready to Launch Your Own Shop?</h2>
              <p className="launch-banner-subheading">Start selling in minutes with our free digital storefront tools.</p>
              <button className="launch-banner-button" onClick={handleGetStarted}>
                Create Your Digital Shop Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          {/* Left Side - Content and Navigation */}
          <div className="testimonials-left">
            <div className="testimonials-subtitle">Testimonials</div>
            <button className="testimonials-join-btn">Join the Community</button>
            <div className="testimonials-title">
              Loved by the<br />
              community
            </div>
            
            {/* Filter Buttons */}
            <div className="testimonials-filters">
              <button className="testimonial-filter-btn active">All</button>
              <button className="testimonial-filter-btn">Student Testimonials</button>
              <button className="testimonial-filter-btn">Mentor/Incubator Feedback</button>
              <button className="testimonial-filter-btn">Investor Tips</button>
            </div>
            
            <div className="testimonials-description">
              Don't just take our word for it. See what customers, student entrepreneurs and companies have to say about our campus hustle platform.
            </div>
            
            {/* Pagination Dots */}
            <div className="testimonials-pagination">
              <div className="pagination-dot active"></div>
              <div className="pagination-dot"></div>
              <div className="pagination-dot"></div>
            </div>
          </div>
          
          {/* Right Side - Testimonial Card */}
          <div className="testimonials-right">
            <div className="testimonial-card">
              {/* Rating Stars */}
              <div className="testimonial-rating">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FACC15">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FACC15">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FACC15">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FACC15">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FACC15">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              {/* Quote Text */}
              <div className="testimonial-quote">
                "Campus Hustle gave my side hustle real visibility! I've gained new clients for my tutoring service every week. It's like having my own digital storefront -made just for students!"
              </div>
              
              {/* Author Information */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src="/images/profile/profile.png" alt="Damien Toju" />
                </div>
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">Damien Toju</div>
                  <div className="testimonial-author-title">Founder, CampusWear</div>
                </div>
              </div>
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
            {/* Campus Pitch Competition Card 1 - Blue Header */}
            <div className="event-card">
              <div className="event-date-badge blue">
                <div className="date-text">JAN 20</div>
              </div>
              <div className="event-image">
                <img src="/images/events/Campus Pitch Competition.png" alt="Campus Pitch Fest 2025" className="event-image-content" />
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
                  <span>Learn More →</span>
                </button>
              </div>
            </div>

            {/* Campus Pitch Competition Card 2 - Green Header */}
            <div className="event-card">
              <div className="event-date-badge green">
                <div className="date-text">JAN 20</div>
              </div>
              <div className="event-image">
                <img src="/images/events/ChatGPT Image Apr 5, 2025 at 07_57_33 PM 1.png" alt="Office Workspace" className="event-image-content" />
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
                  <span>Learn More →</span>
                </button>
              </div>
            </div>

            {/* Student Entrepreneur Workshop Card - Gold Header */}
            <div className="event-card">
              <div className="event-date-badge yellow">
                <div className="date-text">JAN 20</div>
              </div>
              <div className="event-image">
                <img src="/images/events/Student Entrepreneur Workshop.png" alt="Student Workshop" className="event-image-content" />
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
                  <span>Register Now →</span>
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
