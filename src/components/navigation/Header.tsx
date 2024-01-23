// Assets
import Favicon32 from '@/assets/favicon/favicon-32x32.png';

// Icons
import CloseIcon from '@mui/icons-material/Close';

// States & Hooks
import NavigationContext from '@/src/state/navigation/NavigationContext';
import useTranslation from '@/src/hooks/useTranslation';

// Components
import ButtonMenu from '@/src/components/button/Menu';
import ButtonSwitchLanguage from '@/src/components/button/SwitchLanguage';

// Libraries
import Link from 'next/link';
import Image from 'next/image';
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
      w-transition="shadow duration-500"
      w-bg="body"
      w-shadow={isShadowHeader ? `md gray-300` : undefined}
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
          w-font="semibold"
          w-text="$title-color"
        >
          <Image src={Favicon32} alt="Favicon" />
          <span w-display="hidden sm:block">{lang.author.name}</span>
        </Link>

        <div
          className={isOpenMenu ? 'top-0' : '-top-full'}
          id="nav-menu"
          w-pos="fixed left-0"
          w-z="fixed"
          w-bg="black opacity-75"
          w-p="t-7 b-20"
          w-w="full"
          w-text="center"
          w-backdrop="filter blur-2"
          w-transition="duration-500"
        >
          <span
            w-text="$white-color"
            w-display="block"
            w-font="semibold"
            w-m="b-8"
          >
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

          <ul w-flex="~ col" w-gap="y-10" w-m="t-8">
            <li>
              <Link
                href="/"
                w-pos="relative"
                w-text="$text-color-light"
                w-font="semibold"
                w-transition="colors duration-500"
                w-hover="text-$white-color"
                w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-0 -bottom-2 transition-width duration-500 hover:(w-1/4)"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                w-pos="relative"
                w-text="$text-color-light"
                w-font="semibold"
                w-transition="colors duration-500"
                w-hover="text-$white-color"
                w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-0 -bottom-2 transition-width duration-500 hover:(w-1/4)"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/"
                w-pos="relative"
                w-text="$text-color-light"
                w-font="semibold"
                w-transition="colors duration-500"
                w-hover="text-$white-color"
                w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-0 -bottom-2 transition-width duration-500 hover:(w-1/4)"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/"
                w-pos="relative"
                w-text="$text-color-light"
                w-font="semibold"
                w-transition="colors duration-500"
                w-hover="text-$white-color"
                w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-0 -bottom-2 transition-width duration-500 hover:(w-1/4)"
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

        <div w-flex="~" w-gap="4">
          <ButtonSwitchLanguage></ButtonSwitchLanguage>
          <ButtonMenu></ButtonMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
