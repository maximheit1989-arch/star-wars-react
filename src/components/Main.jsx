import Home from "./Home.jsx";
import StarWars from "./StarWars.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import {navItems} from "../utils/constants.js";
import {PageContext, usePage} from "../context/PageContext.jsx";

const Main = () => {
    const {page} = usePage();

    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }
};

export default Main;