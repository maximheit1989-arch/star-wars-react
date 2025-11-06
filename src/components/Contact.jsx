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
                    let planetsList = Array.isArray(data) ? data : data.content || [];
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
        <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
            <div className="max-w-xl w-full mx-4">
                <h2 className="text-center mb-2 text-3xl font-bold text-main">Contact Form</h2>
                <form
                    onSubmit={handleSubmit}
                    className="border border-main p-6 rounded-2xl bg-gray/60 shadow-lg">

                    <div className="mb-5">
                        <label className="block mb-2 text-main">First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 rounded-md bg-transparent border border-main text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-main">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 rounded-md bg-transparent border border-main text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-main">Planet:</label>
                        <select
                            name="planet"
                            value={formData.planet}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 rounded-md bg-transparent border border-main text-white focus:outline-none focus:ring-2 focus:ring-main"
                        >
                            <option value="">Select a planet</option>
                            {Array.isArray(planets) && planets.length > 0 ? (
                                planets.map((planet) => (
                                    <option
                                        key={planet.id}
                                        value={planet.name}
                                        className="bg-gray text-white">
                                        {planet.name}
                                    </option>
                                ))
                            ) : (
                                <option disabled>Loading planets...</option>
                            )}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-3 bg-red border border-main rounded-md text-white hover:bg-red-600 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
