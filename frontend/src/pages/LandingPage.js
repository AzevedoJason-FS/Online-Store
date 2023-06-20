import { React, useEffect, useState } from "react";
import axios from "axios";
import Sidenav from "../components/Sidenav";
import Topbar from "../components/Topbar";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { config } from "../constants";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [products, setProduct] = useState({});

  const url = config.url.API_URL;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, []);

  const handleClick = (product) => {
    dispatch(addProduct({ product }));
  };

  const openCart = () => {
    
  }

  return (
    <div className="container">
      <Sidenav />
      <div className="main">
        <Topbar />
        <>
          {products && products.length > 0 ? (
            <div className="gallery">
              {products &&
                products.map((product) => {
                  return (
                    <div className="game_box" key={product._id}>
                      <div className="img_box">
                        <img id="img" src={product.img} alt={product.title} />
                      </div>
                      <div className="price_box">
                        <p id="game_title">${product.price}</p>
                      </div>
                      <div>
                      <button id="add_cart_btn" onClick={() => handleClick(product)}>
                        Add to Cart
                      </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="rolling">
              {/* <Rolling /> */}
              <h2 id="loading">Loading..</h2>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default LandingPage;
