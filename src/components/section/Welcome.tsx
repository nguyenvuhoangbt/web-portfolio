// Assets
import HomePerfil from '@/assets/img/home-perfil.jpg';
import RandomLines from '@/assets/svg/random-lines.svg';

// Components
import MyButton from '@/src/components/button/MyButton';

// Consts
import { LangType } from '@/src/pages/app';
import { fontQuicksand } from '@/src/components/layouts/primary/PrimaryLayout';

// Libraries
import Image from 'next/image';
import Link from 'next/link';

const SectionWelcome: React.FC<{ lang: LangType }> = ({ lang }) => {
  const contactList = [
    {
      href: 'https://www.linkedin.com/in/nguyenvuhoangbt/',
      text: 'linkedin.com/in/nguyenvuhoangbt',
      icon: 'LinkedIn',
    },
    {
      href: 'https://github.com/nguyenvuhoangbt/',
      text: 'github.com/in/nguyenvuhoangbt',
      icon: 'GitHub',
    },
    {
      href: 'mailto:nguyenvuhoangbt@gmail.com',
      text: 'nguyenvuhoangbt@gmail.com',
      icon: 'Email',
    },
  ];

  return (
    <section
      w-p="x-16px y-10 lg:y-20"
      id="home"
      w-m="t-66px lg:t-88px"
      w-h="min"
      w-w="full"
    >
      <div w-max-w="1184px" w-m="x-auto" w-grid="~" w-h="full" w-gap="10">
        <h1
          w-text="center 2rem md:2.5rem"
          w-font="bold"
          w-align="self-center"
          dangerouslySetInnerHTML={{
            __html: lang.welcome,
          }}
          style={{
            wordBreak: 'keep-all',
          }}
        ></h1>

        <div
          w-justify="self-center"
          w-m="auto"
          w-h="max"
          w-align="items-center"
        >
          <div w-pos="relative" w-m="x-32px">
            <div
              w-border="4 solid"
              w-rounded="sm"
              w-aspect="1/3"
              w-p="t-3 x-3"
              w-bg="white dark:black"
              w-z="1"
            >
              <Image
                src={HomePerfil}
                alt="Home Perfil"
                fill={false}
                w-pos="relative"
                w-max-w="320px"
                w-m="auto"
                w-rounded="sm"
              />
            </div>
            <RandomLines
              w-pos="absolute right-0 top-0"
              w-transform="~ scale-50 translate-x-19"
              w-fill="dark:white"
            />

            <div
              w-w="5"
              w-h="5"
              w-z="1"
              w-bg="primary"
              w-pos="absolute bottom-10 -left-2"
              w-transform="~ -rotate-30"
              w-after="content-DEFAULT absolute w-4 h-4 border-3 border-solid -left-6px bottom-10px"
            />

            <div
              w-pos="absolute bottom-3 right-4"
              w-flex="~ col"
              w-items="end"
              w-gap="1"
              w-z="1"
            >
              {contactList.map(({ href, text, icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  w-flex="~"
                  w-gap="1"
                  w-items="center"
                  w-text="smaller"
                >
                  <div
                    style={{
                      fontFamily: fontQuicksand.style.fontFamily,
                      letterSpacing: 0,
                    }}
                  >
                    {text}
                  </div>
                  <MyButton
                    icon={icon}
                    w-p="0"
                    iconClassName="24px text-black dark:text-white"
                    w-h="min"
                    w-bg="transparent"
                    w-shadow="none"
                    w-hover="bg-white dark:bg-black shadow-none"
                  ></MyButton>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWelcome;
