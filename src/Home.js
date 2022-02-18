import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/81UwfObBWFL.jpg"
          alt="banner"
        />

        <div className="home_row">
          <Product
            title={
              "The Lean Startup (English, Paperback, Ries Eric)  (Paperback, Ries Eric)"
            }
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51sz2f4cm8L._SX316_BO1,204,203,200_.jpg"
            }
            price={199.99}
            rating={5}
          />
          <Product
            title={
              "Bajaj New Shakti Neo 15L Metal Body 4 Star Water Heater with Multiple Safety System, White"
            }
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/51-cyGLC3kL._SL1500_.jpg"
            }
            price={5749.0}
          />
          <Product
            title={
              "Prestige Aluminium Omega Deluxe Granite Finish with 1 Glass Lid (Black) - 3 Pieces"
            }
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/619A6jkbOhL._SL1181_.jpg"
            }
            price={2000.0}
          />
        </div>
        <div className="home_row">
          <Product
            title={
              "AmazonBasics 127cm (50 inch) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"
            }
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg"
            }
            price={33999.0}
          />
          <Product
            title={
              "QUBO Smart Cam 360|1080p Full HD Wi-Fi Camera|Trust of Hero Group|360° Deg Coverage with Pan & Tilt|Intruder Alarm System|Full Color in Low Light |Two Way Talk|Alexa & OK Google|Made in India"
            }
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/41lQeEqdDBL._SL1000_.jpg"
            }
            price={2890.0}
          />
        </div>
        <div className="home_row">
          <Product
            title={
              "Samsung Galaxy M52 5G (Blazing Black, 6GB RAM, 128GB Storage) Latest Snapdragon 778G 5G | sAMOLED 120Hz Display"
            }
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/71b5BwTCcZL._SL1500_.jpg"
            }
            price={29999.0}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
