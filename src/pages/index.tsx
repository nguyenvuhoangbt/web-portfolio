//Components
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SectionWelcome from '@/components/section/Welcome';
import SectionAbout from '@/components/section/About';
import SectionService from '@/components/section/Service';
import SectionProject from '@/components/section/Project';

import { NextPageWithLayout } from '@/src/pages/app';
import useTranslation from '@/src/hooks/useTranslation';

const Home: NextPageWithLayout = () => {
  const lang = useTranslation();
  const homeLang = {
    welcome: lang.welcome,
    authorName: lang.author.name,
  };

  const aboutLang = {
    authorName: lang.author.name,
    authorDescription: lang.author.description,
  };

  return (
    <>
      <SectionWelcome lang={homeLang}></SectionWelcome>
      <SectionAbout lang={aboutLang}></SectionAbout>
      <SectionService lang={aboutLang}></SectionService>
      <SectionProject lang={aboutLang}></SectionProject>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
