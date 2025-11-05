import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        planet: "",
    });

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("PlanetData"));

        if (storedData && (Date.now() - storedData.timestamp < period_month)) {
            setPlanets(storedData.planets);
        } else {
            fetch(`${base_url}/v1/planets`)
                .then(res => res.json())
                .then(data => {
                    console.log("Planets API response:", data);

                    let planetsList = [];
                    if (Array.isArray(data)) {
                        planetsList = data;
                    } else if (data.content) {
                        planetsList = data.content;
                    }

                    setPlanets(planetsList);
                    localStorage.setItem("PlanetData", JSON.stringify({
                        planets: planetsList,
                        timestamp: Date.now()
                    }));
                })
                .catch(err => {
                    console.error("Error fetching planets:", err);
                    setPlanets([]);
                });
        }
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted:\nFirst Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nPlanet: ${formData.planet}`);
    };

    return (
        <div className="container mt-5 fs-3">
            <h2 className="text-center mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded-4 bg-dark bg-opacity-50">

                <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Planet:</label>
                    <select
                        name="planet"
                        value={formData.planet}
                        onChange={handleChange}
                        className="form-select"
                        required
                    >
                        <option value="">Select a planet</option>
                        {Array.isArray(planets) && planets.length > 0 ? (
                            planets.map((planet) => (
                                <option key={planet.id} value={planet.name}>
                                    {planet.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>Loading planets...</option>
                        )}
                    </select>
                </div>

                <button type="submit" className="btn btn-danger border-warning">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
