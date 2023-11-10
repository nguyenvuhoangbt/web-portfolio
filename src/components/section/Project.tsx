// Assets
import Project1 from '@/assets/img/project-1.jpg';
import Project2 from '@/assets/img/project-2.jpg';
import Project3 from '@/assets/img/project-3.jpg';

//Icons
import VisibilityIcon from '@mui/icons-material/Visibility';

//Components
import ButtonIconWithText from '@/src/components/button/IButton';

import { LangType } from '@/src/pages/app';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const SectionProject: React.FC<{ lang: LangType }> = ({ lang }) => {
  return (
    <section
      id="about"
      w-p="b-8"
      w-bg="container"
      w-transition="colors duration-500"
    >
      <div w-max-w="1120px" w-p="t-8" w-m="x-6" w-grid="~ gap-6">
        <h2 w-text="center biggest" w-font="bold">
          Projects
        </h2>

        <div w-pos="relative" w-justify="self-center" w-grid="~ gap-8">
          <article
            w-pos="relative"
            className="group"
            w-flex="~ col"
            w-gap="4"
            w-bg="light-200"
            w-p="4"
            w-rounded="md"
          >
            <Link href="#" target="_blank">
              <Image
                src={Project1}
                alt="About Perfil"
                fill={false}
                w-pos="relative"
                w-m="auto"
                w-rounded="md"
                w-w="full"
                w-aspect="video"
                w-object="cover"
              />
            </Link>

            <div className="project__content">
              <h3 className="project__title" w-text="h3">
                Website
              </h3>
              <p className="project__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ButtonIconWithText
                icon="Visibility"
                text="View"
              ></ButtonIconWithText>
            </div>
          </article>

          <article
            w-pos="relative"
            className="group"
            w-flex="~ col"
            w-gap="4"
            w-bg="light-200"
            w-p="4"
            w-rounded="md"
          >
            <Link href="#" target="_blank">
              <Image
                src={Project2}
                alt="About Perfil"
                fill={false}
                w-pos="relative"
                w-m="auto"
                w-rounded="md"
                w-w="full"
                w-aspect="video"
                w-object="cover"
              />
            </Link>

            <div className="project__content">
              <h3 className="project__title" w-text="h3">
                Website
              </h3>
              <p className="project__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="project__button">
                <Link
                  href="#"
                  target="_blank"
                  w-w="max"
                  w-flex="~"
                  w-items="center"
                  w-gap="1"
                >
                  <VisibilityIcon w-text="normal"></VisibilityIcon>
                  <span>View</span>
                </Link>
              </div>
            </div>
          </article>

          <article
            w-pos="relative"
            className="group"
            w-flex="~ col"
            w-gap="4"
            w-bg="light-200"
            w-p="4"
            w-rounded="md"
          >
            <Link href="#" target="_blank">
              <Image
                src={Project3}
                alt="About Perfil"
                fill={false}
                w-pos="relative"
                w-m="auto"
                w-rounded="md"
                w-w="full"
                w-aspect="video"
                w-object="cover"
              />
            </Link>

            <div className="project__content">
              <h3 className="project__title" w-text="h3">
                Website
              </h3>
              <p className="project__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="project__button">
                <Link
                  href="#"
                  target="_blank"
                  w-w="max"
                  w-flex="~"
                  w-items="center"
                  w-gap="1"
                >
                  <VisibilityIcon w-text="normal"></VisibilityIcon>
                  <span>View</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
