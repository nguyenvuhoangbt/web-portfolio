// Components
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SectionWelcome from '@/components/section/Welcome';
import SectionAbout from '@/components/section/About';
import SectionServices from '@/src/components/section/Services';
import SectionProjects from '@/src/components/section/Projects';
import SectionContact from '@/components/section/Contact';

// States & Hooks
import UseTranslation from '@/src/hooks/UseTranslation';

// Libraries
import { NextPageWithLayout } from '@/src/pages/app';

// States & Hooks
import InViewAnimation from '@/src/hooks/UseInViewAnimation';

const Home: NextPageWithLayout = () => {
  const lang = UseTranslation();

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
