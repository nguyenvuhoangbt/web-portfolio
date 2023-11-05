import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';
import MenuButton from '@/src/components/button/navigation/MenuButton';
import NavigationContext from '@/src/state/navigation/NavigationContext';
import { Dispatch, SetStateAction } from 'react';
import { useContext } from 'react';

interface CloseMenuButtonProps {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

function CloseMenuButton({ toggleMenu }: CloseMenuButtonProps) {
  return (
    <div
      className="nav__close text-[var(--white-color)] absolute text-2xl top-6 right-8 cursor-pointer"
      id="nav-close"
      onClick={() => {
        toggleMenu(false);
      }}
    >
      <CloseIcon></CloseIcon>
    </div>
  );
}

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const { isOpenMenu, setIsOpenMenu } = useContext(NavigationContext);

  return (
    <header
      {...headerProps}
      className={`fixed w-full p-4 top-0 left-0 bg-[var(--body-color)] z-fixed transition-shadow duration-400`}
    >
      <nav className="relative h-[var(--header-height)] flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 items-center font-semibold text-[var(--title-color)]"
        >
          <span className="w-8 h-8 bg-[var(--black-color)] text-[var(--white-color)] grid place-items-center rounded-full">
            H
          </span>
          <span className="nav__logo-name">Hector Nguyen</span>
        </Link>

        <div
          className={`fixed z-fixed left-0 bg-black bg-opacity-75 pt-7 pb-20 w-full text-center backdrop-filter backdrop-blur-2 transition-top duration-400 ${
            isOpenMenu ? 'top-0' : '-top-full'
          }`}
          id="nav-menu"
        >
          <span className="text-[var(--white-color)] block text-xs font-semibold mb-14">
            Menu
          </span>

          <h3
            className={`${styles.nav__name} text-[var(--white-color)] relative w-max mx-auto mt-0 mb-12 text-xl`}
          >
            Hector
          </h3>

          <ul className="flex flex-col gap-y-10">
            <li className="nav__item">
              <Link
                href="/"
                className={`${styles.nav__link} relative text-[var(--text-color-light)] text-lg font-semibold transition-color duration-300 hover:text-[var(--white-color)]`}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/"
                className={`${styles.nav__link} relative text-[var(--text-color-light)] text-lg font-semibold transition-color duration-300 hover:text-[var(--white-color)]`}
              >
                About me
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/"
                className={`${styles.nav__link} relative text-[var(--text-color-light)] text-lg font-semibold transition-color duration-300 hover:text-[var(--white-color)]`}
              >
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="/"
                className={`${styles.nav__link} relative text-[var(--text-color-light)] text-lg font-semibold transition-color duration-300 hover:text-[var(--white-color)]`}
              >
                Contact me
              </Link>
            </li>
          </ul>

          <CloseMenuButton toggleMenu={() => setIsOpenMenu(false)} />
        </div>

        <MenuButton />
      </nav>
    </header>
  );
};

export default Header;
