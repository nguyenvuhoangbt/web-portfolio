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

// States & Hooks
import InViewAnimation from '@/src/hooks/useInViewAnimation';

const Home: NextPageWithLayout = () => {
  const lang = useTranslation();

  return (
    <>
      <InViewAnimation>
        <SectionWelcome lang={lang}></SectionWelcome>
      </InViewAnimation>
      <InViewAnimation>
        <SectionAbout lang={lang}></SectionAbout>
      </InViewAnimation>
      <InViewAnimation>
        <SectionServices lang={lang}></SectionServices>
      </InViewAnimation>
      <InViewAnimation>
        <SectionProjects lang={lang}></SectionProjects>
      </InViewAnimation>
      <InViewAnimation>
        <SectionContact lang={lang}></SectionContact>
      </InViewAnimation>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
