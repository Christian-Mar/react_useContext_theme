import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import StarRating from "../components/dogs/StarRating";
import styles from "./DogDetail.module.css";

const DogDetail = () => {
  const { backgroundColor } = useContext(ThemeContext);
  const { id } = useParams();
  let navigate = useNavigate();
  console.log(id);
  let [dogInfo, setDogInfo] = useState();
  let [dogPicture, setDogPicture] = useState();
  let [score, setScore] = useState();
  console.log(score);

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDogInfo(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log("error");
        }
      });
  }, [id]);

  console.log(dogInfo);

  useEffect(() => {
    if (dogInfo) {
      fetch(`https://api.thedogapi.com/v1/images/${dogInfo.reference_image_id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setDogPicture(data);
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            console.log("error");
          }
        });
    }
  }, [dogInfo?.reference_image_id]);

  const handleFavorite = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "dogs"), {
        api_id: dogInfo.id,
        title: dogInfo.name,
        image: dogPicture.url,
        life_span: dogInfo.life_span,
        temperament: dogInfo.temperament,
        rating: score || 0,
      });

      navigate("/dogs");
    } catch (err) {
      alert(err);
    }
  };

  if (!dogPicture || !dogInfo) return null;
  return (
    <div className={styles.detailPage} style={{ backgroundColor }}>
      <div className={styles.identity}>
        <h4 className={styles.identity_title}>{dogInfo.name}</h4>
        <img
          src={dogPicture.url}
          alt={dogPicture.name}
          className={styles.identity_image}
        />
        <span className={styles.identity_item}>
          Life span: {dogInfo.life_span}{" "}
        </span>
        <span className={styles.identity_item}>
          Temperament: {dogInfo.temperament}
        </span>
        <p>How cat friendly is this dog in your opinion?</p>
        <StarRating changeScore={(star) => setScore(star)} />
        <button className={styles.identity_button} onClick={handleFavorite}>
          Voeg toe aan favorieten
        </button>
      </div>
    </div>
  );
};

export default DogDetail;
