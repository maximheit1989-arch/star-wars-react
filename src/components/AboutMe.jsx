import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const AboutMe = () => {
    const [hero, setHero] = useState();
    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    height: data.height,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color
                }
                setHero(info);
            })
    }, [])

    return (
        hero && (
            <div className="text-[1.5rem] leading-relaxed text-justify ml-5 space-y-3">
                <p><span className="text-3xl font-bold text-main">Name:</span> {hero.name}</p>
                <p><span className="text-3xl font-bold text-main">Gender:</span> {hero.gender}</p>
                <p><span className="text-3xl font-bold text-main">Birth year:</span> {hero.birth_year}</p>
                <p><span className="text-3xl font-bold text-main">Height:</span> {hero.height}</p>
                <p><span className="text-3xl font-bold text-main">Mass:</span> {hero.mass}</p>
                <p><span className="text-3xl font-bold text-main">Hair color:</span> {hero.hair_color}</p>
                <p><span className="text-3xl font-bold text-main">Skin color:</span> {hero.skin_color}</p>
                <p><span className="text-3xl font-bold text-main ">Eye color:</span> {hero.eye_color}</p>
            </div>
        )
    );
};

export default AboutMe;