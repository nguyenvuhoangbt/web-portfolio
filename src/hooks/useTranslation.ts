import { useRouter } from 'next/router';
import en from '@/public/lang/en.js';
import vi from '@/public/lang/vi.js';
import zh from '@/public/lang/zh.js';

const useTranslation = () => {
  const { locale } = useRouter();

  if (locale === 'vi') return vi;
  if (locale === 'zh') return zh;

  return en;
};

export default useTranslation;
