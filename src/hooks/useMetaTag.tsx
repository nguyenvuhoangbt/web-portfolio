// Libraries
import { Helmet } from 'react-helmet';

// States & Hooks
import useTranslation from '@/src/hooks/useTranslation';

const useMetaTag = () => {
  const lang = useTranslation();
  const url = 'https://web-portfolio-lake-eight.vercel.app/';
  const title = `${lang.authorName} | ${lang.frontendDeveloper} | ${lang.portfolio}`;
  const description =
    'Explore my website portfolio, featuring modern designs and user-friendly interfaces. See how I blend creativity and functionality for memorable online experiences.';
  const ogImageUrl = `${url}_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-perfil.eaa44b7c.jpg&w=1200&q=75`;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default useMetaTag;
