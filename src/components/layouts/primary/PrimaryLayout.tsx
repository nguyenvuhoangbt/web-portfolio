// States & Hooks
import NavigationContext from '@/src/state/navigation/NavigationContext';
import useTranslation from '@/src/hooks/useTranslation';

// Components
import Header from '@/src/components/navigation/Header';
import Footer from '@/src/components/navigation/Footer';
import MyButton from '@/src/components/button/MyButton';

// Libraries
import Head from 'next/head';
import Link from 'next/link';
import { Quicksand } from 'next/font/google';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

const fontQuicksand = Quicksand({ weight: ['500', '700'], subsets: ['latin'] });

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

  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        html,
        textarea {
          font-family: ${router.locale === 'zh'
            ? 'cursive'
            : fontQuicksand.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>{`${lang.author.name} | Portfolio`}</title>
      </Head>
      <Header />
      <main
        className="!scrollbar-hide"
        id="main"
        w-flex="~ col"
        w-items={`${items}`}
        w-text="black dark:white"
        w-bg="dark:black"
      >
        {children}
      </main>
      <Footer />

      <Link
        href="#"
        className={`${isShowScrollUp ? '' : 'translate-y-100'}`}
        w-pos="fixed right-4 bottom-10"
        w-transform="~"
        w-transition="~ duration-500"
        w-z="fixed"
      >
        <MyButton className="w-8 h-8" icon="ArrowDropUp" iconSize="text-h2" />
      </Link>
    </>
  );
};

export default PrimaryLayout;
