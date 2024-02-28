// Libraries
import { useInView, animated, config } from '@react-spring/web';

const InViewAnimation: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: {
        ...config.slow,
        clamp: true,
      },
    }),
    {
      once: true,
      rootMargin: '-40% 0%',
    }
  );

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
};

export default InViewAnimation;
