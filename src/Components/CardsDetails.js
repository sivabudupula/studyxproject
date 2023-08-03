import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "./redux/actions/action";
import Cardsdata from "../Components/CardsData";
import { Outlet, Link } from "react-router-dom";
import { AltRoute, Height, Padding, PostAdd } from "@mui/icons-material";
// import PaymentMethodPage from "./components/PaymentMethodPage";
// import v1 from "../videos/DataScience.mp4";
import ReactPlayer from "react-player";
const CardsDetails = ({ pricing }) => {
  const [data, setData] = useState();
  // console.log(data);

  const { id } = useParams();
  // console.log(id, "hbjhbhjb");

  const history = useNavigate();
  console.log(useParams, "abcdef");
  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);

  console.log(getdata, "aaaaaaaaa");

  const compare = () => {
    let comparedata = Cardsdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // add data
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);
  console.log(data, "asdsa");
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">
          {pricing ? "Payment Page" : "Iteams Details Page"}
        </h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data &&
              data.length &&
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img" key={ele.id}>
                      <img src={ele.imgdata} alt="" />

                      <strong>Description:</strong>
                      <i>{ele.description}</i>
                      {/* <video controls autoPlay style={{height:"250px"}}>
      <source src={"../videos/"+ele.video} type="video/mp4"/>
     </video>/ */}
                      {/* {ele.video} */}
                   
                    {/* <div> */}/{/* </div> */}
                    {/* <br/> */}
                              {/* Displaying the video player only if the video URL is provided */}
      {/* {ele.video && (
        <ReactPlayer
          url={ele.video}
          controls
          width="100%"
          height="auto"
          style={{ marginBottom: '10px' }}
        />
      )} */}
                     </div>
                      
      
                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p>
                              {" "}
                              <strong>courses</strong> : {ele.rname}
                            </p>
                            <p>
                              {" "}
                              <strong>Price</strong> : ₹{ele.price}
                            </p>
                            <p>
                              {" "}
                              <strong>Location</strong> : {ele.address}
                            </p>
                            <p>
                              {" "}
                              <strong>Total</strong> :₹ {ele.price}
                            </p>
                          </td>
                          <td>
                            <p>
                              <strong>Rating :</strong>{" "}
                              <span
                                style={{
                                  background: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "5px",
                                }}
                              >
                                {ele.rating} ★{" "}
                              </span>
                            </p>
                            <p>
                              <strong>Order Review :</strong>{" "}
                              <span>{ele.somedata} </span>
                            </p>
                            <p>
                              <strong>Remove :</strong>{" "}
                              <span>
                                <i
                                  className="fas fa-trash"
                                  onClick={() => dlt(ele.id)}
                                  style={{
                                    color: "red",
                                    fontSize: 20,

                                    cursor: "pointer",
                                  }}
                                ></i>{" "}
                              </span>
                              <strong>Buy :</strong>{" "}
                              <span>
                                {" "}
                                <Link to="/price/:id">
                                  <i
                                    className="fas fa-shopping-cart"
                                    onClick={() =>
                                      AltRoute(ele.PaymentMethodPage)
                                    }
                                    style={{
                                      color: "light grey",
                                      fontSize: 20,
                                      cursor: "pointer",
                                    }}
                                  ></i>{" "}
                                </Link>{" "}
                              </span>
                            </p>
                          </td>
                        </tr>
                      </Table>
                    
                      
                    </div>
                  </>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
