import hero from "../assets/main.jpg";
import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import friend4 from "../assets/friend4.jpg";
import friend5 from "../assets/friend5.jpg";
import friend6 from "../assets/friend6.jpg";
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";
import friend9 from "../assets/friend9.jpg";

const Main = () => {
    return (
        <main className="clearfix">
            <section className="float-start w-25 me-3">
                <img className="w-100" src={hero} alt="Luke Skywalker"/>
            </section>
            <section className="float-end w-50 row border border-warning rounded-bottom-5 ms-2 me-0">
                <h2 className="text-center">Dream team</h2>
                <img className="col-sm-4 p-1" src={friend1} alt="Friend"/>
                <img className="col-sm-4 p-1" src={friend2} alt="Friend"/>
                <img className="col-sm-4 p-1" src={friend3} alt="Friend"/>
                <img className="col-sm-4 p-1" src={friend4} alt="Friend"/>
                <img className="col-sm-4 p-1" src={friend5} alt="Friend"/>
                <img className="col-sm-4 p-1" src={friend6} alt="Friend"/>
                <img className="col-sm-4 p-1 rounded-bottom-left" src={friend7} alt="Friend"/>
                <img className="col-sm-4 p-1" src={friend8} alt="Friend"/>
                <img className="col-sm-4 p-1 rounded-bottom-right" src={friend9} alt="Friend"/>
            </section>
            <p className="far-galaxy fs-2 lh-2">It is a period of civil war.
                Rebel spaceships, striking
                from a hidden base, have won
                their first victory against
                the evil Galactic Empire.

                During the battle, Rebel
                spies managed to steal secret
                plans to the Empire's
                ultimate weapon, the DEATH
                STAR, an armored space
                station with enough power
                to destroy an entire planet.

                Pursued by the Empire's
                sinister agents, Princess
                Leia races home aboard her
                starship, custodian of the
                stolen plans that can save her
                people and restore
                freedom to the galaxy...</p>
        </main>
    );
};

export default Main;