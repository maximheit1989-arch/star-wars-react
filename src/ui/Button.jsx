const Button = ({children, callback, className}) => {
    return (
        <div
            onClick={callback ?? (() => {})}
            className={`text-center bg-red border-main border-1 px-3 rounded-md cursor-pointer hover:bg-red-500 hover:text-white ${className ?? ''}`}
        >
            {children}
        </div>
    );
};

export default Button;