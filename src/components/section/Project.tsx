// Assets
import Project1 from '@/assets/img/project-1.jpg';
import Project2 from '@/assets/img/project-2.jpg';
import Project3 from '@/assets/img/project-3.jpg';

// Consts
import { LangType } from '@/src/pages/app';

// Components
import MyButton from '@/src/components/button/MyButton';

// Libraries
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

            <div>
              <h3 w-text="h3">Website</h3>
              <p w-m="b-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <MyButton icon="Visibility" text="View"></MyButton>
            </div>
          </article>

          <article
            w-pos="relative"
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

            <div>
              <h3 w-text="h3">Website</h3>
              <p w-m="b-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <MyButton icon="Visibility" text="View"></MyButton>
            </div>
          </article>

          <article
            w-pos="relative"
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

            <div>
              <h3 w-text="h3">Website</h3>
              <p w-m="b-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <MyButton icon="Visibility" text="View"></MyButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
