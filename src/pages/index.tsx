import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './app';
import Image from 'next/image';

// Image
import HomePerfil from '@/assets/img/home-perfil.jpg';
import HomeArrow from '@/assets/img/curved-arrow.svg';
import HomeLine from '@/assets/img/random-lines.svg';

const Home: NextPageWithLayout = () => {
  return (
    <main className="overflow-hidden">
      <section className="pt-22 pb-8" id="home">
        <div className="max-w-1120px mx-6 grid gap-6">
          <h1>Hector Nguyen</h1>

          <div className="home__perfil">
            <div className="home__image">
              <Image src={HomePerfil} alt="Home Perfil" className="home__img" />
              <div className="home__shadow"></div>

              <Image src={HomeArrow} alt="" className="home__arrow"></Image>
              <Image src={HomeLine} alt="" className="home__line"></Image>

              <div
                className="absolute w-5 h-5 bg-[var(--first-color)]"
                w-transform="~ -rotate-30"
                w-after="content-none"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
