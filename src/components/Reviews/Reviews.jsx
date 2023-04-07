import { useEffect, useState } from "react";
import {MovieDetailsApi} from "../Services/moviesAPI";
import {useParams} from 'react-router-dom';
import s from './Reviews.module.css'

const Reviews = () => {
    const {id} = useParams();
    const [review, setReview] = useState([]);

    useEffect(() => {
        const reviewsDetails = async () => {
            try {
                if (id) {
                    const data = await MovieDetailsApi(id,'/reviews');
                    setReview(data.results);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        reviewsDetails();
    },[id]);
    return (
        <ul className={s.list}>
            {review && review.length > 0 ? review.map(({ author, content, id}) => (
                <li className={s.item} key={id}>
                    <h2 className={s.author}>Author: {author}</h2>
                    <p className={s.content}>{content}</p>
                </li>
            )) : <h2 className={s.author}>We dont have any reviews for this movie</h2>}
        </ul>
    );
};

export default Reviews;