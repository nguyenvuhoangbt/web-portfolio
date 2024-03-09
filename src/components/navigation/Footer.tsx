// Libraries
import Link from 'next/link';

// States & Hooks
import useTranslation from '@/src/hooks/useTranslation';

// Consts
import { fontQuicksand } from '@/src/components/layouts/primary/PrimaryLayout';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ ...footerProps }) => {
  const lang = useTranslation();

  return (
    <footer {...footerProps} w-bg="black" w-w="full">
      <div
        w-p="x-6 y-10 lg:x-20 y-15"
        w-grid="~ lg:cols-2"
        w-gap="y-10"
        w-justify="lg:between"
        w-border="t-1 solid"
      >
        <ul w-flex="~" w-justify="center lg:start" w-gap="x-10">
          <li>
            <Link
              href="#about"
              w-text="white"
              w-transition="duration-300 colors"
              w-hover="text-$text-color-light"
            >
              {lang.aboutMeTitle}
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              w-text="white"
              w-transition="duration-300 colors"
              w-hover="text-$text-color-light"
            >
              {lang.servicesTitle}
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              w-text="white"
              w-transition="duration-300 colors"
              w-hover="text-$text-color-light"
            >
              {lang.projectsTitle}
            </Link>
          </li>
        </ul>

        <span
          w-text="$text-color-light small center lg:right"
          style={{
            fontFamily: fontQuicksand.style.fontFamily,
            letterSpacing: 0,
          }}
        >
          &#169; All Rights Reserved by{' '}
          <Link href="/" w-text="white" w-font="bold">
            {lang.authorName}
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
