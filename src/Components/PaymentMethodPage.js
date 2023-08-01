import Razorpay from "razorpay-checkout";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "./redux/actions/action";
import Cardsdata from "./CardsData";
import { Outlet, Link } from "react-router-dom";
import { AltRoute, Height, Padding, PostAdd } from "@mui/icons-material";
const RazorpayPaymentPopup = ({ pricing }) => {
  const [paymentStatus, setPaymentStatus] = useState("");
  const [data, setData] = useState();
  // console.log(data);

  const { id } = useParams();
  // console.log(id, "hbjhbhjb");
  const handlePayment = () => {
    const options = {
      key: "rzp_test_MKpwNEWmLBYESh", // Replace with your Razorpay Key ID
      amount:  "49000", // Replace with the amount you want to charge in paise (e.g., for ₹10, amount should be 1000)
      currency: "INR", // Replace with your preferred currency
      name: "Example Store", // Replace with your store name or description
      description: "Test payment",
      image: "https://example.com/your_logo.png", // Replace with your store logo URL
      handler: function (response) {
        // This function will be called after the payment is successful
        setPaymentStatus("success");
        // You can perform further actions here, such as updating your backend with the payment details
      },
      prefill: {
        name: "John Doe", // Replace with the customer's name
        email: "john.doe@example.com", // Replace with the customer's email
        contact: "1234567890", // Replace with the customer's phone number
      },
      notes: {
        address: "Example Street, City", // Replace with additional notes if needed
      },
      theme: {
        color: "#F37254", // Replace with your preferred theme color
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };
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
    <div>
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
                      </div>
                      {/* <div> */}/{/* </div> */}
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
                                  <Link to="/price/1">
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
                                <button onClick={handlePayment} style={{
                                        color: "light  green",
                                        fontSize: 20,
                                       
                                        cursor: "pointer",
                                      }}>Pay with Razorpay</button>
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
     
      {paymentStatus === "success" && <div>Payment Successful!</div>}
    </div>
  );
};

export default RazorpayPaymentPopup;
