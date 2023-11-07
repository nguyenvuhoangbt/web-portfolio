import Head from 'next/head';
import Header from '@/src/components/navigation/Header';
import useTranslation from '@/src/hooks/useTranslation';
import { Raleway } from 'next/font/google';

const font = Raleway({ weight: ['600', '700'], subsets: ['latin'] });

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  const lang = useTranslation();

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
      <div {...divProps} className={`h-screen flex flex-col ${justify}`}>
        <Header />
        {children}
      </div>
    </>
  );
};

export default PrimaryLayout;
