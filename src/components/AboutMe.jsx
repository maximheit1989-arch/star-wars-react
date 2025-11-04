import { useState, useEffect } from "react";
import { base_url } from "../utils/constants.js";

const AboutMe = () => {
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => {
                setHero(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Ошибка при загрузке данных:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!hero) {
        return <div>Не удалось загрузить данные.</div>;
    }

    return (
        <div className="fs-3 lh-lg far-galaxy">
            <h2 className="text-center mb-4">{hero.name}</h2>
            <p><strong>Height:</strong> {hero.height} cm</p>
            <p><strong>Mass:</strong> {hero.mass} kg</p>
            <p><strong>Gender:</strong> {hero.gender}</p>
            <p><strong>Birth year:</strong> {hero.birth_year}</p>
            <p><strong>Eye Color:</strong> {hero.eye_color}</p>
        </div>
    );
};

export default AboutMe;
