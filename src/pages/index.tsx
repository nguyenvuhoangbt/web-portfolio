import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import { NextPageWithLayout } from './app';
import { useSpring, animated } from '@react-spring/web';

// Assets
import HomePerfil from '@/assets/img/home-perfil.jpg';
import HomeArrow from '@/assets/svg/curved-arrow.svg';
import HomeLine from '@/assets/svg/random-lines.svg';

// Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ScrollDownButton = () => {
  const props = useSpring({
    from: {
      y: -16,
      opacity: 0,
    },
    to: [
      {
        y: 0,
        opacity: 1,
      },
      {
        y: 10,
        opacity: 0,
      },
    ],
    delay: 1000,
    loop: true,
  });

  return (
    <div w-text="center">
      <Button
        variant="contained"
        w-min-w="9"
        w-h="9"
        w-p="0"
        w-overflow="hidden"
        w-transition="background-color duration-400"
      >
        <animated.div style={props}>
          <KeyboardArrowDownIcon w-text="xl" />
        </animated.div>
      </Button>
    </div>
  );
};

const HomeSection = () => {
  return (
    <section w-p="t-20 b-8" id="home">
      <div w-max-w="1120px" w-p="t-8" w-m="x-6" w-grid="~ gap-6">
        <h1 className="text-biggest" w-text="center">
          Hector Nguyen
        </h1>

        <div className="home__perfil" w-pos="relative" w-justify="self-center">
          <div w-pos="relative">
            <div
              w-border="4 solid [black]"
              w-rounded="md"
              w-aspect="1/3"
              w-p="t-3 x-3"
              w-bg="[white]"
              w-z="1"
            >
              <Image
                src={HomePerfil}
                alt="Home Perfil"
                fill={false}
                w-pos="relative"
                w-w="320px"
                w-m="auto"
                w-rounded="md"
              />
            </div>

            <HomeArrow
              w-pos="absolute left-1/4 -bottom-15"
              w-filter="~ invert-100"
            ></HomeArrow>
            <HomeLine
              w-pos="absolute -right-6 top-1/8"
              w-filter="~ invert-100"
              w-z="-1"
            ></HomeLine>

            <div
              w-w="5"
              w-h="5"
              w-z="1"
              w-bg="yellow-400"
              w-pos="absolute bottom-10 -left-2"
              w-transform="~ -rotate-30"
              w-after="content-DEFAULT absolute w-4 h-4 border-3 border-solid border-[var(--black-color)] -left-5px"
            />

            <div
              w-pos="absolute bottom-4 right-4"
              w-flex="~ col"
              w-items="end"
              w-gap="1"
              w-z="2"
            >
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                w-flex="~"
                w-items="center"
                w-text="smaller"
              >
                <span w-m="r-1">linkedin.com/in/nguyenvuhoangbt</span>
                <LinkedInIcon></LinkedInIcon>
              </Link>
              <Link
                href="https://www.github.com/"
                target="_blank"
                w-flex="~"
                w-items="center"
                w-text="smaller"
              >
                <span w-m="r-1">github.com/in/nguyenvuhoangbt</span>
                <GitHubIcon></GitHubIcon>
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                w-text="smaller"
                w-flex="~"
                w-items="center"
              >
                <span w-m="r-1">instagram.com/nvh_dp</span>
                <InstagramIcon></InstagramIcon>
              </Link>
            </div>
          </div>
        </div>

        <div w-m="t-15">
          <p w-text="center" w-m="b-6">
            <b
              w-pos="relative"
              w-text="h2 [black]"
              w-before="content-DEFAULT bg-gradient-to-r from-yellow-300 from-opacity-80 w-full h-120/100 absolute -left-2 -bottom-px -z-1"
            >
              Frontend Developer
            </b>
            , expertise in responsive design, performance optimization, and
            seamless UX. Committed to ongoing learning and innovation, eager to
            bring my skills to new projects.
          </p>

          <ScrollDownButton />
        </div>
      </div>
    </section>
  );
};

const Home: NextPageWithLayout = () => {
  return (
    <main w-overflow="auto" w-scrollbar="hide">
      <HomeSection></HomeSection>
      <HomeSection></HomeSection>
    </main>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
