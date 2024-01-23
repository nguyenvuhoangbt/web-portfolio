// Consts
import { LangType } from '@/src/pages/app';

const SectionService: React.FC<{ lang: LangType }> = ({ lang }) => {
  return (
    <section id="service" w-p="b-8" w-transition="colors duration-500">
      <div w-max-w="1120px" w-p="t-8" w-m="x-6" w-grid="~ gap-6">
        <h2 w-text="center biggest" w-font="bold">
          Services
        </h2>

        <div
          w-pos="relative"
          w-justify="center"
          w-grid="~ cols-[250px] gap-8"
          w-p="t-4"
        >
          <article w-pos="relative" className="group">
            <div
              className="services__border"
              w-pos="absolute top-0 left-0"
              w-w="full"
              w-h="full"
              w-border="4 solid yellow-400"
              w-rounded="md"
              w-transform="~ duration-500"
              w-group-hover="translate-x-3 translate-y-3"
              w-z="-1"
            ></div>

            <div
              w-h="full"
              w-bg="light-200"
              w-border="4 solid black"
              w-rounded="md"
              w-p="t-24 x-4 b-12"
              w-transition="[bg-color] border"
            >
              <h3 w-text="h3" w-font="bold">
                Web Design
              </h3>
              <p className="services_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </article>

          <article w-pos="relative" className="group">
            <div
              className="services__border"
              w-pos="absolute top-0 left-0"
              w-w="full"
              w-h="full"
              w-border="4 solid yellow-400"
              w-rounded="md"
              w-transform="~ duration-500"
              w-group-hover="translate-x-3 translate-y-3"
              w-z="-1"
            ></div>

            <div
              w-h="full"
              w-bg="light-200"
              w-border="4 solid black"
              w-rounded="md"
              w-p="t-24 x-4 b-12"
              w-transition="[bg-color] border"
            >
              <h3 w-text="h3" w-font="bold">
                Web Design
              </h3>
              <p className="services_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </article>

          <article w-pos="relative" className="group">
            <div
              className="services__border"
              w-pos="absolute top-0 left-0"
              w-w="full"
              w-h="full"
              w-border="4 solid yellow-400"
              w-rounded="md"
              w-transform="~ duration-500"
              w-group-hover="translate-x-3 translate-y-3"
              w-z="-1"
            ></div>

            <div
              w-h="full"
              w-bg="light-200"
              w-border="4 solid black"
              w-rounded="md"
              w-p="t-24 x-4 b-12"
              w-transition="[bg-color] border"
            >
              <h3 w-text="h3" w-font="bold">
                Web Design
              </h3>
              <p className="services_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SectionService;
