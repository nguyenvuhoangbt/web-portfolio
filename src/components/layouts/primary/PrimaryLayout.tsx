// States & Hooks
import NavigationContext from '@/src/state/navigation/NavigationContext';
import useTranslation from '@/src/hooks/useTranslation';

// Components
import Header from '@/src/components/navigation/Header';

// Libraries
import Head from 'next/head';
import { Raleway } from 'next/font/google';
import { useContext, useEffect } from 'react';

const font = Raleway({ weight: ['600', '700'], subsets: ['latin'] });

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
}) => {
  const lang = useTranslation();
  const { isShadowHeader, setIsShadowHeader } = useContext(NavigationContext);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      !isShadowHeader && setIsShadowHeader(true);
    }
    if (window.scrollY <= 0) {
      isShadowHeader && setIsShadowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>{`${lang.author.name} | Portfolio`}</title>
      </Head>
      <Header />
      <main id="main" w-flex="~ col" className={`${justify}`}>
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
