import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      // className={`w-full flex flex-row justify-between ${className}`}
      className={`fixed w-full top-0 left-0 bg-[var(--body-color)] z-[var(--z-fixed)] transition-shadow duration-400`}
    >
      <nav className="">
        <Link href="/">
          <h3>Hector Nguyen</h3>
        </Link>

        <div>
          <ul>
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                About me
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact me
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <CloseIcon></CloseIcon>
        </div>

        <div>
          <DensityMediumIcon></DensityMediumIcon>
        </div>
      </nav>
    </header>
  );
};

export default Header;
