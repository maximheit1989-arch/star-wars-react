import {usePage} from "../context/PageContext.jsx";

const NavItem = ({itemTitle}) => {
    const {setPage} = usePage();

    return (
        <li
            onClick={() => setPage(itemTitle)}
            className="nav-item btn btn-danger mx-1 border-warning">
            {itemTitle}
        </li>
    );
};

export default NavItem;
