// Assets

// Icons
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';

// States & Hooks
import NavigationContext from '@/src/state/navigation/NavigationContext';
import useTranslation from '@/src/hooks/useTranslation';

// Components
import ButtonMenu from '@/src/components/button/Menu';
import ButtonSwitchLanguage from '@/src/components/button/SwitchLanguage';
import DarkModeToggle from '@/src/components/button/DarkModeToggle';

// Libraries
import Link from 'next/link';
import { useContext } from 'react';
import { IconButton } from '@mui/material';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const { isOpenMenu, setIsOpenMenu, isShadowHeader } =
    useContext(NavigationContext);
  const lang = useTranslation();

  return (
    <header
      {...headerProps}
      w-pos="fixed top-0 left-0"
      w-w="full"
      w-p="4"
      w-z="fixed"
      w-transition="shadow duration-300"
      w-bg="white dark:black"
      w-shadow={isShadowHeader ? `sm neutral-300` : undefined}
    >
      <nav
        w-pos="relative"
        w-flex="~"
        w-justify="between"
        w-align="items-center"
        w-h="$header-height"
      >
        <Link
          href="/"
          w-flex="~"
          w-gap="2"
          w-align="items-center"
          w-font="bold"
        >
          <span w-text="normal black sm:h3 dark:white">{lang.author.name}</span>
        </Link>

        <div
          className={isOpenMenu ? 'top-0' : '-top-full'}
          id="nav-menu"
          w-pos="fixed left-0"
          w-z="fixed"
          w-bg="opacity-75 black dark:opacity-95"
          w-p="t-7 b-20"
          w-w="full"
          w-text="center"
          w-backdrop="filter blur-2"
          w-transition="duration-500"
        >
          <span w-text="$white-color" w-display="block" w-font="bold" w-m="b-8">
            Menu
          </span>

          <span
            w-w="max"
            w-pos="relative"
            w-text="xl $white-color"
            w-before="content-DEFAULT w-10 h-px bg-$text-color-light absolute top-1/2 -right-16"
            w-after="content-DEFAULT w-10 h-px bg-$text-color-light absolute top-1/2 -left-16"
          >
            Hector
          </span>

          <ul w-flex="~ col" w-gap="y-2" w-m="t-8">
            <li
              w-flex="~"
              w-m="x-auto"
              w-w="max-content"
              w-pos="relative"
              w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-4 bottom-2 transition-width duration-500 hover:(w-1/4)"
            >
              <Link
                href="/#"
                w-text="$text-color-light"
                w-font="bold"
                w-p="4"
                w-transition="colors duration-500"
                w-hover="text-$white-color"
                onClick={() => setIsOpenMenu(false)}
              >
                Home
              </Link>
            </li>
            <li
              w-flex="~"
              w-m="x-auto"
              w-w="max-content"
              w-pos="relative"
              w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-4 bottom-2 transition-width duration-500 hover:(w-1/4)"
            >
              <Link
                href="/#about"
                w-text="$text-color-light"
                w-font="bold"
                w-p="4"
                w-transition="colors duration-500"
                w-hover="text-$white-color"
                onClick={() => setIsOpenMenu(false)}
              >
                About me
              </Link>
            </li>
            <li
              w-flex="~"
              w-m="x-auto"
              w-w="max-content"
              w-pos="relative"
              w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-4 bottom-2 transition-width duration-500 hover:(w-1/4)"
            >
              <Link
                href="/#services"
                w-text="$text-color-light"
                w-font="bold"
                w-p="4"
                w-transition="colors duration-500"
                w-hover="text-$white-color"
                onClick={() => setIsOpenMenu(false)}
              >
                Services
              </Link>
            </li>
            <li
              w-flex="~"
              w-m="x-auto"
              w-w="max-content"
              w-pos="relative"
              w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-4 bottom-2 transition-width duration-500 hover:(w-1/4)"
            >
              <Link
                href="/#projects"
                w-text="$text-color-light"
                w-font="bold"
                w-p="4"
                w-transition="colors duration-500"
                w-hover="text-$white-color"
                onClick={() => setIsOpenMenu(false)}
              >
                Projects
              </Link>
            </li>
            <li
              w-flex="~"
              w-m="x-auto"
              w-w="max-content"
              w-pos="relative"
              w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-4 bottom-2 transition-width duration-500 hover:(w-1/4)"
            >
              <Link
                href="/#contact"
                w-text="$text-color-light"
                w-font="bold"
                w-p="4"
                w-transition="colors duration-500"
                w-hover="text-$white-color"
                onClick={() => setIsOpenMenu(false)}
              >
                Contact me
              </Link>
            </li>
          </ul>

          <IconButton
            className="top-6 right-3"
            aria-label="delete"
            onClick={() => {
              setIsOpenMenu(false);
            }}
            w-pos="absolute"
            w-text="$white-color"
            w-cursor="pointer"
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div w-flex="~" w-align="items-center" w-gap="4">
          <DarkModeToggle></DarkModeToggle>
          <ButtonSwitchLanguage></ButtonSwitchLanguage>
          <ButtonMenu></ButtonMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
