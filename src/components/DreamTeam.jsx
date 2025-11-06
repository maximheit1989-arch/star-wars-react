import {friends} from "../utils/constants.js";
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-right w-1/2 grid grid-cols-3 gap-1 border rounded-b-3xl mt-1 ml-1">
            <h1 className="text-center col-span-3 text-2xl">Dream team</h1>
            {friends.map((friend, index) => <Friend picture={friend} pos={index + 1} key={index}/>)}
        </section>
    );
};

export default DreamTeam;