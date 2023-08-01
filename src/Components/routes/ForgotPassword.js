import React, { useState } from 'react';
import axios from 'axios';
import '../styles/forgot.css'

const ForgotPassword = ({ onClose }) => {
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevPasswordData) => ({
      ...prevPasswordData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Validate the new password and confirm password
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      // Send a request to update the password
      const response = await axios.post('http://localhost:3003/login_data/add', {
        newPassword: passwordData.newPassword,
      });
      
      console.log(response);
      alert('Password updated successfully');
      setError('');
      
      // Close the popup
      onClose();
    } catch (error) {
      console.error(error);
      alert('Error updating password');
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='outsideborder'>
    <div className="popup-container">
    <div className="popup" style={{ backgroundColor: '#fff', padding: '20px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
            class="manage-text"
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter new password"
              value={passwordData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={passwordData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <button className="save-button" type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
