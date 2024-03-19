// Components
import MyButton from '@/src/components/button/MyButton';

// Libraries
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

// States & Hooks
import useTranslation from '@/src/hooks/useTranslation';

export interface ProjectCardProps {
  imageSrc: StaticImageData;
  imageAlt?: string;
  imageClassName?: string;
  title: string;
  content: string;
  link?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt = '',
  imageClassName,
  title,
  content,
  link,
}: ProjectCardProps) => {
  const lang = useTranslation();
  return (
    <article w-pos="relative" w-flex="~ col" w-gap="4">
      <div
        w-flex="~"
        w-max-h="md:310px"
        w-border="4 rounded-md black dark:white"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={false}
          className={imageClassName}
        />
      </div>
      <div>
        <h3 w-text="h3" w-font="bold">
          {title}
        </h3>
        <p w-m="y-4" w-h="md:6rem" className="md:line-clamp-4">
          {content}
        </p>
        {link && (
          <Link href={link} target="_blank">
            <MyButton icon="Visibility" text={lang.view}></MyButton>
          </Link>
        )}
      </div>
      <br />
    </article>
  );
};

export default ProjectCard;
