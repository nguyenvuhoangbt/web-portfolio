// Assets
import Dghome3d from '@/assets/img/dghome3d.png';
import ComingSoon from '@/assets/img/coming-soon.jpg';

// Consts
import { LangType } from '@/src/pages/app';

// Components
import ProjectCard from '@/src/components/cards/Project';

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
      w-p="y-8"
      w-max-w="1120px"
      w-m="x-4 sm:x-6"
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
