
import React, { useMemo, useState } from "react";
import {
  FaSearch, FaShoppingBag, FaHeart, FaUser,
  FaBars, FaTimes, FaStar, FaArrowRight,
  FaPlus, FaMinus, FaTrash, FaTruck,
  FaShieldAlt, FaHeadset
} from "react-icons/fa";
import "./ecommers.css";

const products = [



  {
    id: 1,
    name: "Apple iPhone 15",
    category: "Electronics",
    price: 54999,
    oldPrice: 69999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    tag: "Popular"
  },
  {
    id: 3,
    name: "Classic Men's Sneakers",
    category: "Fashion",
    price: 1799,
    oldPrice: 2999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    tag: "Trending"
  },
  {
    id: 4,
    name: "Luxury Smart Watch",
    category: "Electronics",
    price: 3299,
    oldPrice: 4999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    tag: "New"
  },
  {
    id: 5,
    name: "Elegant Women's Handbag",
    category: "Fashion",
    price: 1499,
    oldPrice: 2499,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    tag: "Popular"
  },
  {
    id: 6,
    name: "Modern Home Decoration",
    category: "Home",
    price: 899,
    oldPrice: 1499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600",
    tag: "New"
  },
  {
    id: 7,
    name: "Professional Digital Camera",
    category: "Electronics",
    price: 32999,
    oldPrice: 39999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    tag: "Best Seller"
  },
  {
    id: 8,
    name: "Premium Beauty Essentials",
    category: "Beauty",
    price: 799,
    oldPrice: 1299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
    tag: "Trending"
  },

  // NEW FASHION PRODUCTS
  {
    id: 9,
    name: "Men's Premium Cotton Shirt",
    category: "Fashion",
    price: 1199,
    oldPrice: 1999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=600",
    tag: "New Arrival"
  },
  {
    id: 10,
    name: "Women's Summer Dress",
    category: "Fashion",
    price: 1599,
    oldPrice: 2499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600",
    tag: "Trending"
  },
  {
    id: 11,
    name: "Men's Denim Jacket",
    category: "Fashion",
    price: 2299,
    oldPrice: 3499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600",
    tag: "Popular"
  },
  {
    id: 12,
    name: "Women's Stylish Sneakers",
    category: "Fashion",
    price: 1899,
    oldPrice: 2999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
    tag: "Best Seller"
  },
  {
    id: 13,
    name: "Men's Casual Hoodie",
    category: "Fashion",
    price: 1499,
    oldPrice: 2299,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    tag: "New"
  },
  {
    id: 14,
    name: "Women's Elegant Handbag",
    category: "Fashion",
    price: 1999,
    oldPrice: 2999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600",
    tag: "Premium"
  },
  {
    id: 15,
    name: "Men's Classic Denim Jeans",
    category: "Fashion",
    price: 1799,
    oldPrice: 2699,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    tag: "Trending"
  },
  {
    id: 16,
    name: "Women's Stylish Sunglasses",
    category: "Fashion",
    price: 699,
    oldPrice: 1199,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    tag: "Popular"
  },
  {
    id: 17,
    name: "Men's Formal Leather Shoes",
    category: "Fashion",
    price: 2499,
    oldPrice: 3999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600",
    tag: "Premium"
  },
  {
    id: 18,
    name: "Women's Casual Kurti",
    category: "Fashion",
    price: 999,
    oldPrice: 1599,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e4?w=600",
    tag: "New Arrival"
  },
  {
    id: 19,
    name: "Premium Travel Backpack",
    category: "Fashion",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    tag: "Best Seller"
  },
  {
    id: 20,
    name: "Women's Luxury Watch",
    category: "Fashion",
    price: 2799,
    oldPrice: 3999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",
    tag: "Exclusive"
  },


  {
    id: 1,
    name: "Apple iPhone 15",
    category: "Electronics",
    price: 54999,
    oldPrice: 69999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 2499,
    oldPrice: 3999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    tag: "Popular"
  },
  {
    id: 3,
    name: "Classic Men's Sneakers",
    category: "Fashion",
    price: 1799,
    oldPrice: 2999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    tag: "Trending"
  },
  {
    id: 4,
    name: "Luxury Smart Watch",
    category: "Electronics",
    price: 3299,
    oldPrice: 4999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    tag: "New"
  },
  {
    id: 5,
    name: "Elegant Women's Handbag",
    category: "Fashion",
    price: 1499,
    oldPrice: 2499,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    tag: "Popular"
  },
  {
    id: 6,
    name: "Modern Home Decoration",
    category: "Home",
    price: 899,
    oldPrice: 1499,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600",
    tag: "New"
  },
  {
    id: 7,
    name: "Professional Digital Camera",
    category: "Electronics",
    price: 32999,
    oldPrice: 39999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    tag: "Best Seller"
  },
  {
    id: 8,
    name: "Premium Beauty Essentials",
    category: "Beauty",
    price: 799,
    oldPrice: 1299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
    tag: "Trending"
  }
];

const categories = [
  { name: "All", icon: "✦" },
  { name: "Electronics", icon: "⌘" },
  { name: "Fashion", icon: "♧" },
  { name: "Home", icon: "⌂" },
  { name: "Beauty", icon: "✿" }
];

function Ecommers() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const addToCart = (product) => {
    setCart((oldCart) => {
      const found = oldCart.find((item) => item.id === product.id);

      if (found) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleWishlist = (id) => {
    setWishlist((oldList) =>
      oldList.includes(id)
        ? oldList.filter((item) => item !== id)
        : [...oldList, id]
    );
  };

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const money = (price) =>
    "₹" + price.toLocaleString("en-IN");

  return (
    <div className="shopzone">

      
      <div className="announcement">
        Free shipping on orders above ₹999
        <span> | </span>
        Easy returns within 7 days
      </div>

      
      <header className="navbar">
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <a href="#" className="logo">
          shop<span>zone.</span>
        </a>

        <nav className={menuOpen ? "nav-links show" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#footer" onClick={() => setMenuOpen(false)}>About</a>
        </nav>

        <div className="nav-actions">
          <div className="search-bar">
            <FaSearch />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            />
          </div>

          <button className="icon-btn" title="Wishlist">
            <FaHeart />
            <span>{wishlist.length}</span>
          </button>

          <button className="icon-btn" title="Account">
            <FaUser />
          </button>

          <button className="icon-btn cart-button" onClick={() => setCartOpen(true)}>
            <FaShoppingBag />
            <span>{cartCount}</span>
          </button>
        </div>
      </header>

  
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-label">THE NEW COLLECTION 2026</span>
          <h1>Discover a world<br />of <span>better shopping.</span></h1>
          <p>
            Everything you love, all in one place.
            Explore quality products at amazing prices.
          </p>
          <a href="#products" className="primary-btn">
            Explore Collection <FaArrowRight />
          </a>

          <div className="hero-stats">
            <div><strong>10K+</strong><small>Happy Customers</small></div>
            <div><strong>500+</strong><small>Products</small></div>
            <div><strong>4.8/5</strong><small>Customer Rating</small></div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="ShopZone shopping collection"
          />
          <div className="floating-card">
            <span>✦ Special Offer</span>
            <strong>Up to 50% OFF</strong>
          </div>
        </div>
      </section>

      
      <section className="categories section" id="categories">
        <div className="section-title">
          <div>
            <span className="eyebrow">EXPLORE MORE</span>
            <h2>Shop by Category</h2>
          </div>
          <p>Find everything you need in one place.</p>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <button
              key={item.name}
              className={category === item.name ? "category-card selected" : "category-card"}
              onClick={() => {
                setCategory(item.name);
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              <span className="category-icon">{item.icon}</span>
              <strong>{item.name === "All" ? "All Products" : item.name}</strong>
              <small>Explore Collection <FaArrowRight /></small>
            </button>
          ))}
        </div>
      </section>

    
      <section className="products section" id="products">
        <div className="section-title">
          <div>
            <span className="eyebrow">HANDPICKED FOR YOU</span>
            <h2>Trending Products</h2>
          </div>
          <p>Our most loved products, selected just for you.</p>
        </div>

        <div className="filter-row">
          {categories.map((item) => (
            <button
              key={item.name}
              className={category === item.name ? "filter active" : "filter"}
              onClick={() => setCategory(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">{product.tag}</span>

                  <button
                    className={wishlist.includes(product.id) ? "wishlist liked" : "wishlist"}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to wishlist"
                  >
                    <FaHeart />
                  </button>
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>

                  <div className="rating">
                    <FaStar /> {product.rating}
                    <span> (Verified rating)</span>
                  </div>

                  <div className="product-bottom">
                    <div className="price">
                      <strong>{money(product.price)}</strong>
                      <del>{money(product.oldPrice)}</del>
                    </div>

                    <button
                      className="add-btn"
                      onClick={() => addToCart(product)}
                    >
                      <FaPlus /> Add
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-products">
              <h3>No products found</h3>
              <p>Try another product name or category.</p>
            </div>
          )}
        </div>
      </section>

      
      <section className="promo section">
        <div>
          <span>LIMITED TIME OFFER</span>
          <h2>Upgrade Your Everyday.</h2>
          <p>Discover something special at prices you'll love.</p>
          <a href="#products" className="primary-btn">Shop Deals <FaArrowRight /></a>
        </div>
        <div className="promo-symbol">S.</div>
      </section>

    
      <section className="benefits section">
        <div className="benefit">
          <FaTruck />
          <div><strong>Free Shipping</strong><p>On orders above ₹999</p></div>
        </div>
        <div className="benefit">
          <FaShieldAlt />
          <div><strong>Secure Shopping</strong><p>Safe and secure experience</p></div>
        </div>
        <div className="benefit">
          <FaHeadset />
          <div><strong>Customer Support</strong><p>We're here to help</p></div>
        </div>
      </section>

  
      <section className="newsletter">
        <span>STAY IN THE LOOP</span>
        <h2>Get updates & special offers</h2>
        <p>Subscribe to discover our latest collections and deals.</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for subscribing!");
        }}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

    
      <footer id="footer">
        <div className="footer-main">
          <div>
            <a href="#" className="logo footer-logo">shop<span>zone.</span></a>
            <p>Your everyday destination for<br />better online shopping.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
          </div>
          <div>
            <h4>Customer Care</h4>
            <a href="#footer">Contact Us</a>
            <a href="#footer">Shipping Policy</a>
            <a href="#footer">Returns & Refunds</a>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p>Instagram · Facebook · YouTube</p>
          </div>
        </div>
        <div className="copyright">
          © 2026 ShopZone. All rights reserved.
        </div>
      </footer>

      
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Your Cart ({cartCount})</h2>
              <button onClick={() => setCartOpen(false)}><FaTimes /></button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <FaShoppingBag />
                <h3>Your cart is empty</h3>
                <p>Discover something you love.</p>
                <button onClick={() => setCartOpen(false)}>Continue Shopping</button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <strong>{money(item.price)}</strong>
                        <div className="quantity">
                          <button onClick={() => updateQuantity(item.id, -1)}><FaMinus /></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}><FaPlus /></button>
                          <button className="remove" onClick={() => setCart(cart.filter((p) => p.id !== item.id))}><FaTrash /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div><span>Subtotal</span><strong>{money(totalPrice)}</strong></div>
                  <div><span>Shipping</span><strong>Calculated at checkout</strong></div>
                  <div className="grand-total"><span>Total</span><strong>{money(totalPrice)}</strong></div>
                  <button onClick={() => alert("Checkout will be added in the next step.")}>
                    Proceed to Checkout <FaArrowRight />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default Ecommers;
