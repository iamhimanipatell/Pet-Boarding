// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pet Boarding & Hostel Services</h1>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h2>Quality Care for Your Furry Friends</h2>
            <p>Professional pet boarding services with love and attention</p>
            <button className="primary-button">Book Now</button>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>Basic Boarding</h3>
              <p>Comfortable accommodations with regular feeding and exercise</p>
              <p className="price">From Rs. 3000/night</p>
            </div>
            <div className="service-card">
              <h3>Premium Care</h3>
              <p>Luxury accommodations with extra playtime and special treats</p>
              <p className="price">From Rs. 4500/night</p>
            </div>
            <div className="service-card">
              <h3>Grooming</h3>
              <p>Bath, brushing, and nail trimming services available</p>
              <p className="price">From Rs. 8000/night</p>
            </div>
          </div>
        </section>

        <section id="booking" className="booking-section">
          <h2>Book a Stay</h2>
          <form className="booking-form">
            <div className="form-group">
              <label htmlFor="petName">Pet Name</label>
              <input type="text" id="petName" name="petName" required />
            </div>
            <div className="form-group">
              <label htmlFor="petType">Pet Type</label>
              <select id="petType" name="petType" required>
                <option value="">Select pet type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="checkIn">Check-in Date</label>
              <input type="date" id="checkIn" name="checkIn" required />
            </div>
            <div className="form-group">
              <label htmlFor="checkOut">Check-out Date</label>
              <input type="date" id="checkOut" name="checkOut" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Type</label>
              <select id="service" name="service" required>
                <option value="">Select service</option>
                <option value="basic">Basic Boarding</option>
                <option value="premium">Premium Care</option>
                <option value="grooming">Grooming (Add-on)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="specialRequirements">Special Requirements</label>
              <textarea id="specialRequirements" name="specialRequirements" rows="4"></textarea>
            </div>
            <button type="submit" className="primary-button">Submit Booking</button>
          </form>
        </section>

        <section id="gallery" className="gallery-section">
  <h2>Pet Gallery</h2>
  <div className="gallery-grid">
    <div className="gallery-item">
      <img src="https://i.pinimg.com/736x/82/e2/8a/82e28ab029a0a250664dc96342d8832d.jpg" alt="Pet 1" />
    </div>
    <div className="gallery-item">
      <img src="https://i.pinimg.com/736x/05/b5/92/05b59254122f852d049c45c57e02fa96.jpg" alt="Pet 2" />
    </div>
    <div className="gallery-item">
      <img src="https://i.pinimg.com/736x/b4/83/5a/b4835a8e99caf0b2a94ff94d21e7c2d1.jpg" alt="Pet 3" />
    </div>
    <div className="gallery-item">
      <img src="https://i.pinimg.com/736x/dd/5e/a7/dd5ea71345a43fd3f7e9af0c53b7aadf.jpg" alt="Pet 4" />
    </div>
  </div>
</section>


        <section id="testimonials" className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>"The staff took amazing care of my dog Max! He came home happy and healthy."</p>
              <p className="testimonial-author">- Sarah J.</p>
            </div>
            <div className="testimonial-card">
              <p>"Best pet boarding service in town. My cat was treated like royalty!"</p>
              <p className="testimonial-author">- Michael T.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>123 Pet Care Lane</p>
            <p>Pawsville, Delhi, India</p>
            <p>Phone: +91-9878629xxx</p>
            <p>Email: info@pethostel.com</p>
          </div>
          <div className="footer-section">
            <h3>Hours</h3>
            <p>Monday - Friday: 8am - 7pm</p>
            <p>Saturday: 9am - 5pm</p>
            <p>Sunday: 10am - 4pm</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pet Hostel & Boarding. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
