import React, { useEffect, useState } from 'react';
import styles from './MyProfile.module.css'; // Import CSS module

const MyProfile = () => {
  const [profile, setProfile] = useState(null);
  const [preferences, setPreferences] = useState(null);

  useEffect(() => {
    // Fetch profile data
    fetch('http://localhost:3000/profiles')
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      })
      .catch(err => console.log(err));

    // Fetch preferences data
    fetch('http://localhost:3000/preferences', {
      method: 'POST',
      body: JSON.stringify(preferences),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setPreferences(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_info}>
        <h2>My Info</h2>
        {profile && (
          <div className={styles.info_list}>
            <div><strong>Name:</strong> {profile.name}</div>
            <div><strong>Age:</strong> {profile.age}</div>
            <div><strong>Height:</strong> {profile.height} ft</div>
            <div><strong>Religion:</strong> {profile.religion}</div>
            <div><strong>Occupation:</strong> {profile.occupation}</div>
            <div><strong>Qualification:</strong> {profile.qualification}</div>
            <div><strong>Hobbies:</strong> {profile.hobbies}</div>
            <div><strong>Marital Status:</strong> {profile.maritalStatus}</div>
          </div>
        )}
      </div>
      <div className={styles.profile_preferences}>
        <h2>My Preferences</h2>
        {preferences && (
          <div className={styles.preference_list}>
            <div><strong>Age:</strong> {preferences.age}</div>
            <div><strong>Height:</strong> {preferences.height} ft</div>
            <div><strong>Religion:</strong> {preferences.religion}</div>
            <div><strong>Occupation:</strong> {preferences.occupation}</div>
            <div><strong>Qualification:</strong> {preferences.qualification}</div>
            <div><strong>Hobbies:</strong> {preferences.hobbies}</div>
            <div><strong>Marital Status:</strong> {preferences.maritalStatus}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
