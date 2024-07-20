// Assets
import CurvedArrow from '@/assets/svg/curved-arrow.svg';

// Consts
import { LangType } from '@/src/pages/app';

// Components
import MyButton from '@/src/components/button/MyButton';
import ContactForm from '@/src/components/form/ContactForm';

// States & Hooks
import InViewAnimation from '@/src/hooks/useInViewAnimation';

// Libraries
import Link from 'next/link';
import { easings } from '@react-spring/web';

const contactList = [
  {
    href: 'https://www.linkedin.com/in/nguyenvuhoangbt/',
    icon: 'LinkedIn',
  },
  {
    href: 'https://github.com/nguyenvuhoangbt/',
    icon: 'GitHub',
  },
  {
    href: 'mailto:nguyenvuhoangbt@gmail.com',
    icon: 'Email',
  },
];

const SectionContact: React.FC<{ lang: LangType }> = ({ lang }) => {
  return (
    <section id="contact" w-min-w="lg:full" w-max-w="1168px" w-p="b-20 lg:x-6">
      <div
        w-p="t-8"
        w-pos="relative"
        w-max-w="1184px"
        w-m="x-auto"
        w-align="self-center"
        className="lg:(grid grid-cols-[1fr,2fr]) xl:grid-cols-[360px,750px]"
      >
        <InViewAnimation
          startX={-120}
          duration={1500}
          easing={easings.easeOutExpo}
          w-z="1"
        >
          <div
            w-pos="relative"
            w-p="t-12 x-6 b-14 xl:12"
            w-flex="~ col"
            w-justify="center"
            w-gap="4"
            w-w="screen lg:full xl:400px"
            w-h="max lg:300px xl:350px"
            w-m="x-auto lg:t-10"
            w-z="1"
            w-bg="secondary dark:darkSecondary"
            w-rounded="sm"
            w-shadow="lg:contact-box"
          >
            <h2
              w-text="2rem md:3rem"
              w-m="xl:b-2"
              w-color="primary"
              w-font="bold"
              w-transform="~ xl:-translate-x-22"
            >
              {`${lang.contactMeTitle}`}
            </h2>

            <p w-font="semi-bold">{lang.contactMeContent}</p>

            <p
              w-text="0.9rem"
              w-font="leading-normal"
              dangerouslySetInnerHTML={{
                __html: lang.contactMeNote,
              }}
            ></p>

            <div
              w-w="5"
              w-h="5"
              w-bg="primary"
              w-pos="absolute top-10 right-6 xl:right-10"
              w-transform="~ rotate-120"
              w-after="content-DEFAULT absolute w-4 h-4 border-3 border-solid -left-6px bottom-10px"
            />
          </div>
        </InViewAnimation>

        <InViewAnimation
          startX={100}
          duration={1500}
          easing={easings.easeOutExpo}
          w-grid="lg:(col-start-2 col-end-3 row-start-1 row-end-3)"
          w-pos="relative"
          w-h="<lg:460px"
        >
          <ContactForm />
        </InViewAnimation>

        <InViewAnimation rootMargin="-30% 0%">
          <div
            w-pos="relative"
            w-flex="~ col"
            w-gap="y-2"
            w-grid="xl:(row-start-2 row-end-3 col-span-1)"
          >
            <CurvedArrow
              w-filter="~ invert-100 dark:invert-0"
              w-m="x-auto"
              w-transform="~ scale-60"
            />
            <div w-text="center xl:left" w-grid="~ xl:cols-2" w-gap="2">
              <div>
                <p>{lang.notSendEmail}</p>
                <p w-font="bold">{lang.writeSocialNetwork}</p>
              </div>

              <div
                w-flex="~"
                w-gap="3"
                w-justify="center"
                w-align="items-center"
              >
                {contactList.map(({ href, icon }, i) => (
                  <Link
                    key={i}
                    href={href}
                    target="_blank"
                    w-items="center"
                    w-text="smaller"
                    w-bg="$black-color-light"
                    w-rounded="sm"
                    w-transition="duration-300"
                    w-transform="~"
                    w-hover="-translate-y-8px"
                    aria-label={`Link to my ${icon}`}
                  >
                    <MyButton
                      icon={icon}
                      w-p="1"
                      iconClassName="w-32px h-32px"
                      w-h="10"
                      w-bg="transparent"
                      w-text="white xl:biggest"
                      w-transition="duration-300"
                      aria-label={icon}
                    ></MyButton>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </InViewAnimation>
      </div>
    </section>
  );
};

export default SectionContact;
