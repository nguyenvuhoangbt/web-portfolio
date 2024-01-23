// Assets
import HomePerfil from '@/assets/img/home-perfil.jpg';
import CurvedArrow from '@/assets/svg/curved-arrow.svg';
import RandomLines from '@/assets/svg/random-lines.svg';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Consts
import { LangType } from '@/src/pages/app';

// Components
import ButtonScrollDown from '@/components/button/ScrollDown';

// Libraries
import Image from 'next/image';
import Link from 'next/link';

const SectionWelcome: React.FC<{ lang: LangType }> = ({ lang }) => {
  return (
    <section w-p="t-20 b-8" id="home">
      <div w-max-w="1120px" w-p="t-8" w-m="x-6" w-grid="~ gap-6">
        <h1 className="text-biggest" w-text="center" w-font="bold">
          {lang.authorName}
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

            <CurvedArrow
              w-pos="absolute left-1/4 -bottom-15"
              w-filter="~ invert-100"
            />
            <RandomLines
              w-pos="absolute -right-6 top-1/8"
              w-filter="~ invert-100"
              w-z="-1"
            ></RandomLines>

            <div
              w-w="5"
              w-h="5"
              w-z="1"
              w-bg="yellow-400"
              w-pos="absolute bottom-10 -left-2"
              w-transform="~ -rotate-30"
              w-after="content-DEFAULT absolute w-4 h-4 border-3 border-solid border-$black-color -left-5px"
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
                href="mailto:nguyenvuhoangbt@gmail.com"
                target="_blank"
                w-text="smaller"
                w-flex="~"
                w-items="center"
              >
                <span w-m="r-1">nguyenvuhoangbt@gmail.com</span>
                <EmailIcon></EmailIcon>
              </Link>
            </div>
          </div>
        </div>

        <div w-m="t-15" w-text="center">
          <p w-m="b-6">
            <b
              w-pos="relative"
              w-text="h3 [black]"
              w-before="content-DEFAULT bg-gradient-to-r from-yellow-300 from-opacity-80 w-full h-120/100 absolute -left-2 -bottom-px -z-1"
            >
              {lang.welcome}
            </b>
          </p>

          <ButtonScrollDown />
        </div>
      </div>
    </section>
  );
};

export default SectionWelcome;
