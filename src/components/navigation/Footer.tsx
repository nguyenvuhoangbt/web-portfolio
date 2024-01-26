// Libraries
import Link from 'next/link';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps} w-bg="black">
      <div w-p="x-6 y-10" w-grid="~" w-gap="y-10">
        <ul w-flex="~" w-justify="center" w-gap="x-10">
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

        <span w-text="$text-color-light small center">
          &#169; All Rights Reserved by{' '}
          <Link href="/" w-text="white" w-font="bold">
            Hector Nguyen.
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
