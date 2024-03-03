import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useRouter } from 'next/router';
import { styled } from '@mui/material';

const ButtonGroupStyledToggle = styled(ToggleButtonGroup)(() => ({
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

  const langList = [
    {
      value: 'en',
      label: 'en',
    },
    {
      value: 'zh',
      label: '中',
    },
  ];

  return (
    <ButtonGroupStyledToggle
      size="small"
      value={lang}
      exclusive
      onChange={handleChangeLang}
      aria-label="language switch"
      w-h="32px"
    >
      {langList.map(({ value, label }, i) => (
        <ToggleButton
          key={i}
          value={value}
          aria-label="en"
          w-w="40px"
          w-text="dark:white 14px"
          w-hover="dark:bg-[#ffffff1a]"
        >
          {label}
        </ToggleButton>
      ))}
    </ButtonGroupStyledToggle>
  );
};

export default ButtonSwitchLanguage;
