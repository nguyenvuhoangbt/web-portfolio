// Assets
import CurvedArrow from '@/assets/svg/curved-arrow.svg';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Consts
import { LangType } from '@/src/pages/app';
import { fontQuicksand } from '@/src/components/layouts/primary/PrimaryLayout';

// Components
import MyButton from '@/src/components/button/MyButton';

// States & Hooks
import InViewAnimation from '@/src/hooks/useInViewAnimation';

// Libraries
import Link from 'next/link';
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';
import { easings } from '@react-spring/web';

const initialForm = {
  firstName: '',
  email: '',
  message: '',
};

const maxMessageLength = 3000;

const SectionContact: React.FC<{ lang: LangType }> = ({ lang }) => {
  const [form, setForm] = useState(initialForm);
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
        >
          <div
            w-w="full"
            w-h="full"
            w-pos="relative"
            w-bg="gray dark:darkGray"
            w-p="x-4 y-10 sm:x-6 xl:20"
          >
            <h3 w-text="center 1.25em" w-font="bold" w-m="b-4">
              {lang.sendMeMessage}
            </h3>

            <form
              action=""
              id="contact__form"
              w-grid="~"
              w-gap="y-[1.25em]"
              w-pos="relative"
            >
              <div w-grid="~" w-gap="y-[1.25em]">
                <div
                  w-pos="relative"
                  w-w="full"
                  w-h="15"
                  w-border="~ 2 rounded-sm $black-color-light"
                >
                  <input
                    id="name"
                    type="text"
                    name="first-name"
                    autoComplete="first-name"
                    required
                    maxLength={50}
                    value={form.firstName}
                    onChange={(event) => {
                      setForm({
                        ...form,
                        firstName: event.target.value,
                      });
                    }}
                    w-outline="none"
                    w-pos="absolute"
                    w-w="full"
                    w-h="full"
                    w-bg="gray dark:darkGray"
                    w-p="4"
                    w-font="medium"
                    style={{
                      fontFamily: fontQuicksand.style.fontFamily,
                      letterSpacing: 0,
                    }}
                  />
                  <label
                    htmlFor="name"
                    w-pos="absolute top-18px left-10px"
                    w-text="$black-color-light small dark:white"
                    w-font="medium"
                    w-bg="gray dark:darkGray"
                    w-p="x-2"
                    w-pointer="none"
                    w-transform={form.firstName.length && '~ -translate-y-2em'}
                  >
                    {lang.firstName}
                  </label>
                </div>
                <div
                  w-pos="relative"
                  w-w="full"
                  w-h="15"
                  w-border="~ 2 rounded-sm $black-color-light"
                >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    maxLength={100}
                    value={form.email}
                    onChange={(event) => {
                      setForm({
                        ...form,
                        email: event.target.value,
                      });
                    }}
                    w-outline="none"
                    w-pos="absolute"
                    w-w="full"
                    w-h="full"
                    w-bg="gray dark:darkGray"
                    w-p="4"
                    w-font="medium"
                    style={{
                      fontFamily: fontQuicksand.style.fontFamily,
                      letterSpacing: 0,
                    }}
                  />
                  <label
                    htmlFor="email"
                    w-pos="absolute top-18px left-10px"
                    w-text="$black-color-light small dark:white"
                    w-font="medium"
                    w-bg="gray dark:darkGray"
                    w-p="x-2"
                    w-pointer="none"
                    w-transform={form.email.length && '~ -translate-y-2em'}
                  >
                    {lang.emailAddress}
                  </label>
                </div>
                <div
                  w-w="full"
                  w-outline="none"
                  w-pos="relative"
                  w-bg="gray dark:darkGray"
                  w-p="4"
                  w-border="~ 2 rounded-sm $black-color-light"
                >
                  <TextareaAutosize
                    name="user__message"
                    id="message"
                    className="resize-none"
                    required
                    value={form.message}
                    onChange={(event) => {
                      setForm({
                        ...form,
                        message: event.target.value,
                      });
                    }}
                    minRows={3}
                    maxRows={10}
                    maxLength={maxMessageLength}
                    w-outline="none"
                    w-w="full"
                    w-h="full"
                    w-bg="gray dark:darkGray"
                    w-font="medium"
                    w-text="1rem"
                    style={{
                      fontFamily: fontQuicksand.style.fontFamily,
                      letterSpacing: 0,
                    }}
                  />
                  <label
                    htmlFor="message"
                    w-pos="absolute top-18px left-10px"
                    w-text="$black-color-light small dark:white"
                    w-font="medium"
                    w-bg="gray dark:darkGray"
                    w-p="x-2"
                    w-pointer="none"
                    w-transform={form.message.length && '~ -translate-y-2em'}
                  >
                    {lang.message}
                  </label>
                  <span
                    w-float="right"
                    w-text="small $black-color-light"
                    style={{
                      fontFamily: fontQuicksand.style.fontFamily,
                      letterSpacing: 0,
                    }}
                  >
                    {`${form.message.length} / ${maxMessageLength}`}
                  </span>
                </div>
                <MyButton
                  type="submit"
                  icon="Send"
                  text={lang.sendMessage}
                  w-bg="primary"
                  w-rounded="sm"
                  w-w="max"
                  w-m="auto sm:0"
                />
              </div>
            </form>
          </div>
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
                  >
                    <MyButton
                      icon={icon}
                      w-p="1"
                      iconClassName="w-32px h-32px"
                      w-h="10"
                      w-bg="transparent"
                      w-text="white xl:biggest"
                      w-transition="duration-300"
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
