// Assets
import HTML5 from '@/assets/svg/HTML5.svg';
import CSS3 from '@/assets/svg/CSS3.svg';
import PostCSS from '@/assets/svg/PostCSS.svg';
import Typescript from '@/assets/svg/Typescript.svg';
import Gitlab from '@/assets/svg/Gitlab.svg';
import React from '@/assets/svg/React.svg';
import Vue from '@/assets/svg/Vue.svg';
import PostgreSQL from '@/assets/svg/PostgreSQL.svg';
import GraphQL from '@/assets/svg/GraphQL.svg';

const Horizontal = () => {
  return (
    <div w-pos="relative" w-flex="~" w-overflow="hidden" w-h="150px md:300px">
      {[...Array(2)].map((x, i) => (
        <section
          w-flex="~"
          w-gap="20"
          w-p="x-10"
          w-animate="infinite-horizontal"
          key={i}
        >
          <HTML5 w-h="100px md:200px" w-m="auto" />
          <CSS3 w-h="100px md:200px" w-m="auto" />
          <Typescript w-h="50px md:100px" w-m="auto" />
          <PostCSS w-h="75px md:150px" w-m="auto" />
          <Gitlab w-h="65px md:130px" w-m="auto" />
          <React w-h="75px md:150px" w-m="auto" />
          <Vue w-h="75px md:150px" w-m="auto" />
          <PostgreSQL w-h="85px md:170px" w-m="auto" />
          <GraphQL w-h="85px md:170px" w-m="auto" />
        </section>
      ))}
    </div>
  );
};

export default Horizontal;
