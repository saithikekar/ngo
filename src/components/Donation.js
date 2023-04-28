import React, { useState } from 'react';
import './Donation.css';

const DonationForm = () => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedNGO, setSelectedNGO] = useState('');

  const handleNameChange = (event) => {
    setDonorName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setDonorEmail(event.target.value);
  };

  const handleAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleNGOChange = (event) => {
    setSelectedNGO(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="donation-form-container">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="donor-name">Name:</label>
        <input
          id="donor-name"
          type="text"
          value={donorName}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="donor-email">Email:</label>
        <input
          id="donor-email"
          type="email"
          value={donorEmail}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="donation-amount">Donation Amount:</label>
        <input
          id="donation-amount"
          type="number"
          value={donationAmount}
          onChange={handleAmountChange}
          required
        />

        <label htmlFor="ngo-dropdown">Select NGO:</label>
        <select id="ngo-dropdown" value={selectedNGO} onChange={handleNGOChange}>
          <option value="">-- Select NGO --</option>
          <option value="NGO 1">NGO 1</option>
          <option value="NGO 2">NGO 2</option>
          <option value="NGO 3">NGO 3</option>
        </select>

        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default DonationForm;
