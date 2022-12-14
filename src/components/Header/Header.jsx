import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MediaQuery } from 'hooks/useMediaQuery';
import { IoIosMenu } from 'react-icons/io';
import s from '../Header/header.module.scss';
import authSelectors from 'redux/auth/selector.auth';
import Logo from 'components/Logo';
import MobileMenu from 'components/MobileMenu';
import GuestNav from 'components/GuestNav';
import Container from 'components/Container';
import LoggedNav from 'components/LoggedNav';
import NavList from 'components/NavList';
import ScoreBox from 'components/ScoreBox';
import ChangeLanguage from 'components/ChangeLanguage';

const Header = () => {
    const [modalIsopen, setModalIsOpen] = useState(false);
    const token = useSelector(authSelectors.getToken);
    const isDesktopScreen = useMediaQuery({ query: '(min-width: 1280px)' });
    const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });


    const handleCloseModal = () => {
        if (isDesktopScreen) {
            return;
        }
        setModalIsOpen(false);
    };

    return (
        <header className={s.header}>
            <Container>
                <div className={s.container}>
                    <Logo />
                    {token && <ScoreBox />}
                    {!token && isTabletScreen && <div className={s.languageWrapper}><ChangeLanguage /></div>}
                    {token &&
                    <MediaQuery.Desktop>
                         <NavList />
                    </MediaQuery.Desktop>}
                    {token ? (
                        <>
                            <button
                                type="button"
                                onClick={() => setModalIsOpen(true)}
                                className={s.button}
                            >
                                <IoIosMenu className={s.iconMenu} size={22} />
                            </button>{' '}
                            <div className={s.loggedWrapper}>
                                <LoggedNav />
                            </div>
                        </>
                    ) : (
                        <GuestNav />
                    )}
                </div>
                {modalIsopen && <MobileMenu closeModal={handleCloseModal} />}
            </Container>
        </header>
    );
};

export default Header;
