import { MyButtonProps } from './MyButton';
import { Button } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ButtonScrollDown: React.FC<MyButtonProps> = ({
  variant = 'contained',
}: MyButtonProps) => {
  const props = useSpring({
    from: {
      y: -16,
      opacity: 0,
    },
    to: [
      {
        y: 0,
        opacity: 1,
      },
      {
        y: 10,
        opacity: 0,
      },
    ],
    loop: true,
    config: {
      tension: 75,
    },
  });

  const scrollToAbout = () => {
    const sectionAbout = document.getElementById('about');
    console.log('ss');
    sectionAbout?.scrollIntoView();
  };

  return (
    <Button
      variant={variant}
      w-min-w="9"
      w-h="9"
      w-p="0"
      w-overflow="hidden"
      w-transition="background-color duration-500"
      onClick={scrollToAbout}
    >
      <animated.div style={props}>
        <KeyboardArrowDownIcon w-text="xl" />
      </animated.div>
    </Button>
  );
};

export default ButtonScrollDown;
