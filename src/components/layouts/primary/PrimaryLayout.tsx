// States & Hooks
import NavigationContext from '@/src/state/navigation/NavigationContext';
import useMetaTag from '@/src/hooks/useMetaTag';

// Components
import Header from '@/src/components/navigation/Header';
import Footer from '@/src/components/navigation/Footer';
import MyButton from '@/src/components/button/MyButton';

// Libraries
import Link from 'next/link';
import { Quicksand } from 'next/font/google';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export const fontQuicksand = Quicksand({
  weight: ['500', '700'],
  subsets: ['latin'],
});

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  items?: 'center' | 'start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  items = 'center',
}) => {
  useContext(NavigationContext);
  const {
    isOpenMenu,
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

  const getMetaTag = useMetaTag();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  });

  const router = useRouter();

  return (
    <>
      <style jsx global>
        {`
          * {
            ${router.locale === 'zh'
              ? 'letter-spacing: 1px; font-family: cursive;'
              : `font-family: ${fontQuicksand.style.fontFamily}`}
          }
          a,
          p {
            ${router.locale === 'zh' ? 'font-size: 20px' : ''}
          }
        `}
      </style>
      {getMetaTag}
      <Header />
      <main
        className={`${
          isOpenMenu ? '<lg:overflow-hidden !scrollbar-hide' : '!scrollbar-hide'
        }`}
        id="main"
        w-flex="~ col"
        w-h="screen"
        w-items={`${items}`}
        w-bg="dark:black"
        w-overflow="auto"
        w-text="black dark:white"
      >
        {children}
        <Footer />
      </main>

      {isOpenMenu ? null : (
        <Link
          href="#"
          className={`${isShowScrollUp ? '' : 'translate-y-100'}`}
          w-pos="fixed right-4 bottom-10"
          w-transform="~"
          w-transition="~ duration-500"
          w-z="fixed"
        >
          <MyButton
            className="w-8 h-8"
            icon="ArrowDropUp"
            iconClassName="text-h2"
          />
        </Link>
      )}
    </>
  );
};

export default PrimaryLayout;
