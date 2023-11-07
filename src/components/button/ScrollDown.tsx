import { IButton } from './IButton';
import { Button } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ScrollDownButton: React.FC<IButton> = ({
  variant = 'contained',
}: IButton) => {
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

  return (
    <Button
      variant={variant}
      w-min-w="9"
      w-h="9"
      w-p="0"
      w-overflow="hidden"
      w-transition="background-color duration-400"
    >
      <animated.div style={props}>
        <KeyboardArrowDownIcon w-text="xl" />
      </animated.div>
    </Button>
  );
};

export default ScrollDownButton;
