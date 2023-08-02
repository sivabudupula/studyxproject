import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import "./style.css";
 import Header from "./Header"
import { useDispatch } from "react-redux";
import { ADD } from "./redux/actions/action";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "./routes/sidebar";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div>
      {/* <Sidebar/> */}
     <div className="container mt-3"> 
        
      <h2 className="text-container">online courses</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            // <>

            <Card
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              {/* <Link to=`/cart/${element.id}`>
               */}
              <Link to={`/cart/${element.id}`}>
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
              </Link>
              <Card.Body>
                <Link to={`/cart/${element.id}`}>
                  <Card.Title>{element.rname}</Card.Title>
                </Link>
                <Card.Text>Price : ₹ {element.price}</Card.Text>
                <div className="button_div d-flex justify-content-between">
                  <Button
                    variant="primary"
                    onClick={() => send(element)}
                    className="col-lg-5"
                  >
                    Add to Cart
                  </Button>
                  <Link to={`/price/${element.id}`}>
                    <Button
                      variant="primary"
                      className="col-lg-12"
                    >
                      Buy Now
                    </Button>
                  </Link>
                  <p></p>
                </div>
              </Card.Body>  
            </Card>

            // </>
          );
        })}
      </div>
      <Outlet />
    </div>
    // </div>
  );
};

export default Cards;
