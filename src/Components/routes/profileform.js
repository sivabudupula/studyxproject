import React, { useState } from 'react';
import axios from 'axios';
import '../styles/profileform.css'
import { FaUserCircle} from "react-icons/fa";
import Sidebar from './sidebar';

const Profileform = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    clientname:'',
    email:'',
    projectname:'',
    status:'',
    value:'',
  });
  const [previewImage, setPreviewImage] = useState(null);
  const handleProfileLogoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
      // If you want to save the selected file as well, you can use 'file' variable here.
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('clientname', formData.clientname);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('projectname', formData.projectname);
      formDataToSubmit.append('status', formData.status);
      formDataToSubmit.append('value', formData.value);

      const response = await axios.post(
        'http://localhost:3001/profilee_data',
        formDataToSubmit,        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      ); 

      console.log(response);

      window.alert('Data submitted successfully!');
      onLogin();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  const formbody = {
    // backgroundImage: 'url("https://hbr.org/resources/images/article_assets/2014/02/Feb14_02_108315569.jpg")';
    backgroundSize: 'cover',
    backgroundColor:'transparent',
    backgroundImageRepeat: 'no-repeat',
    minHeight: '100vh',
    flexDirection: 'row',
      
    };

  

  return (
    <div>
    <div>
      <Sidebar/>
    </div>

        <div className='formbody' style={formbody}>
          <div className='formbodyleft'>
            <div className="form-containerp">
            <h2 className="profilee">Profile Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Client Name*</label>
                <input
                    type="text"
                    id="clientname"
                    name="clientname"
                    value={formData.clientname}
                    onChange={handleChange}
                    data-aos="fade-right"
                    required
                />
                </div>
    
                <div className="form-groupp">
                <label htmlFor="email">Email*</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    data-aos="fade-right"
                    required
                />
                </div>
    
                <div className="form-groupp">
                <label htmlFor="designation">Project Name*</label>
                <input
                    type="text"
                    id="projectname"
                    name="projectname"
                    value={formData.projectname}
                    onChange={handleChange}
                    data-aos="fade-right"
                    required
                />
                </div>
    
                <div className="form-groupp">
                <label htmlFor="status">Status*</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    data-aos="fade-right"
                    required
                 >
                    <option value="">Select Status</option>
                    <option value="excellent">Excellent</option>  
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                </select>
                </div>
    
                <div className="form-groupp">
                <label htmlFor="experience">Value*</label>
                <input
                    type="text"
                    id="value"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    data-aos="fade-right"
                    required
                />
                </div>
                
                <div className="form-groupp">
                <button type="submit" disabled={submitting} data-aos="fade-up">
                    {submitting ? 'Submitting...' : 'Submit'}
                </button>
                </div>
                </form>
            </div>
        </div>
        <div className='formbodyright'>
                <div class="profileimage">
                <form2 onSubmit={handleSubmit}>
                    <div className="profile-image">
                      {previewImage ? (
                        <img src={previewImage} alt="Profile Preview" className="avatar img-circle" />
                      ) : (
                        <FaUserCircle size={'100px'} />
                      )}
                      <label>Upload your photo</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfileLogoChange}
                        required
                      />
                    </div>
 

                    </form2>
                          </div>
                          </div>
                      
            </div>
            </div>
      );
    };

    export default Profileform;