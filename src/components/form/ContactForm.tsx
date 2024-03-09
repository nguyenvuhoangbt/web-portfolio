// States & Hooks
import useTranslation from '@/src/hooks/useTranslation';

// Consts
import { fontQuicksand } from '@/src/components/layouts/primary/PrimaryLayout';

// Libraries
import path from 'path';
import TextareaAutosize from 'react-textarea-autosize';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useSpring, a } from '@react-spring/web';

// Components
import TransitionsModal from '@/src/components/modal/TransitionsModal';

// Icons
import SendIcon from '@mui/icons-material/Send';

const maxMessageLength = 3000;
const initialForm = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const lang = useTranslation();
  const router = useRouter();

  const openConfirmModal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleSendContactMessage = async () => {
    try {
      setLoading(true);
      setShowModal(false);
      await fetch(path.resolve('./api/auto-reply-contact-email'), {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          language: router.locale,
        }),
        headers: {
          'content-type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setForm(initialForm);
      setSend(true);
      setLoading(false);
    }
  };

  const { transform, opacity } = useSpring({
    opacity: send ? 1 : 0,
    transform: `perspective(600px) rotateY(${send ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      <a.div
        w-w="full"
        w-h="full"
        w-pos="absolute"
        w-bg="gray dark:darkGray"
        w-p="x-4 y-10 sm:x-6 xl:20"
        w-z={send ? '-1' : '0'}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          willChange: 'transform, opacity',
        }}
      >
        <h3 w-text="center 1.25em" w-font="bold" w-m="b-4">
          {lang.sendMeMessage}
        </h3>

        <form
          action=""
          onSubmit={openConfirmModal}
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
                maxLength={30}
                value={form.name}
                onChange={(event) => {
                  setForm({
                    ...form,
                    name: event.target.value,
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
                w-transform={form.name.length && '~ -translate-y-2rem'}
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
                w-transform={form.email.length && '~ -translate-y-2rem'}
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
                w-text="1rem dark:white"
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
                w-transform={form.message.length && '~ -translate-y-2rem'}
              >
                {lang.message}
              </label>
              <span
                w-float="right"
                w-text="small $black-color-light dark:white"
                style={{
                  fontFamily: fontQuicksand.style.fontFamily,
                  letterSpacing: 0,
                }}
              >
                {`${form.message.length} / ${maxMessageLength}`}
              </span>
            </div>
            <LoadingButton
              type="submit"
              loading={loading}
              startIcon={<SendIcon w-text="!16px" />}
              loadingPosition="start"
              variant="contained"
              w-rounded="sm"
              w-w="max"
              w-h="32px"
              w-m="auto sm:0"
            >
              <span w-font="semibold">{lang.sendMessage}</span>
            </LoadingButton>
          </div>
        </form>
      </a.div>
      <a.div
        w-w="full"
        w-h="full"
        w-flex="~"
        w-pos="absolute"
        w-bg="gray dark:darkGray"
        w-p="x-4 y-10 sm:x-6 xl:10"
        w-z={send ? '0' : '-1'}
        style={{
          opacity,
          transform,
          rotateY: '180deg',
          willChange: 'transform, opacity',
        }}
      >
        <h3
          w-text="center 4rem sm:7rem"
          w-leading="!normal"
          w-font="bold"
          w-m="auto"
        >
          {lang.thankYou}
        </h3>
      </a.div>

      <TransitionsModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => handleSendContactMessage()}
      />
    </>
  );
};

export default ContactForm;
