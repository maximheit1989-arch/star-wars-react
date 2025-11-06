import {usePage} from "../context/PageContext.jsx";
import Button from "../ui/Button.jsx";

const NavItem = ({itemTitle}) => {
    const {setPage} = usePage();

    return (
        <Button callback={()=> setPage(itemTitle)}>{itemTitle}</Button>
    );
};

export default NavItem;