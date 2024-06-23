import { useState } from "react";
import styles from "./UserForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
//import PreferenceForm from '../preference-form/PreferenceForm';

function UserForm() {
    let [profile, setProfile] = useState();
    let navigation = useNavigate();

    function handleInput() {
        setProfile({ ...profile, [event.target.name]: event.target.value });
    }

    function handleSubmit() {
        // navigation("/prefernceForm");
        event.preventDefault();

        fetch("http://localhost:3000/profiles", {
            method: "POST",
            body: JSON.stringify(profile),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                navigation("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.containerTitle}>Add Profile</h1>
                <Link to="/profiles">
                    <FontAwesomeIcon icon={faList} size="2x" />
                </Link>
            </div>

            {/* <PreferenceForm data={profile}></PreferenceForm> */}

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Name"
                    name="name"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Age"
                    name="age"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Image URL"
                    name="imageURL"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Height"
                    name="height"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Religion"
                    name="religion"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Occupation"
                    name="occupation"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Qualification"
                    name="qualification"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Hobbies"
                    name="hobbies"
                    onChange={handleInput}
                />
                <select
                    className={styles.inp}
                    required
                    name="maritalStatus"
                    onChange={handleInput}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Enter Marital Status
                    </option>
                    <option value="never_married">Never Married</option>
                    <option value="divorcee">Divorcee</option>
                </select>

                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Preferencial Age"
                    name="p_age"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Preferencial Occupation"
                    name="p_occupation"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Preferencial Height"
                    name="p_height"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Preferencial Religion"
                    name="p_religion"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Preferencial Qualification"
                    name="p_qualification"
                    onChange={handleInput}
                />

                <select
                    className={styles.inp}
                    required
                    name="p_maritalStatus"
                    onChange={handleInput}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Enter Marital Status
                    </option>
                    <option value="never_married">Never Married</option>
                    <option value="divorcee">Divorcee</option>
                </select>

                <input
                    type="text"
                    className={styles.inp}
                    required
                    placeholder="Enter Username"
                    name="username"
                    onChange={handleInput}
                />

                <input
                    type="password"
                    className={styles.inp}
                    required
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleInput}
                />

                <button
                    type="button"
                    className={styles.btn}
                    onClick={handleSubmit}
                >
                    Add Product
                </button>
            </form>
        </section>
    );
}
export default UserForm;
