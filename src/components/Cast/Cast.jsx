import { useEffect, useState } from "react";
import {MovieDetailsApi, ImagesAPI} from "../Services/moviesAPI";
import {useParams} from 'react-router-dom';
import s from './Cast.module.css'
import no_user from 'components/img/no_user.jpg'

const Cast = () => {
    const {id} = useParams();
    const [cast, setCast] = useState([]);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const castDetails = async () => {
            try {
                if (id) {
                    const data = await MovieDetailsApi(id, '/credits');
                    setCast(data.cast);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        const getImage = async () => {
            try {
                const dataImg = await ImagesAPI();
                setImage(dataImg.images);
            } catch (error) {
                console.log(error.message);
            }
        };
        getImage();
        castDetails();
    }, [id]);

    if (!cast) {
        return null;
    }
    if (!image) {
        return null;
    }

    const { base_url } = image;
    return (
        <div className={s.container}>
            {cast && cast.length > 0 ? cast.map(({ character, name, profile_path, credit_id }) => (
                <div className={s.box} key={credit_id}>
                    {profile_path && profile_path !=null ?
                        <img className={s.img} src={`${base_url}/original${profile_path}`}
                        alt={name} />
                         : <img className={s.img} src={no_user}
                        alt={name}/>
                    }
                    <h2 className={s.name}>{name}</h2>
                    <p className={s.character}>{character}</p>
                </div>
            )) : <h2 className={s.name}>We dont have cast information for this movie</h2>}
        </div>
    );
};

export default Cast;