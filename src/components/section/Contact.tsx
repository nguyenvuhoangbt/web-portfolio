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
    <section
      id="contact"
      w-w="full"
      w-p="b-8"
      w-transition="colors duration-500"
    >
      <div w-w="full" w-p="t-8" w-pos="relative" w-max-w="1168px" w-m="x-auto">
        <div
          w-pos="relative"
          w-bg="container"
          w-p="t-12 x-6 b-14"
          w-flex="~ col"
          w-gap="4"
          w-w="300px"
          w-m="l-auto"
          w-z="1"
        >
          <h2
            w-text="center biggest"
            w-font="bold"
            w-transform="~ -translate-x-22"
          >
            Contact me
          </h2>

          <p w-font="semi-bold" w-text="$title-color">
            I will read all emails. Send me any message you want and I will get
            back to you.
          </p>

          <p w-text="smaller">
            I need your <b>Name</b> and <b>Email address</b>, but you will not
            receive anything other than your reply.
          </p>

          <div
            w-w="5"
            w-h="5"
            w-bg="yellow-400"
            w-pos="absolute top-10 right-5"
            w-transform="~ rotate-120"
            w-after="content-DEFAULT absolute w-4 h-4 border-3 border-solid border-$black-color -left-1 bottom-2"
          />
        </div>

        <div
          w-w="full"
          w-pos="relative"
          w-bg="black"
          w-p="t-20 x-6 b-10"
          w-m="-t-20"
        >
          <h3 w-text="center h3 white" w-font="bold" w-m="t-6 b-4">
            Send me a message
          </h3>

          <form
            action=""
            className="contact__form"
            id="contact__form"
            w-grid="~"
            w-gap="y-[1.25rem]"
            w-pos="relative"
          >
            <div className="contact__group" w-grid="~" w-gap="y-[1.25rem]">
              <div
                className="contact__box"
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
                  className="contact__input"
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
                  w-bg="black"
                  w-text="white"
                  w-p="4"
                  w-font="medium"
                />
                <label
                  htmlFor="name"
                  className="contact__label"
                  w-pos="absolute top-3 left-10px"
                  w-text="$text-color-light small"
                  w-font="medium"
                  w-bg="black"
                  w-p="2"
                  w-pointer="none"
                  w-transform={form.firstName.length && '~ -translate-y-2rem'}
                >
                  First Name
                </label>
              </div>
              <div
                className="contact__box"
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
                  className="contact__input"
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
                  w-bg="black"
                  w-text="white"
                  w-p="4"
                  w-font="medium"
                />
                <label
                  htmlFor="email"
                  className="contact__label"
                  w-pos="absolute top-3 left-10px"
                  w-text="$text-color-light small"
                  w-font="medium"
                  w-bg="black"
                  w-p="2"
                  w-pointer="none"
                  w-transform={form.email.length && '~ -translate-y-2rem'}
                >
                  Email Address
                </label>
              </div>
              <div
                className="contact__box contact__area"
                w-w="full"
                w-outline="none"
                w-pos="relative"
                w-bg="black"
                w-p="4"
                w-border="~ 2 rounded-sm $black-color-light"
              >
                <TextareaAutosize
                  name="user__message"
                  id="message"
                  className="contact__input resize-none"
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
                  w-bg="black"
                  w-text="white"
                  w-font="medium"
                />
                <label
                  htmlFor="message"
                  className="contact__label"
                  w-pos="absolute top-3 left-10px"
                  w-text="$text-color-light small"
                  w-font="medium"
                  w-bg="black"
                  w-p="2"
                  w-pointer="none"
                  w-transform={form.message.length && '~ -translate-y-2rem'}
                >
                  Message
                </label>
                <span w-float="right" w-text="small">
                  {`${form.message.length} / ${maxMessageLength}`}
                </span>
              </div>
              <MyButton
                type="submit"
                icon="Send"
                text="Send Message"
                w-bg="yellow-400"
                w-text="black"
                w-rounded="sm"
                w-hover="bg-yellow-400"
              />
            </div>
          </form>
        </div>

        <CurvedArrow
          w-filter="~ invert-100"
          w-m="x-auto"
          w-transform="~ scale-60 rotate-30"
        />

        <div
          className="contact__social"
          w-pos="relative"
          w-grid="~"
          w-gap="y-4"
        >
          <div
            className="contact__social--data"
            w-text="center"
            w-grid="~"
            w-gap="2"
          >
            <div>
              <p className="contact__social-description-1">
                Does not sent emails
              </p>
              <p className="contact__social-description-2" w-font="bold">
                Write me on my social networks
              </p>
            </div>

            <div
              className="contact__social-links"
              w-flex="~"
              w-gap="3"
              w-justify="center"
            >
              <Link
                href="https://www.linkedin.com/"
                w-items="center"
                w-text="smaller"
                w-bg="$black-color-light"
                w-p="2px"
                w-rounded="sm"
                w-transition="duration-300"
                w-hover="bg-black"
              >
                <LinkedInIcon w-text="white" w-transition="duration-300" />
              </Link>
              <Link
                href="https://www.github.com/"
                target="_blank"
                w-flex="~"
                w-items="center"
                w-text="smaller"
                w-bg="$black-color-light"
                w-p="2px"
                w-rounded="sm"
                w-transition="duration-300"
                w-hover="bg-black"
              >
                <GitHubIcon w-text="white" w-transition="duration-300" />
              </Link>
              <Link
                href="mailto:nguyenvuhoangbt@gmail.com"
                target="_blank"
                w-text="smaller"
                w-flex="~"
                w-items="center"
                w-bg="$black-color-light"
                w-p="2px"
                w-rounded="sm"
                w-transition="duration-300"
                w-hover="bg-black"
              >
                <EmailIcon w-text="white" w-transition="duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
