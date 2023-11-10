// Assets
import AboutPerfil from '@/assets/img/about-perfil.jpg';

//Components
import ButtonContactMe from '@/components/button/ContactMe';

import { LangType } from '@/src/pages/app';
import Image from 'next/image';

const SectionAbout: React.FC<{ lang: LangType }> = ({ lang }) => {
  return (
    <section
      id="about"
      w-p="b-8"
      w-bg="container"
      w-transition="colors duration-500"
    >
      <div w-max-w="1120px" w-p="t-8" w-m="x-6" w-grid="~ gap-6">
        <h2 w-text="center biggest" w-font="bold">
          About me
        </h2>

        <div w-pos="relative" w-justify="self-center">
          <Image
            src={AboutPerfil}
            alt="About Perfil"
            fill={false}
            w-pos="relative"
            w-w="320px"
            w-m="auto"
            w-rounded="md"
          />
          <div
            w-w="5"
            w-h="5"
            w-bg="yellow-400"
            w-pos="absolute top-20 right-50"
            w-transform="~ rotate-70"
            w-after="content-DEFAULT absolute w-4 h-4 border-3 border-solid border-[var(--black-color)] -left-5px"
          />
        </div>

        <div w-pos="relative" w-p="l-5">
          <p
            w-m="b-6"
            w-after="content-DEFAULT w-5 h-2px bg-[var(--title-color)] absolute -left-2 top-15px"
          >
            <b
              w-pos="relative"
              w-text="h3 [black]"
              w-before="content-DEFAULT bg-gradient-to-r from-yellow-300 from-opacity-80 w-full h-120/100 absolute -left-2 -bottom-px -z-1"
            >
              Frontend Developer
            </b>
            , {lang.authorDescription}
          </p>

          <p className="about__list">
            <b>My Skills Are:</b> HTML, CSS, JS, React
          </p>
        </div>

        <div w-flex="~" w-justify="center" w-gap="2">
          <ButtonContactMe></ButtonContactMe>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
