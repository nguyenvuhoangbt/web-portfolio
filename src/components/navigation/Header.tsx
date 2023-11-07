import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import ButtonMenu from '@/src/components/button/Menu';
import ButtonSwitchLanguage from '@/src/components/button/SwitchLanguage';
import NavigationContext from '@/src/state/navigation/NavigationContext';
import { useContext } from 'react';
import useTranslation from '@/src/hooks/useTranslation';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const { isOpenMenu, setIsOpenMenu } = useContext(NavigationContext);
  const lang = useTranslation();

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
          <span w-display="hidden sm:block">{lang.author.name}</span>
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
            w-w="max"
            w-pos="relative"
            w-text="xl $white-color"
            w-m="x-auto t-0 b-12"
            w-before="content-DEFAULT w-10 h-px bg-[var(--text-color-light)] absolute top-1/2 -right-16"
            w-after="content-DEFAULT w-10 h-px bg-[var(--text-color-light)] absolute top-1/2 -left-16"
          >
            Hector
          </h3>

          <ul className="flex flex-col gap-y-10">
            <li>
              <Link
                href="/"
                className={`relative text-[var(--text-color-light)] text-lg font-semibold transition-color duration-300 hover:text-[var(--white-color)]`}
                w-after="content-DEFAULT w-0 h-2px bg-[var(--white-color)] absolute left-0 -bottom-2 transition-width duration-300 hover:(w-1/4)"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`relative text-[var(--text-color-light)] text-lg font-semibold transition-color duration-300 hover:text-[var(--white-color)]`}
                w-after="content-DEFAULT w-0 h-2px bg-[var(--white-color)] absolute left-0 -bottom-2 transition-width duration-300 hover:(w-1/4)"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`relative text-[var(--text-color-light)] text-lg font-semibold transition-color duration-300 hover:text-[var(--white-color)]`}
                w-after="content-DEFAULT w-0 h-2px bg-[var(--white-color)] absolute left-0 -bottom-2 transition-width duration-300 hover:(w-1/4)"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`relative text-[var(--text-color-light)] text-lg font-semibold transition-color duration-300 hover:text-[var(--white-color)]`}
                w-after="content-DEFAULT w-0 h-2px bg-[var(--white-color)] absolute left-0 -bottom-2 transition-width duration-300 hover:(w-1/4)"
              >
                Contact me
              </Link>
            </li>
          </ul>

          <div
            className="text-[var(--white-color)] absolute text-2xl top-6 right-8 cursor-pointer"
            id="nav-close"
            onClick={() => {
              setIsOpenMenu(false);
            }}
          >
            <CloseIcon></CloseIcon>
          </div>
        </div>

        <div w-flex="~" w-gap="4">
          <ButtonSwitchLanguage></ButtonSwitchLanguage>
          <ButtonMenu></ButtonMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
