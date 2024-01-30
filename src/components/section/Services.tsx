// Consts
import { LangType } from '@/src/pages/app';

const SectionService: React.FC<{ lang: LangType }> = ({ lang }) => {
  return (
    <section id="services" w-p="b-8">
      <div w-max-w="1120px" w-p="t-8" w-m="x-6" w-grid="~ gap-6">
        <h2 w-text="center biggest" w-font="bold">
          Services
        </h2>

        <div w-justify="center" w-flex="~ col lg:row" w-gap="8 lg:16">
          <article
            w-pos="relative"
            w-flex="~"
            w-w="250px"
            w-h="300px"
            className="group"
          >
            <div
              w-pos="absolute"
              w-h="full"
              w-w="full"
              w-p="x-4 y-10"
              w-border="4 solid"
              w-rounded="sm"
              w-bg="white dark:black"
              w-z="1"
            >
              <h3 w-text="h3" w-font="bold">
                Web Design
              </h3>
              <p className="services_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div
              className="services__border"
              w-pos="absolute top-0px left-0px"
              w-w="250px"
              w-h="300px"
              w-border="4 solid primary dark:primary"
              w-rounded="sm"
              w-transform="~ duration-500"
              w-group-hover="translate-x-3 translate-y-3"
            />
          </article>
          <article
            w-pos="relative"
            w-flex="~"
            w-w="250px"
            w-h="300px"
            className="group"
          >
            <div
              w-pos="absolute"
              w-h="full"
              w-w="full"
              w-p="x-4 y-10"
              w-border="4 solid"
              w-rounded="sm"
              w-bg="white dark:black"
              w-z="1"
            >
              <h3 w-text="h3" w-font="bold">
                Web Design
              </h3>
              <p className="services_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div
              className="services__border"
              w-pos="absolute top-0px left-0px"
              w-w="250px"
              w-h="300px"
              w-border="4 solid primary dark:primary"
              w-rounded="sm"
              w-transform="~ duration-500"
              w-group-hover="translate-x-3 translate-y-3"
            />
          </article>
          <article
            w-pos="relative"
            w-flex="~"
            w-w="250px"
            w-h="300px"
            className="group"
          >
            <div
              w-pos="absolute"
              w-h="full"
              w-w="full"
              w-p="x-4 y-10"
              w-border="4 solid"
              w-rounded="sm"
              w-bg="white dark:black"
              w-z="1"
            >
              <h3 w-text="h3" w-font="bold">
                Web Design
              </h3>
              <p className="services_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div
              className="services__border"
              w-pos="absolute top-0px left-0px"
              w-w="250px"
              w-h="300px"
              w-border="4 solid primary dark:primary"
              w-rounded="sm"
              w-transform="~ duration-500"
              w-group-hover="translate-x-3 translate-y-3"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default SectionService;
