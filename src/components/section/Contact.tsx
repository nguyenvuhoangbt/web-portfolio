// Assets
import CurvedArrow from '@/assets/svg/curved-arrow.svg';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Consts
import { LangType } from '@/src/pages/app';

//Components
import MyButton from '@/src/components/button/MyButton';

// Libraries
import Link from 'next/link';
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from 'react';

const initialForm = {
  firstName: '',
  email: '',
  message: '',
};

const maxMessageLength = 3000;

const SectionContact: React.FC<{ lang: LangType }> = ({ lang }) => {
  const [form, setForm] = useState(initialForm);

  return (
    <section id="contact" w-min-w="lg:screen" w-max-w="1168px" w-p="b-8 lg:x-6">
      <div
        w-p="t-8"
        w-pos="relative"
        w-max-w="1120px"
        w-m="x-auto"
        w-align="self-center"
        className="lg:(grid grid-cols-[1fr,2fr]) xl:grid-cols-[360px,750px]"
      >
        <div
          w-pos="relative"
          w-p="t-12 x-6 b-14 xl:16"
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
            w-text="biggest xl:3rem"
            w-m="xl:b-2"
            w-color="primary"
            w-font="bold"
            w-transform="~ xl:-translate-x-30"
          >
            Contact me
          </h2>

          <p w-font="semi-bold">
            I will read all emails. Send me any message you want and I will get
            back to you.
          </p>

          <p w-text="small">
            I need your <b>Name</b> and <b>Email address</b>, but you will not
            receive anything other than your reply.
          </p>

          <div
            w-w="5"
            w-h="5"
            w-bg="primary"
            w-pos="absolute top-10 right-5 xl:right-10"
            w-transform="~ rotate-120"
            w-after="content-DEFAULT absolute w-4 h-4 border-3 border-solid -left-6px bottom-10px"
          />
        </div>

        <div
          w-w="full"
          w-pos="relative"
          w-bg="gray dark:darkGray"
          w-p="x-4 y-10 sm:x-6 xl:20"
          w-grid="lg:(col-start-2 col-end-3 row-start-1 row-end-3)"
        >
          <h3 w-text="center h3" w-font="bold" w-m="b-4">
            Send me a message
          </h3>

          <form
            action=""
            id="contact__form"
            w-grid="~"
            w-gap="y-[1.25rem]"
            w-pos="relative"
          >
            <div w-grid="~" w-gap="y-[1.25rem]">
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
                />
                <label
                  htmlFor="name"
                  w-pos="absolute top-18px left-10px"
                  w-text="$black-color-light small dark:white"
                  w-font="medium"
                  w-bg="gray dark:darkGray"
                  w-p="x-2"
                  w-pointer="none"
                  w-transform={form.firstName.length && '~ -translate-y-2rem'}
                >
                  First Name
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
                />
                <label
                  htmlFor="email"
                  w-pos="absolute top-18px left-10px"
                  w-text="$black-color-light small dark:white"
                  w-font="medium"
                  w-bg="gray dark:darkGray"
                  w-p="x-2"
                  w-pointer="none"
                  w-transform={form.email.length && '~ -translate-y-2rem'}
                >
                  Email Address
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
                />
                <label
                  htmlFor="message"
                  w-pos="absolute top-18px left-10px"
                  w-text="$black-color-light small dark:white"
                  w-font="medium"
                  w-bg="gray dark:darkGray"
                  w-p="x-2"
                  w-pointer="none"
                  w-transform={form.message.length && '~ -translate-y-2rem'}
                >
                  Message
                </label>
                <span w-float="right" w-text="small $black-color-light">
                  {`${form.message.length} / ${maxMessageLength}`}
                </span>
              </div>
              <MyButton
                type="submit"
                icon="Send"
                text="Send Message"
                w-bg="primary"
                w-rounded="sm"
                w-w="max"
                w-m="auto sm:0"
              />
            </div>
          </form>
        </div>

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
              <p>Does not sent emails</p>
              <p w-font="bold">Write me on my social networks</p>
            </div>

            <div w-flex="~" w-gap="3" w-justify="center" w-align="items-center">
              <Link
                href="https://www.linkedin.com/in/nguyenvuhoangbt/"
                target="_blank"
                w-items="center"
                w-text="smaller"
                w-bg="$black-color-light"
                w-p="2px xl:1"
                w-h="min"
                w-rounded="sm"
                w-transition="duration-300"
                w-transform="~"
                w-hover="bg-primary -translate-y-2"
              >
                <LinkedInIcon
                  w-text="white xl:biggest"
                  w-transition="duration-300"
                />
              </Link>
              <Link
                href="https://github.com/nguyenvuhoangbt"
                target="_blank"
                w-flex="~"
                w-items="center"
                w-text="smaller"
                w-bg="$black-color-light"
                w-p="2px xl:1"
                w-h="min"
                w-rounded="sm"
                w-transition="duration-300"
                w-transform="~"
                w-hover="bg-primary -translate-y-2"
              >
                <GitHubIcon
                  w-text="white xl:biggest"
                  w-transition="duration-300"
                />
              </Link>
              <Link
                href="mailto:nguyenvuhoangbt@gmail.com"
                target="_blank"
                w-text="smaller"
                w-flex="~"
                w-items="center"
                w-bg="$black-color-light"
                w-p="2px xl:1"
                w-h="min"
                w-rounded="sm"
                w-transition="duration-300"
                w-transform="~"
                w-hover="bg-primary -translate-y-2"
              >
                <EmailIcon
                  w-text="white xl:biggest"
                  w-transition="duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
