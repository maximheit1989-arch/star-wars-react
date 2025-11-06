import Button from "../ui/Button.jsx";

const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl h-20 bg-gray grid grid-cols-8 items-center">
            <Button className={'col-start-2'}>Send me email</Button>
        </footer>
    );
};

export default Footer;