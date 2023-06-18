import { React, useEffect, useState } from "react";
import axios from "axios";
import Sidenav from "../components/Sidenav";
import Topbar from "../components/Topbar";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { config } from "../constants";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const url = config.url.API_URL;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, []);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <div className="container">
      <Sidenav />
      <div className="main">
        <Topbar />
      </div>
    </div>
  );
};

export default LandingPage;
