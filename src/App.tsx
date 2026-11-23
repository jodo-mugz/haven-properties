
import { useMemo, useState } from "react";
import "./index.css";

type Property = {
  id: number;
  name: string;
  location: string;
  type: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: "For Sale" | "For Rent";
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  featured?: boolean;
};

const properties: Property[] = [
  {
    id: 1,
    name: "The Hillside Residence",
    location: "Kololo",
    type: "Villa",
    price: 2800000000,
    bedrooms: 5,
    bathrooms: 6,
    area: 620,
    status: "For Sale",
    image: "photo-1600596542815-ffad4c1539a9",
    images: [
      "photo-1600596542815-ffad4c1539a9",
      "photo-1600607687939-ce8a6c25118c",
      "photo-1600210492486-724fe5c67fb0",
    ],
    description:
      "A spectacular contemporary residence featuring generous living spaces, landscaped gardens and elegant modern finishes in one of Kampala's most prestigious neighbourhoods.",
    amenities: [
      "Swimming Pool",
      "Private Garden",
      "24/7 Security",
      "Double Garage",
      "Modern Kitchen",
      "Air Conditioning",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Skyline Penthouse",
    location: "Naguru",
    type: "Penthouse",
    price: 1250000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 340,
    status: "For Sale",
    image: "photo-1600607687939-ce8a6c25118c",
    images: [
      "photo-1600607687939-ce8a6c25118c",
      "photo-1600210492486-724fe5c67fb0",
      "photo-1600566753190-17f0baa2a6c3",
    ],
    description:
      "An elegant penthouse with panoramic views, generous entertaining spaces and premium contemporary finishes.",
    amenities: [
      "Panoramic Views",
      "Private Balcony",
      "Modern Kitchen",
      "Elevator Access",
      "Secure Parking",
      "24/7 Security",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Lakeview Villa",
    location: "Muyenga",
    type: "Villa",
    price: 2100000000,
    bedrooms: 6,
    bathrooms: 5,
    area: 580,
    status: "For Sale",
    image: "photo-1613490493576-7fde63acd811",
    images: [
      "photo-1613490493576-7fde63acd811",
      "photo-1600566753086-00f18fb6b3ea",
      "photo-1600607687920-4e2a09cf159d",
    ],
    description:
      "A spacious family residence with beautiful outdoor entertaining areas and an impressive modern architectural design.",
    amenities: [
      "Garden",
      "Swimming Pool",
      "Family Lounge",
      "Modern Kitchen",
      "Garage",
      "Security",
    ],
    featured: true,
  },
  {
    id: 4,
    name: "Garden Townhouse",
    location: "Ntinda",
    type: "Townhouse",
    price: 750000000,
    bedrooms: 3,
    bathrooms: 3,
    area: 210,
    status: "For Sale",
    image: "photo-1580587771525-78b9dba3b914",
    images: [
      "photo-1580587771525-78b9dba3b914",
      "photo-1600607687920-4e2a09cf159d",
      "photo-1600210492486-724fe5c67fb0",
    ],
    description:
      "A thoughtfully designed townhouse offering comfortable family living in a well-connected residential neighbourhood.",
    amenities: [
      "Private Garden",
      "Parking",
      "Modern Kitchen",
      "Security",
      "Spacious Living Room",
      "Balcony",
    ],
  },
  {
    id: 5,
    name: "The Bukoto Apartment",
    location: "Bukoto",
    type: "Apartment",
    price: 500000000,
    bedrooms: 2,
    bathrooms: 2,
    area: 125,
    status: "For Sale",
    image: "photo-1600210492486-724fe5c67fb0",
    images: [
      "photo-1600210492486-724fe5c67fb0",
      "photo-1600566753190-17f0baa2a6c3",
      "photo-1600607687939-ce8a6c25118c",
    ],
    description:
      "A bright modern apartment with an open-plan living area, contemporary kitchen and private balcony.",
    amenities: [
      "Private Balcony",
      "Modern Kitchen",
      "Elevator",
      "Secure Parking",
      "Natural Lighting",
      "Security",
    ],
  },
  {
    id: 6,
    name: "Courtyard Bungalow",
    location: "Kololo",
    type: "Bungalow",
    price: 2000000000,
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    status: "For Sale",
    image: "photo-1564013799919-ab600027ffc6",
    images: [
      "photo-1564013799919-ab600027ffc6",
      "photo-1600607687920-4e2a09cf159d",
      "photo-1600596542815-ffad4c1539a9",
    ],
    description:
      "A beautiful single-storey residence with a private garden, spacious interiors and timeless design.",
    amenities: [
      "Private Garden",
      "Garage",
      "Modern Kitchen",
      "Outdoor Lounge",
      "Security",
      "Spacious Interiors",
    ],
    featured: true,
  },
  {
    id: 7,
    name: "Terrace Townhouse",
    location: "Naguru",
    type: "Townhouse",
    price: 1400000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 260,
    status: "For Sale",
    image: "photo-1600047509807-ba8f99d2cdde",
    images: [
      "photo-1600047509807-ba8f99d2cdde",
      "photo-1600607687939-ce8a6c25118c",
      "photo-1600566753086-00f18fb6b3ea",
    ],
    description:
      "A contemporary multi-level residence with private terraces and carefully considered architectural details.",
    amenities: [
      "Private Terrace",
      "Modern Kitchen",
      "Garage",
      "Security",
      "Balcony",
      "Family Lounge",
    ],
  },
  {
    id: 8,
    name: "Hilltop Apartment",
    location: "Muyenga",
    type: "Apartment",
    price: 650000000,
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    status: "For Sale",
    image: "photo-1600566753190-17f0baa2a6c3",
    images: [
      "photo-1600566753190-17f0baa2a6c3",
      "photo-1600210492486-724fe5c67fb0",
      "photo-1600607687920-4e2a09cf159d",
    ],
    description:
      "A spacious apartment with refined interiors, generous natural light and a welcoming atmosphere.",
    amenities: [
      "Modern Kitchen",
      "Secure Parking",
      "Balcony",
      "Elevator",
      "Security",
      "Natural Lighting",
    ],
  },
  {
    id: 9,
    name: "Ntinda Family Villa",
    location: "Ntinda",
    type: "Villa",
    price: 1100000000,
    bedrooms: 5,
    bathrooms: 4,
    area: 410,
    status: "For Sale",
    image: "photo-1512917774080-9991f1c4c750",
    images: [
      "photo-1512917774080-9991f1c4c750",
      "photo-1600596542815-ffad4c1539a9",
      "photo-1600607687920-4e2a09cf159d",
    ],
    description:
      "An inviting family home with generous bedrooms, landscaped outdoor space and practical modern amenities.",
    amenities: [
      "Private Garden",
      "Double Garage",
      "Modern Kitchen",
      "Family Lounge",
      "Security",
      "Outdoor Space",
    ],
  },
];

const locations = [
  "All Locations",
  "Kololo",
  "Naguru",
  "Ntinda",
  "Muyenga",
  "Bukoto",
];

const types = [
  "All Types",
  "Villa",
  "Apartment",
  "Townhouse",
  "Penthouse",
  "Bungalow",
];

const money = (amount: number) =>
  "UGX " + new Intl.NumberFormat("en-UG").format(amount);

const photo = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [maxBudget, setMaxBudget] = useState("Any Budget");
  const [selected, setSelected] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesSearch =
        `${p.name} ${p.location} ${p.type}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesLocation =
        location === "All Locations" || p.location === location;

      const matchesType = type === "All Types" || p.type === type;

      const matchesBudget =
        maxBudget === "Any Budget" || p.price <= Number(maxBudget);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesBudget
      );
    });
  }, [search, location, type, maxBudget]);

  const openProperty = (p: Property) => {
    setSelected(p);
    setActiveImage(0);
  };

  const whatsapp = (p: Property) => {
    const message = encodeURIComponent(
      `Hello Haven Properties, I'm interested in the demonstration listing "${p.name}" in ${p.location}. Please share more information.`
    );

    window.open(
      `https://wa.me/256700000000?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main>
      <div className="demo-strip">
        DEMONSTRATION WEBSITE · SAMPLE PROPERTY LISTINGS · NOT REAL OFFERS
      </div>

      <header className="navbar">
        <a className="brand" href="#">
          <span className="brand-mark">H</span>
          <span>
            HAVEN<span className="brand-light"> PROPERTIES</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? "✕" : "☰"}
        </button>

        <nav className={mobileMenu ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMobileMenu(false)}>Home</a>
          <a href="#properties" onClick={() => setMobileMenu(false)}>Properties</a>
          <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
          <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
          <a className="nav-contact" href="#contact">ENQUIRE NOW ↗</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">
            <span /> REDEFINING LUXURY LIVING IN UGANDA
          </p>

          <h1>
            Find Your Place
            <br />
            in <em>Kampala.</em>
          </h1>

          <p className="hero-description">
            Exceptional homes. Remarkable locations. A better way to find
            where you belong.
          </p>

          <a href="#properties" className="gold-button">
            EXPLORE PROPERTIES <span>↗</span>
          </a>
        </div>

        <div className="hero-bottom">
          <span>KAMPALA · UGANDA</span>
          <span>01 / 09</span>
        </div>
      </section>

      <section className="search-section">
        <div className="search-heading">
          <div>
            <span className="eyebrow dark">FIND YOUR NEXT HOME</span>
            <h2>Search Properties</h2>
          </div>

          <p>
            Discover exceptional homes across Kampala's most desirable
            neighbourhoods.
          </p>
        </div>

        <div className="search-box">
          <label>
            KEYWORD
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Property name..."
            />
          </label>

          <label>
            LOCATION
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {locations.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </label>

          <label>
            PROPERTY TYPE
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>

          <label>
            MAXIMUM BUDGET
            <select
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
            >
              <option>Any Budget</option>
              <option value="500000000">UGX 500 Million</option>
              <option value="1000000000">UGX 1 Billion</option>
              <option value="1500000000">UGX 1.5 Billion</option>
              <option value="2500000000">UGX 2.5 Billion</option>
            </select>
          </label>

          <button
            className="search-button"
            onClick={() =>
              document
                .getElementById("properties")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            SEARCH ↗
          </button>
        </div>
      </section>

      <section className="properties-section" id="properties">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">A CURATED COLLECTION</span>
            <h2>
              Exceptional <em>Properties.</em>
            </h2>
          </div>

          <p>
            Carefully selected homes in Kampala's most sought-after
            locations.
          </p>
        </div>

        <div className="listing-meta">
          <span>SHOWING {filtered.length} PROPERTIES</span>
          <span>KAMPALA, UGANDA</span>
        </div>

        {filtered.length > 0 ? (
          <div className="property-grid">
            {filtered.map((p) => (
              <article className="property-card" key={p.id}>
                <div
                  className="property-image-wrap"
                  onClick={() => openProperty(p)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") openProperty(p);
                  }}
                >
                  <img
                    src={photo(p.image)}
                    alt={p.name}
                    className="property-image"
                  />

                  <span className="property-status">
                    {p.status.toUpperCase()}
                  </span>

                  {p.featured && (
                    <span className="featured-label">FEATURED</span>
                  )}

                  <span className="image-arrow">↗</span>
                </div>

                <div className="property-info">
                  <span className="property-location">
                    ⌖ {p.location.toUpperCase()}, KAMPALA
                  </span>

                  <h3>{p.name}</h3>

                  <div className="property-specs">
                    <span>{p.bedrooms} Bedrooms</span>
                    <span>{p.bathrooms} Bathrooms</span>
                    <span>{p.area} m²</span>
                  </div>

                  <div className="property-footer">
                    <div>
                      <span className="price-label">
                        DEMONSTRATION PRICE
                      </span>
                      <strong>{money(p.price)}</strong>
                    </div>

                    <button
                      onClick={() => openProperty(p)}
                      className="details-button"
                    >
                      VIEW ↗
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No properties found</h3>
            <p>Try changing your search or filters.</p>

            <button
              className="gold-button"
              onClick={() => {
                setSearch("");
                setLocation("All Locations");
                setType("All Types");
                setMaxBudget("Any Budget");
              }}
            >
              CLEAR FILTERS
            </button>
          </div>
        )}
      </section>

      <section className="about-section" id="about">
        <div className="about-image">
          <img
            src={photo("photo-1600607687920-4e2a09cf159d", 1200)}
            alt="Modern luxury home interior"
          />
          <div className="image-caption">
            A NEW PERSPECTIVE ON LIVING
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow dark">THE HAVEN DIFFERENCE</span>

          <h2>
            More than a home.
            <br />
            <em>A way of life.</em>
          </h2>

          <p>
            Finding the right property is about more than four walls. It's
            about discovering a place that reflects your ambitions,
            complements your lifestyle and feels unmistakably yours.
          </p>

          <p>
            Explore our curated demonstration collection of exceptional
            homes across Kampala.
          </p>

          <a href="#properties" className="text-link">
            DISCOVER OUR COLLECTION ↗
          </a>

          <div className="about-stats">
            <div>
              <strong>05</strong>
              <span>KEY LOCATIONS</span>
            </div>
            <div>
              <strong>09</strong>
              <span>DEMO PROPERTIES</span>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <span className="eyebrow">OUR APPROACH</span>

        <h2>
          Discover the <em>difference.</em>
        </h2>

        <div className="why-grid">
          <div>
            <span>01</span>
            <h3>Thoughtful Selection</h3>
            <p>
              A curated collection of sample properties in Kampala's
              established residential neighbourhoods.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Local Perspective</h3>
            <p>
              Explore locations and discover what makes each Kampala
              neighbourhood distinctive.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Personal Enquiries</h3>
            <p>
              Our demonstration enquiry experience makes it easy to start
              a property conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="eyebrow">
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h2>
            Let's find your
            <br />
            <em>place in Kampala.</em>
          </h2>

          <p>
            Interested in seeing how the Haven Properties experience works?
            Get in touch.
          </p>
        </div>

        <a
          className="gold-button"
          href="https://wa.me/256700000000?text=Hello%20Haven%20Properties"
          target="_blank"
          rel="noreferrer"
        >
          MAKE AN ENQUIRY ↗
        </a>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#">
          <span className="brand-mark">H</span>
          <span>
            HAVEN<span className="brand-light"> PROPERTIES</span>
          </span>
        </a>

        <p>Luxury living, thoughtfully discovered.</p>

        <span>
          © 2026 HAVEN PROPERTIES · DEMONSTRATION WEBSITE
        </span>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/256700000000?text=Hello%20Haven%20Properties"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        W
      </a>

      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="property-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close property details"
            >
              ✕
            </button>

            <div className="detail-gallery">
              <img
                src={photo(selected.images[activeImage], 1400)}
                alt={`${selected.name} gallery image ${activeImage + 1}`}
                className="detail-main-image"
              />

              <span className="gallery-counter">
                {activeImage + 1} / {selected.images.length}
              </span>
            </div>

            <div className="gallery-thumbnails">
              {selected.images.map((image, index) => (
                <button
                  key={image}
                  className={
                    activeImage === index
                      ? "gallery-thumb active"
                      : "gallery-thumb"
                  }
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={photo(image, 300)} alt="" />
                </button>
              ))}
            </div>

            <div className="modal-content">
              <span className="property-location">
                {selected.location.toUpperCase()}, KAMPALA · DEMO LISTING
              </span>

              <h2>{selected.name}</h2>

              <span className="detail-type">
                {selected.type} · {selected.status}
              </span>

              <strong className="modal-price">
                {money(selected.price)}
              </strong>

              <div className="detail-specs">
                <div>
                  <strong>{selected.bedrooms}</strong>
                  <span>Bedrooms</span>
                </div>
                <div>
                  <strong>{selected.bathrooms}</strong>
                  <span>Bathrooms</span>
                </div>
                <div>
                  <strong>{selected.area} m²</strong>
                  <span>Property Area</span>
                </div>
              </div>

              <div className="detail-description">
                <h3>About this property</h3>
                <p>{selected.description}</p>
              </div>

              <div className="amenities-section">
                <h3>Property Features & Amenities</h3>

                <div className="amenities-grid">
                  {selected.amenities.map((amenity) => (
                    <div className="amenity-item" key={amenity}>
                      <span>✓</span>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-enquiry">
                <div>
                  <h3>Interested in this property?</h3>
                  <p>Contact us to learn more about this listing.</p>
                </div>

                <button
                  className="gold-button"
                  onClick={() => whatsapp(selected)}
                >
                  ENQUIRE VIA WHATSAPP ↗
                </button>
              </div>

              <p className="modal-disclaimer">
                Fictional demonstration listing. Images, amenities, prices
                and availability are illustrative only and have not been
                independently verified.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
