// Assets
import AboutPerfil from '@/assets/img/about-perfil.jpg';

// Consts
import { LangType } from '@/src/pages/app';

// Components
import MyButton from '@/src/components/button/MyButton';

// Libraries
import Image from 'next/image';
import Link from 'next/link';

const SectionAbout: React.FC<{ lang: LangType }> = ({ lang }) => {
  return (
    <section id="about" w-p="b-8" w-transition="colors duration-500">
      <div w-max-w="1120px" w-p="t-8" w-m="x-6" w-grid="~ gap-6">
        <h2 w-text="center biggest black" w-font="bold">
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
            w-rounded="sm"
          />
          <div
            w-w="5"
            w-h="5"
            w-bg="primary"
            w-pos="absolute top-20 right-50"
            w-transform="~ rotate-70"
            w-after="content-DEFAULT absolute w-4 h-4 border-3 border-solid border-$black-color -left-5px"
          />
        </div>

        <div w-pos="relative" w-p="l-5">
          <p
            w-m="b-6"
            w-after="content-DEFAULT w-5 h-2px absolute -left-2 top-15px"
          >
            <b w-pos="relative" w-text="h3 black">
              Frontend Developer
            </b>
            , {lang.authorDescription}
          </p>

          <p>
            <b>My Skills Are:</b> HTML, CSS, JS, React
          </p>
        </div>

        <div w-flex="~" w-justify="center" w-gap="2">
          <Link href="https://www.linkedin.com/" target="_blank">
            <MyButton icon="Send" text="Contact Me" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
