import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Change the URL to your backend endpoint
        const response = await fetch("https://localhost:5000/auth/profile", {
          method: 'GET',
          headers: {
            // If you have any authentication headers or tokens, add them here
            'Content-Type': 'application/json'
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUserData(data);
        } else {
          setError(data.message || "Failed to fetch user profile.");
        }

      } catch (err) {
        setError("An error occurred while fetching the user profile.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
};

export default Profile;