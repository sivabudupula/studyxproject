
import CardsDetails from './components/CardsDetails';

 import React, { useState } from 'react';
//import logo from '../Images/logo.jpg';
const Paymentsuccess = () => {
  const [orderId, setOrderId] = useState('#0123456789');

  const handleTrackOrder = () => {
    // You can implement the tracking logic here
    alert(`Tracking order ${orderId}`);
  };

  return (
    <div style={styles.container}>
   
      <h2>Your Order is successfully placed</h2>
      <p>Order Id : {orderId}</p>
      <button onClick={handleTrackOrder}>Track Order</button>
    </div>
  );
};


/*const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      border: '1px solid'
  }
}*/
//import React, { useState } from 'react';
//import logo1 from '../Images/logo1.jpg';
//import logo3 from '../Images/logo3.jpg';

const PaymentContainer = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePaymentChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Handle form submission with the selected payment method
    console.log('Selected Payment Method:', selectedMethod);
  };

  return (
    <div>
      <div style={styles.container}>
        <h2 style={styles.heading}>Payment Methods</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.option}>
            <input
              type="radio"
              id="upi"
              value="upi"
              checked={selectedMethod === 'upi'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="upi" style={styles.label}>
              UPI
            </label>
           
          </div>
          <div style={styles.option}>
            <input
              type="radio"
              id="debitCredit"
              value="debitCredit"
              checked={selectedMethod === 'debitCredit'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="debitCredit" style={styles.label}>
              Debit/Credit Card
            </label>
            
            <p>Add and secure your card as per RBI guidelines</p>
          </div>
          <div style={styles.option}>
            <input
              type="radio"
              id="netBanking"
              value="netBanking"
              checked={selectedMethod === 'netBanking'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="netBanking" style={styles.label}>
              Net Banking
            </label>
          </div>
          <div style={styles.option}>
            <input
              type="radio"
              id="cashOnDelivery"
              value="cashOnDelivery"
              checked={selectedMethod === 'cashOnDelivery'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="cashOnDelivery" style={styles.label}>
              Cash on Delivery
            </label>
          </div>
          <div style={styles.option}>
            <input
              type="radio"
              id="emi"
              value="emi"
              checked={selectedMethod === 'emi'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="emi" style={styles.label}>
              EMI
            </label>
          </div>
        </form>
      </div>
      <br></br>
            <br></br>
      <br></br>

      <div>
        <div style={styles.container1}>
          <div style={styles.formField}>
            <h3 style={styles.heading1}>PRICE DETAILS</h3>
            <hr></hr>
            <div style={styles.priceContainer}>
              <h4 style={styles.heading2}>Price (1 item)</h4>
              <p style={styles.price}>$73</p>
            </div>
            <div style={styles.priceContainer}>
              <h4 style={styles.heading2}>Delivery Charges</h4>
              <p style={styles.price}>$73</p>
            </div>
            <hr style={styles.line1}></hr>
            <h4 style={styles.heading3}>AMOUNT PAYABLE</h4>
          </div>
          <div style={styles.formField}></div>
          <button type="submit" style={styles.submitButton}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '50px',
    marginBottom: '30px',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  optionradio: {
 marginBottom: '30px',

  },
  label: {
    marginRight: '350px',
    fontSize: '35px',
  },
  formField: {
    marginBottom: '30px',
  },
  formLabel: {
    marginRight: '20px',
    fontSize: '20px',
  },
  inputField: {
    padding: '5px',
    fontSize: '16px',
    width: '100%',
  },
  submitButton: {
    padding: '1px',
    fontSize: '18px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  container1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    margin: '0 auto',
  },
  heading1: {
    fontSize: '25px',
    marginRight: '350px',
  },
  heading3: {
    fontSize: '25px',
    marginRight: '350px',
  },
  heading5: {
    display: 'flex',
  },
  logo3: {
    display: 'flex',
  },
};

export default Paymentsuccess;