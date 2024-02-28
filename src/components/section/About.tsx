// Assets
import AboutPerfil from '@/assets/img/about-perfil.jpg';

// Consts
import { LangType } from '@/src/pages/app';

// Components
import MyButton from '@/src/components/button/MyButton';
import BannerHorizontal from '@/src/components/banner/Horizontal';

// Libraries
import Image from 'next/image';
import Link from 'next/link';

const SectionAbout: React.FC<{ lang: LangType }> = ({ lang }) => {
  return (
    <section
      id="about"
      w-p="y-8"
      w-max-w="1120px"
      w-m="x-4 sm:x-6"
      w-grid="~ gap-6"
    >
      <h2 w-text="center biggest" w-font="bold">
        About me
      </h2>

      <div>
        <Image
          src={AboutPerfil}
          alt="About Perfil"
          fill={false}
          w-pos="relative"
          w-w="full sm:320px"
          w-m="auto"
          w-rounded="sm"
        />
      </div>

      <div w-p="sm:l-5">
        <p
          w-m="b-6"
          w-after="content-DEFAULT w-5 h-2px absolute -left-2 top-15px"
        >
          <b w-pos="relative" w-text="h3">
            Frontend Developer
          </b>
          , {lang.authorDescription}
        </p>
        <BannerHorizontal />
      </div>

      <div w-flex="~" w-justify="center" w-gap="2">
        <Link href="https://www.linkedin.com/" target="_blank">
          <MyButton icon="Send" text="Contact Me" />
        </Link>
      </div>
    </section>
  );
};

export default SectionAbout;
