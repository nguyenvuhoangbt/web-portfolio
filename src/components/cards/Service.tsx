// Libraries
import React from 'react';

export interface ServiceCardProps {
  title: string;
  content: string;
  icon?: React.JSX.Element;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  content,
  icon,
}: ServiceCardProps) => {
  return (
    <article
      w-pos="relative"
      w-flex="~"
      w-max-w="<md:245px md:270px"
      w-h="<md:265px md:300px"
      className="group"
    >
      <div
        w-flex="~ col"
        w-gap="4"
        w-justify="content-start"
        w-p="x-4  y-10"
        w-border="4 solid"
        w-rounded="lg"
        w-bg="white dark:black"
        w-z="1"
      >
        <div w-flex="~" w-gap="3" w-align="items-center">
          {icon}
          <h3 w-text="1.25em" w-font="bold">
            {title}
          </h3>
        </div>
        <p w-text="<md:1rem md:1.125rem">{content}</p>
      </div>
      <div
        w-pos="absolute top-0px left-0px"
        w-w="full"
        w-max-w="<md:245px md:270px"
        w-h="<md:265px md:300px"
        w-border="4 solid primary dark:primary"
        w-rounded="lg"
        w-transform="~ duration-500"
        w-group-hover="translate-x-3 translate-y-3"
      />
    </article>
  );
};

export default ServiceCard;
