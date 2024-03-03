// Libraries
import { useInView, animated, easings } from '@react-spring/web';

const InViewAnimation: React.FC<{
  children: React.ReactNode;
  startX?: number;
  startY?: number;
  duration?: number;
  delay?: number;
  easing?: (_t: number) => number;
  className?: string;
  rootMargin?: string;
}> = ({
  children,
  startX = 0,
  startY = 0,
  duration = 500,
  delay = 0,
  easing = easings.easeOutQuart,
  rootMargin = '-40% 0%',
  ...props
}) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: startX,
        y: startY,
      },
      to: {
        opacity: 1,
        x: 0,
        y: 0,
      },
      config: {
        duration,
        easing,
      },
      delay,
    }),
    {
      once: true,
      rootMargin,
    }
  );

  return (
    <animated.div ref={ref} style={springs} {...props}>
      {children}
    </animated.div>
  );
};

export default InViewAnimation;
