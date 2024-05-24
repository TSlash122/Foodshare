import React, { useState, useEffect } from 'react';
import './Feedback.css'; // Import CSS file for styling

const Feedback = () => {
  // State to track loading state
  const [loading, setLoading] = useState(true);

  // Sample reviews data
  const sampleReviews = [
    {
      id: 1,
      message: "Great experience, the food was delicious!",
      rating: 5,
      recipientName: "John Doe"
    },
    {
      id: 2,
      message: "The food was okay, but it arrived late.",
      rating: 3,
      recipientName: "Jane Smith"
    },
    {
      id: 3,
      message: "Thank you for the donation!",
      rating: 4,
      recipientName: "Alex Johnson"
    }
  ];

  // Simulate fetching reviews data
  useEffect(() => {
    // Simulate API call or data fetching
    setTimeout(() => {
      setLoading(false); // Set loading to false once data is fetched
    }, 4500); // Simulated delay of 2 seconds
  }, []);

  return (
    <div className="feedback-container">
      <h1 /*style={{ fontStyle: 'italic' }}*/>Foodshare Network</h1>
      <h2 /*style={{ fontStyle: 'italic' }}*/ className="feedback-heading">Feedback and Reviews</h2>
      {loading ? ( // Conditionally render spinner if loading is true
        <div className="spinner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> // Display spinner while loading
      ) : (
        <ul className="feedback-list">
          {sampleReviews.map(review => (
            <li key={review.id} className="feedback-item">
              <p className="feedback-message">{review.message}</p>
              <p className="feedback-rating">Rating: {review.rating}/5</p>
              <p className="feedback-recipient">Recipient: {review.recipientName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Feedback;
