import React, { useState, useEffect } from 'react';
import '../styles/CompanyProfile.css'; 
import Aside from '../components/Aside';


const CompanyProfile = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const saveProfile = () => {
    localStorage.setItem('companyName', name);
    localStorage.setItem('companyDescription', description);
    localStorage.setItem('companyProfileImage', profileImage);
  }

  useEffect(() => {
    const savedName = localStorage.getItem('companyName');
    const savedDescription = localStorage.getItem('companyDescription');
    const savedProfileImage = localStorage.getItem('companyProfileImage');
    
    if (savedName && savedDescription) {
      setName(savedName);
      setDescription(savedDescription);
    }
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
  }, []);
  
  const handleProfileImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setProfileImage(event.target.result);
    };

    reader.readAsDataURL(selectedFile);
  }
  
  return (
    <div className="company-profile">
      <Aside/>
      <div className='container-profile'>
      <h1>Company Profile</h1>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label>Profile Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleProfileImageChange}
      />
      {profileImage && (
        <img src={profileImage} alt="Profile Image" className="profile-image" />
      )}
      <button onClick={saveProfile}>Save</button>
      <div>
        <h2>Profile Display Text</h2>
        <p>Company Name: {name}</p>
        <p>Description: {description}</p>
      </div>
      </div>
    </div>
  );
};

export default CompanyProfile;


