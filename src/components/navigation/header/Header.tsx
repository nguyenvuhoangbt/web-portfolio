import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`${className} fixed w-full p-4 top-0 left-0 bg-[var(--body-color)] z-[var(--z-fixed)] transition-shadow duration-400`}
    >
      <nav className="relative h-[var(--header-height)] flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 items-center font-[var(--font-semi-bold)] text-[var(--title-color)]"
        >
          <span className="w-8 h-8 bg-[var(--black-color)] text-[var(--white-color)] grid place-items-center rounded-full">
            H
          </span>
          <span className="nav__logo-name">Hector Nguyen</span>
        </Link>

        <div
          className="fixed top-0 left-0 bg-black bg-opacity-75 pt-7 pb-20 w-full text-center backdrop-blur transition-top duration-400"
          id="nav-menu"
        >
          <span className="text-[var(--white-color)] block text-[length:var(--smaller-font-size)] font-[var(--font-semi-bold)] mb-14">
            Menu
          </span>

          <h3 className="text-[var(--white-color)] relative w-max mx-auto mt-0 mb-12 text-[length:var(--h2-font-size)]">
            Hoang
          </h3>

          <ul className="nav__list">
            <li className="nav__item">
              <Link href="/" className="nav__link hover:underline">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/" className="nav__link hover:underline">
                About me
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/" className="nav__link hover:underline">
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/" className="nav__link hover:underline">
                Contact me
              </Link>
            </li>
          </ul>

          <div className="nav__close text-[var(--white-color)]" id="nav-close">
            <CloseIcon></CloseIcon>
          </div>
        </div>

        <div className="nav__buttons">
          <div
            className="w-8 h-8 bg-[var(--black-color)] text-[var(--white-color)] grid place-items-center"
            id="nav-toggle"
          >
            <DensityMediumIcon></DensityMediumIcon>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
