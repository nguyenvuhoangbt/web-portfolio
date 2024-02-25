import NavigationContext from '@/src/state/navigation/NavigationContext';
import MyButton from '@/components/button/MyButton';
import { useContext } from 'react';
import { NavigationProvider } from '@/src/state/navigation/NavigationContext';
import { MyButtonProps } from './MyButton';

const ButtonMenu: React.FC<MyButtonProps> = () => {
  const { setIsOpenMenu } = useContext(NavigationContext);

  return (
    <NavigationProvider>
      <MyButton
        className="w-8 lg:hidden"
        icon="Menu"
        onClick={() => {
          setIsOpenMenu(true);
        }}
      />
    </NavigationProvider>
  );
};

export default ButtonMenu;
