import { useRouter } from 'next/router';
import en from '@/public/lang/en.js';
import zh from '@/public/lang/zh.js';

const UseTranslation = () => {
  const { locale } = useRouter();

  if (locale === 'zh') return zh;

  return en;
};

export default UseTranslation;
