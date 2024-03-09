// Components
import SeviceCard from '@/src/components/card/Service';

// Consts
import { LangType } from '@/src/pages/app';

// Icons
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import CodeIcon from '@mui/icons-material/Code';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

// States & Hooks
import InViewAnimation from '@/src/hooks/UseInViewAnimation';

const SectionService: React.FC<{ lang: LangType }> = ({ lang }) => {
  const serviceList = [
    {
      title: lang.designTitle,
      content: lang.webDesignContent,
      icon: (
        <SpaceDashboardOutlinedIcon viewBox="2 2 20 20"></SpaceDashboardOutlinedIcon>
      ),
    },
    {
      title: lang.developmentTitle,
      content: lang.developmentContent,
      icon: <CodeIcon viewBox="2 2 20 20"></CodeIcon>,
    },
    {
      title: lang.maintenanceTitle,
      content: lang.maintenanceContent,
      icon: <BuildOutlinedIcon viewBox="0 0 24 24"></BuildOutlinedIcon>,
    },
    {
      title: lang.optimizationTitle,
      content: lang.optimizationContent,
      icon: <QueryStatsIcon viewBox="2 2 20 20"></QueryStatsIcon>,
    },
  ];
  return (
    <section id="services" w-p="b-8">
      <div w-justify="center" w-p="t-8" w-grid="~" w-gap="4 md:10">
        <h2 w-text="center 2em md:3em" w-font="bold">
          {`${lang.servicesTitle}`}
        </h2>

        <div
          w-grid="~ <sm:rows-4 sm:(cols-2 rows-2) lg:(cols-4 rows-1)"
          w-p="x-4"
          w-justify="between"
          w-gap="6"
          w-align="items-center"
          w-max-w="full"
        >
          {serviceList.map(({ title, content, icon }, i) => (
            <InViewAnimation startY={-50} duration={1000} key={i}>
              <SeviceCard
                title={title}
                content={content}
                icon={icon}
              ></SeviceCard>
            </InViewAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionService;
