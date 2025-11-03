import Hero from "./Main/HeroSection.jsx";
import Friends from "./Main/DreamTeam.jsx";
import Story from "./Main/Storytext.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <Hero />
            <Friends />
            <Story />
        </main>
    );
};

export default Main;
