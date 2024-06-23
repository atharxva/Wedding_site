import React, { useEffect, useState } from "react";
import styles from "./Matches.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";

function Matches() {
    const [matches, setMatches] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/matches/", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setMatches(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const likeProfile = (id) => {
        fetch("http://localhost:3000/like/" + id, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Profile liked successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className={styles.cardContainer}>
                {matches.length === 0 && <h1>No matches found</h1>}

                {matches.length > 0 &&
                    matches.map((match, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={match.imageURL}
                                    alt={match.name}
                                    className={styles.matchImage}
                                />
                            </div>
                            <div className={styles.infoContainer}>
                                <h1>{match.name}</h1>
                                <h1>Age: {match.age}</h1>
                                <h3>Height: {match.height}</h3>
                                <h2>Religion: {match.religion}</h2>
                                <h2>Occupation: {match.occupation}</h2>
                                <h2>Qualification: {match.qualification}</h2>
                                <h2>Hobbies: {match.hobbies}</h2>
                                <h2>Marital Status: {match.maritalStatus}</h2>

                                <button
                                    onClick={() => likeProfile(match._id)}
                                    className={styles.button}>
                                <i className={"fa-solid fa-heart " + styles.icon_like}></i>
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Matches;
