import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContextProvider';

interface HeaderProps {
    headTitle: string;
}
export const Header = ({ headTitle }: HeaderProps) => {
    const { favourites } = useGlobalContext();

    return (
        <>
            <nav className='nav'>
                <NavLink
                    to="/"
                    className='nav__item--home'
                >
                </NavLink>
                <NavLink
                    to="/favourites"
                    className='nav__item--fav'
                >
                    {favourites.length > 0 &&
                        <span className='nav__item--fav-num'>{favourites.length}</span>
                    }
                </NavLink>
            </nav>
            <div className="header">
                <h1 className='page-container'>{headTitle}</h1>
            </div>
            <div className="arrow"></div>
        </>
    );
};
