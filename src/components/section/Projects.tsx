// Assets
import Dghome3d from '@/assets/img/dghome3d.png';
import DemoThreejs from '@/assets/img/demo-threejs.png';
import ComingSoon from '@/assets/img/coming-soon.jpg';
import ParallaxEffect from '@/assets/img/parallax-effect.png';
import Carousel from '@/assets/img/carousel.png';

// Consts
import { LangType } from '@/src/pages/app';

// Components
import ProjectCard from '@/src/components/card/Project';

// Libraries
import { capitalize } from 'lodash-es';

// States & Hooks
import InViewAnimation from '@/src/hooks/useInViewAnimation';

const SectionProject: React.FC<{ lang: LangType }> = ({ lang }) => {
  const projectList = [
    {
      imageSrc: Dghome3d,
      imageAlt: `${capitalize(lang.website)} dghome3d.com`,
      imageClassName: '',
      title: `${capitalize(lang.website)} dghome3d.com`,
      content: lang.dghome3dContent,
      link: 'https://dghome3d.com/',
    },
    {
      imageSrc: ParallaxEffect,
      imageAlt: lang.parallaxEffect,
      imageClassName: '',
      title: lang.parallaxEffect,
      content: lang.parallaxEffectContent,
      link: 'https://parallax-effect-omega.vercel.app/',
    },
    {
      imageSrc: Carousel,
      imageAlt: lang.carousel,
      imageClassName: '',
      title: lang.carousel,
      content: lang.carouselContent,
      link: 'https://wallpaper-sigma-seven.vercel.app/',
    },
    {
      imageSrc: DemoThreejs,
      imageAlt: lang.demoReactThree,
      imageClassName: '',
      title: lang.demoReactThree,
      content: lang.demoReactThreeContent,
      link: 'https://monster-woad.vercel.app/',
    },
    {
      imageSrc: ComingSoon,
      imageAlt: lang.futureProject,
      imageClassName: 'filter brightness-50',
      title: lang.futureProject,
      content: lang.futureProjectContent,
    },
  ];

  return (
    <section
      id="projects"
      w-p="x-4 y-8"
      w-max-w="1184px"
      w-grid="~"
      w-gap="4 md:10"
    >
      <h2 w-text="center 2em md:3em" w-font="bold">
        {`${lang.projectsTitle}`}
      </h2>

      <div w-pos="relative" w-justify="self-center" w-grid="~ gap-6 md:cols-2">
        {projectList.map(
          ({ imageSrc, title, content, link, imageClassName }, i) => (
            <InViewAnimation startY={-50} duration={1000} key={i}>
              <ProjectCard
                key={i}
                imageSrc={imageSrc}
                imageClassName={imageClassName}
                title={title}
                content={content}
                link={link}
                w-filter="brightness-50"
              />
            </InViewAnimation>
          )
        )}
      </div>
    </section>
  );
};

export default SectionProject;
