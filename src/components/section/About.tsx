// Assets
import AboutPerfil from '@/assets/img/about-perfil.jpg';

// Components
import BannerHorizontal from '@/src/components/banner/Horizontal';

// Consts
import { LangType } from '@/src/pages/app';
import { fontQuicksand } from '@/src/components/layouts/primary/PrimaryLayout';

// Libraries
import Image from 'next/image';
import { easings } from '@react-spring/web';

// States & Hooks
import InViewAnimation from '@/src/hooks/useInViewAnimation';

const SectionAbout: React.FC<{ lang: LangType }> = ({ lang }) => {
  return (
    <section
      id="about"
      w-max-w="1184px"
      w-w="screen"
      w-p="x-4 t-8"
      w-gap="y-4 x-0"
    >
      <div
        w-w="max"
        w-max-w="full lg:1184px"
        w-m="x-auto"
        w-gap="x-6"
        w-grid="~"
        className="<sm:(grid-rows-[1fr,auto] gap-y-4) sm:grid-cols-[200px,1fr] md:grid-cols-[320px,1fr] lg:grid-cols-[320px,650px]"
      >
        <InViewAnimation
          startX={120}
          duration={1500}
          easing={easings.easeOutExpo}
        >
          <Image
            src={AboutPerfil}
            alt="About Perfil"
            fill={false}
            w-pos="relative"
            w-max-w="full sm:200px md:320px"
            w-m="lg:x-auto"
            w-rounded="md"
          />
        </InViewAnimation>

        <InViewAnimation
          startX={-100}
          duration={1500}
          easing={easings.easeOutExpo}
        >
          <div
            w-flex="~ col"
            w-gap="4 md:10"
            w-justify="content-center"
            w-h="full"
          >
            <h2 w-text="2rem sm:3rem" w-font="bold leading-normal">
              {`${lang.aboutMeTitle}`}
            </h2>
            <blockquote
              w-font="italic"
              w-pos="relative"
              w-before="content-open-quote -top-20px left-0px <sm:(-left-10px -top-10px) bg-[#cccccc4d] block w-30px h-30px text-2rem rounded-1/2 absolute pl-5px"
              w-after="content-close-quote -bottom-10px -right-0px bg-[#cccccc4d] block w-30px h-30px text-2rem rounded-1/2 absolute pl-5px"
              style={{
                fontFamily: fontQuicksand.style.fontFamily,
                letterSpacing: 0,
              }}
            >
              <p
                w-m="b-6"
                w-text="1rem md:1.125rem"
                w-leading="!loose"
                w-p="l-8 sm:l-12"
                className="break-words"
                dangerouslySetInnerHTML={{
                  __html: lang.aboutMeDescription,
                }}
                style={{
                  textWrap: 'balance',
                }}
              ></p>
            </blockquote>
          </div>
        </InViewAnimation>
      </div>

      <InViewAnimation>
        <BannerHorizontal />
      </InViewAnimation>
    </section>
  );
};

export default SectionAbout;
