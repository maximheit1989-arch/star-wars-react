const Text = ({children}) => {
    return (
        <div>
            <p className="text-[2rem] text-justify tracking-[0.1em] leading-[1.5]">{children}</p>
        </div>
    );
};

export default Text;