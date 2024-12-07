import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { analytics } from "./firebase-config.js";
import { logEvent } from "firebase/analytics";

function App() {
  useEffect(() => {
    // Log a page view
    logEvent(analytics, "page_view");

    // Custom log event example
    logEvent(analytics, "screen_view", {
      screen_name: "HomePage",
    });
  }, []);

  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <GallerySection />
      <ReviewsSection />
      <MapSection />
      <ContactSection />
    </div>
  );
}

function Header() {
  return (
    <header className="top-bar navbar navbar-expand-lg navbar-custom sticky-top">
      <a className="navbar-brand font-weight-bold" href="#">
        Misha Tours
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#restaurant">
              Restaurant
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reviews">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function HomeSection() {
  return (
    <section
      id="home"
      className="cover-section text-center text-white d-flex align-items-center justify-content-center"
    >
      <div className="container">
        <h1>Misha Tours</h1>
        <p>Your trusted travel guide to explore the beauty of Sri Lanka</p>
        <button className="btn btn-warning" onClick={scrollToAbout}>
          Plan Your Trip
        </button>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section py-5 text-center">
      <div className="container">
        <h2>About the Business</h2>
        <p>
          Misha Tours offers immersive and personalized tour experiences across
          Sri Lanka, guided by local experts who share the country's beauty,
          culture, and hidden gems.
        </p>
      </div>
    </section>
  );
}

function GallerySection() {
  const galleryImages = [
    "https://github.com/user-attachments/assets/f417a043-4dd9-4841-ae6d-cd0f2d0e6bfb",
    "https://github.com/user-attachments/assets/b3a578da-a484-46d8-aadd-503b8d7ed6f0",
    "https://github.com/user-attachments/assets/e786a897-7e0a-486d-a2d5-1806c043205b",
    "https://github.com/user-attachments/assets/9a1dfb90-99e8-4776-b6b8-87a1be6ef97e",
    "https://github.com/user-attachments/assets/dde843a5-ad71-45ce-b87f-26f78a520963",
    "https://github.com/user-attachments/assets/65f77b68-fa5e-4959-a8b2-61bf84df66a9",
    "https://github.com/user-attachments/assets/576584ae-5d8d-424c-a4c2-64f13a85c8a5",
    "https://github.com/user-attachments/assets/77841e84-698d-41fd-a614-5eed5d5245f2",
    "https://github.com/user-attachments/assets/6dccf930-bae6-4f2f-827f-05c4c6a749e6",
    "https://github.com/user-attachments/assets/e2a7b14b-8d86-4d7a-af3f-41762dcfc765",
    "https://github.com/user-attachments/assets/fcc0e8c5-ecb4-45e0-b4c6-b653c5d14181",
    "https://github.com/user-attachments/assets/5388fd45-405b-4741-8afb-1da7ad50bf52",
  ];

  return (
    <section id="gallery" className="gallery-section py-3 text-center">
      <div className="container">
        <h2>Gallery</h2>
        <div className="row">
          {galleryImages.map((url, index) => (
            <div className="col-sm-6 col-md-4 mb-4" key={index}>
              <img src={url} className="img-fluid rounded" alt="Gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    "Amazing experience with Misha Tours! - Sarah, UK",
    "A wonderful and unforgettable journey! - John, USA",
    "Misha Tours showed us the best of Sri Lanka. - Aiko, Japan",
  ];

  return (
    <section id="reviews" className="reviews-section py-5 bg-light text-center">
      <div className="container">
        <h2>Client Reviews</h2>
        <div
          id="reviewsCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {reviews.map((review, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <p>{review}</p>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#reviewsCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#reviewsCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function RestaurantSection() {
  const restaurants = [
    { name: "Restaurant 1", description: "Authentic Sri Lankan cuisine." },
    { name: "Restaurant 2", description: "Fresh seafood by the beach." },
    { name: "Restaurant 3", description: "Fusion dishes with a modern twist." },
  ];

  return (
    <section id="restaurant" className="restaurant-section py-5 text-center">
      <div className="container">
        <h2>Our Recommended Restaurants</h2>
        <p>
          Explore the finest dining spots curated for your Sri Lankan journey.
        </p>
        <div className="row">
          {restaurants.map((restaurant, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <h5>{restaurant.name}</h5>
              <p>{restaurant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="map-section">
      <div className="container">
        <h2 className="text-center my-4">Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section py-5 text-center">
      <div className="container">
        <h2 className="text-white">Contact Us</h2>
        <p className="text-light mb-4">
          Reach out to us through any of the following channels.
        </p>
        <div className="contact-details mb-4">
          <p className="text-white">
            Address: No.301 Mahawaskaduwa Waskaduwa 12580 , Sri Lanka
          </p>
          <p className="text-white">Phone: +94 71 342 3976</p>
          <p className="text-white">Email: info@mishatours.lk</p>
        </div>
        <div className="contact-icons d-flex justify-content-center mb-4">
          <a
            href="https://web.facebook.com/@geethanga.silva.3"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://web.facebook.com/@geethanga.silva.3"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-messenger"></i>
          </a>
          <a
            href="https://wa.me/+94713423976"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

// Placeholder functions
function scrollToContact() {
  logEvent(analytics, "button_click", {
    button_name: "Learn More",
  });
  console.log("Button clicked!");

  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

export default App;
