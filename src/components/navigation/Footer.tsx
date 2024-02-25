// Libraries
import Link from 'next/link';

// States & Hooks
import useTranslation from '@/src/hooks/useTranslation';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  const lang = useTranslation();

  return (
    <footer {...footerProps} w-bg="black">
      <div
        w-p="x-6 y-10 lg:x-20 y-15"
        w-grid="~ lg:cols-2"
        w-gap="y-10"
        w-w-justify="lg:between"
      >
        <ul w-flex="~" w-justify="center lg:start" w-gap="x-10">
          <li>
            <Link
              href="#about"
              w-text="white"
              w-transition="duration-300"
              w-hover="text-$text-color-light"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              w-text="white"
              w-transition="duration-300"
              w-hover="text-$text-color-light"
            >
              Sevices
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              w-text="white"
              w-transition="duration-300"
              w-hover="text-$text-color-light"
            >
              Projects
            </Link>
          </li>
        </ul>

        <span w-text="$text-color-light small center lg:right">
          &#169; All Rights Reserved by{' '}
          <Link href="/" w-text="white" w-font="bold">
            {lang.author.name}
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
