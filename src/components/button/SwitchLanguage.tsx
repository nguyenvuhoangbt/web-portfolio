import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useRouter } from 'next/router';
import { styled } from '@mui/material';

const ButtonGroupStyledToggle = styled(ToggleButtonGroup)(({ theme }) => ({
  // '& .MuiToggleButtonGroup-grouped': {
  //   border: 0,
  //   '&:not(:first-of-type)': {
  //     borderRadius: 2,
  //   },
  //   '&:first-of-type': {
  //     borderRadius: 2,
  //   },
  // },
}));

const ButtonSwitchLanguage = () => {
  const router = useRouter();

  const [lang, setLang] = React.useState<string | null>(
    router.locale ? router.locale : 'en'
  );

  const handleChangeLang = (
    _event: React.MouseEvent<HTMLElement>,
    newLang: 'en' | 'vi' | 'zh' | null
  ) => {
    if (newLang !== null) {
      setLang(newLang);
      router.push('/', '/', { locale: newLang });
    }
  };

  return (
    <ButtonGroupStyledToggle
      size="small"
      value={lang}
      exclusive
      onChange={handleChangeLang}
      aria-label="language switch"
      w-h="8"
    >
      {/* <ToggleButton value="vi" aria-label="vi" w-w="10">
        vi
      </ToggleButton> */}
      <ToggleButton
        value="en"
        aria-label="en"
        w-w="10"
        w-text="dark:white"
        w-hover="dark:bg-[#ffffff1a]"
      >
        en
      </ToggleButton>
      <ToggleButton
        value="zh"
        aria-label="zh"
        w-w="10"
        w-text="dark:white"
        w-hover="dark:bg-[#ffffff1a]"
      >
        中
      </ToggleButton>
    </ButtonGroupStyledToggle>
  );
};

export default ButtonSwitchLanguage;
