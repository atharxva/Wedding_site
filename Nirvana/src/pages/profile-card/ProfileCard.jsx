import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCard = ({ profile }) => {
    return (
        <div className={styles.profile_card}>
            <h2>{profile.name}</h2>
            <p><strong>Age:</strong> {profile.age}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            <p><strong>Height:</strong> {profile.height}</p>
            <p><strong>Religion:</strong> {profile.religion}</p>
            <p><strong>Caste:</strong> {profile.caste}</p>
            <p><strong>Mother Tongue:</strong> {profile.motherTongue}</p>
            <p><strong>Profession:</strong> {profile.profession}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p><strong>Bio:</strong> {profile.bio}</p>
            <p><strong>Interests:</strong> {profile.interests.join(', ')}</p>
        </div>
    );
};

export default ProfileCard;