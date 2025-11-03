import hero from "../../assets/main.jpg";

const HeroSection = () => {
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={hero} alt="Luke Skywalker"/>
        </section>
    );
};

export default HeroSection;