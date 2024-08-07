// States & Hooks
import NavigationContext from '@/src/state/navigation/NavigationContext';
import useTranslation from '@/src/hooks/useTranslation';

// Components
import Header from '@/src/components/navigation/Header';
import Footer from '@/src/components/navigation/Footer';
import MyButton from '@/src/components/button/MyButton';

// Libraries
import Head from 'next/head';
import { Quicksand } from 'next/font/google';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

// Assets
import OpenGraphImage from '@/public/opengraph-image.jpg';

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
  const lang = useTranslation();
  const {
    isOpenMenu,
    isShadowHeader,
    setIsShadowHeader,
    isShowScrollUp,
    setIsShowScrollUp,
  } = useContext(NavigationContext);

  const handleScroll = (event: Event) => {
    const { target } = event;
    const currentPositionTop = (target as HTMLElement)?.scrollTop;

    if (currentPositionTop > 0) {
      !isShadowHeader && setIsShadowHeader(true);
    }
    if (currentPositionTop <= 0) {
      isShadowHeader && setIsShadowHeader(false);
    }
    if (currentPositionTop > 350) {
      !isShowScrollUp && setIsShowScrollUp(true);
    }
    if (currentPositionTop <= 350) {
      isShowScrollUp && setIsShowScrollUp(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  });

  const router = useRouter();

  const title = `${lang.authorName} | ${lang.frontendDeveloper} | ${lang.portfolio}`;
  const url = 'https://web-portfolio-lake-eight.vercel.app/';
  const description =
    'Explore my website portfolio, featuring modern designs and user-friendly interfaces. See how I blend creativity and functionality for memorable online experiences.';

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
      <Head>
        <meta charSet="utf-8" />
        <title>{`${lang.authorName} | ${lang.frontendDeveloper} | ${lang.portfolio}`}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OpenGraphImage.src} />
      </Head>
      <Header />
      <main
        id="main"
        w-flex="~ col"
        w-h="max"
        w-items={`${items}`}
        w-bg="dark:black"
        w-text="black dark:white"
        w-overflow="hidden"
      >
        {children}
        <Footer />
      </main>

      {isOpenMenu ? null : (
        <MyButton
          className={`${
            isShowScrollUp ? 'w-8 h-8' : 'translate-y-100 w-8 h-8'
          }`}
          w-pos="fixed right-4 bottom-10"
          w-transform="~"
          w-transition="~ duration-500"
          w-z="fixed"
          icon="ArrowDropUp"
          iconClassName="text-h2"
          onClick={() => document.body.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        />
      )}
    </>
  );
};

export default PrimaryLayout;
