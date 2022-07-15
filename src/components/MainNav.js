import {Link} from 'react-router-dom';

const NavLink = ({page}) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);

    return (
        <Link to={`/${page}`}>{title}</Link>
    );
};

const MainNav = () => {
    return (
        <div className='mainNav'>
            <NavLink page='home'/>
            <NavLink page='testing'/>
            <NavLink page='postdetail'/>
            <NavLink page='postlist'/>
        </div>
    );
}

export default MainNav;