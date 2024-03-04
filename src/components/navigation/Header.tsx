// Assets

// Icons
import CloseIcon from '@mui/icons-material/Close';

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

  const sectionList = [
    {
      href: '/#about',
      title: lang.aboutMeTitle,
    },
    {
      href: '/#services',
      title: lang.servicesTitle,
    },
    {
      href: '/#projects',
      title: lang.projectsTitle,
    },
    {
      href: '/#contact',
      title: lang.contactMeTitle,
    },
  ];

  return (
    <header
      {...headerProps}
      w-pos="fixed top-0 left-0"
      w-h="$header-height"
      w-w="full"
      w-min-w="375px"
      w-z="fixed"
      w-transition="shadow duration-1000"
      w-flex="~"
      w-items="center"
      w-shadow={isShadowHeader ? `sm neutral-300` : undefined}
    >
      <nav
        w-pos="relative"
        w-w="full"
        w-h="full"
        w-p="x-4"
        w-flex="~"
        w-justify="between"
        w-align="items-center"
        w-bg="white dark:black"
      >
        <Link
          href="/"
          w-flex="~"
          w-gap="2"
          w-align="items-center"
          w-font="bold"
          w-text="1.5rem"
        >
          {lang.authorName}
        </Link>

        <div w-flex="~" w-gap="8">
          <div
            className={
              isOpenMenu ? '<lg:translate-y-0' : '<lg:-translate-y-full'
            }
            w-pos="<lg:(fixed top-0 left-0)"
            w-z="<lg:fixed"
            w-bg="opacity-75 black dark:opacity-95 lg:transparent"
            w-p="y-6"
            w-w="<lg:full"
            w-h="full"
            w-text="center"
            w-backdrop="filter blur-6 lg:blur-0"
            w-transform="~"
            w-transition="<lg:duration-500"
          >
            <span
              w-w="max"
              w-pos="relative"
              w-text="xl $white-color"
              w-before="content-DEFAULT w-10 h-px bg-$text-color-light absolute top-1/2 -right-16"
              w-after="content-DEFAULT w-10 h-px bg-$text-color-light absolute top-1/2 -left-16"
              w-lg="hidden"
            >
              {lang.authorName}
            </span>

            <ul w-flex="~ col lg:row" w-gap="y-6" w-m="<lg:t-6">
              {sectionList.map(({ href, title }, i) => (
                <li
                  key={i}
                  w-flex="~"
                  w-m="x-auto"
                  w-w="max-content"
                  w-pos="relative"
                  w-after="content-DEFAULT w-0 h-2px bg-$white-color absolute left-4 bottom-2 transition-width duration-500 hover:(w-1/4) lg:bg-black dark:lg:bg-white"
                >
                  <Link
                    href={href}
                    w-text="white lg:black dark:white <lg:1.5rem"
                    w-font="bold"
                    w-p="4"
                    onClick={() => setIsOpenMenu(false)}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <IconButton
              className="top-14px right-14px"
              aria-label="delete"
              onClick={() => {
                setIsOpenMenu(false);
              }}
              w-pos="absolute"
              w-text="$white-color"
              w-cursor="pointer"
              w-lg="hidden"
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div w-flex="~" w-align="items-center" w-gap="4">
            <DarkModeToggle></DarkModeToggle>
            <ButtonSwitchLanguage></ButtonSwitchLanguage>
            <ButtonMenu></ButtonMenu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
