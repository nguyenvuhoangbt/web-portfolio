// Assets
import HTML5 from '@/assets/svg/HTML5.svg';
import CSS3 from '@/assets/svg/CSS3.svg';
import PostCSS from '@/assets/svg/PostCSS.svg';
import Typescript from '@/assets/svg/Typescript.svg';
import Gitlab from '@/assets/svg/Gitlab.svg';
import React from '@/assets/svg/React.svg';
import Vue from '@/assets/svg/Vue.svg';
import PostgreSQL from '@/assets/svg/PostgreSQL.svg';

// Libraries
import { useState, useEffect } from 'react';

const Horizontal = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="inner"
      w-pos="relative"
      w-w="full"
      w-overflow="hidden"
      w-h="250px"
    >
      {isClient ? (
        <div className="wrapper" w-pos="absolute" w-flex="~" w-h="full">
          {[...Array(2)].map((x, i) => (
            <section
              w-flex="~"
              w-gap="20"
              w-p="x-10"
              w-animate="infinite-horizontal"
              key={i}
            >
              <HTML5 w-h="200px" w-m="auto" />
              <CSS3 w-h="200px" w-m="auto" />
              <Typescript w-h="100px" w-m="auto" />
              <PostCSS w-h="150px" w-m="auto" />
              <Gitlab w-h="130px" w-m="auto" />
              <React w-h="150px" w-m="auto" />
              <Vue w-h="150px" w-m="auto" />
              <PostgreSQL w-h="170px" w-m="auto" />
            </section>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Horizontal;
