// States & Hooks
import NavigationContext from '@/src/state/navigation/NavigationContext';
import useTranslation from '@/src/hooks/useTranslation';

// Components
import Header from '@/src/components/navigation/Header';
import Footer from '@/src/components/navigation/Footer';
import MyButton from '@/src/components/button/MyButton';

// Libraries
import Head from 'next/head';
import { Raleway, Quicksand } from 'next/font/google';
import { useContext, useEffect } from 'react';
import Link from 'next/link';

// const font = Raleway({ weight: ['600', '700'], subsets: ['latin'] });
const font = Quicksand({ weight: ['500', '700'], subsets: ['latin'] });

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  items?: 'center' | 'start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  items = 'center',
}) => {
  const lang = useTranslation();
  const {
    isShadowHeader,
    setIsShadowHeader,
    isShowScrollUp,
    setIsShowScrollUp,
  } = useContext(NavigationContext);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      !isShadowHeader && setIsShadowHeader(true);
    }
    if (window.scrollY <= 0) {
      isShadowHeader && setIsShadowHeader(false);
    }
    if (window.scrollY > 350) {
      !isShowScrollUp && setIsShowScrollUp(true);
    }
    if (window.scrollY <= 350) {
      isShowScrollUp && setIsShowScrollUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  });

  const scrollUp = () => {
    window.scroll({ top: 0 });
  };

  return (
    <>
      <style jsx global>{`
        html,
        textarea {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>{`${lang.author.name} | Portfolio`}</title>
      </Head>
      <Header />
      <main id="main" w-flex="~ col" w-items={`${items}`} w-text="black">
        {children}
      </main>
      <Footer />

      <Link href="#">
        <MyButton
          className="w-8 h-8"
          icon="ArrowDropUp"
          iconSize="text-h2"
          w-pos={`fixed right-4 ${
            isShowScrollUp ? 'bottom-10' : '-bottom-1/2'
          }`}
          w-z="fixed"
          w-transition="duration-300 all ease-in-out"
          w-transform="~"
        />
      </Link>
    </>
  );
};

export default PrimaryLayout;
