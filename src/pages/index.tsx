// Components
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SectionWelcome from '@/components/section/Welcome';
import SectionAbout from '@/components/section/About';
import SectionServices from '@/src/components/section/Services';
import SectionProjects from '@/src/components/section/Projects';
import SectionContact from '@/components/section/Contact';

// States & Hooks
import useTranslation from '@/src/hooks/useTranslation';

// Libraries
import { NextPageWithLayout } from '@/src/pages/app';

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
      <SectionServices lang={aboutLang}></SectionServices>
      <SectionProjects lang={aboutLang}></SectionProjects>
      <SectionContact lang={aboutLang}></SectionContact>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
