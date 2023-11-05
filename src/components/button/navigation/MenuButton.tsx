import NavigationContext from '@/src/state/navigation/NavigationContext';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { NavigationProvider } from '@/src/state/navigation/NavigationContext';

export interface IMenuButton extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'text' | 'outlined' | 'contained';
}

const MenuButton: React.FC<IMenuButton> = ({
  variant = 'contained',
}: IMenuButton) => {
  const { setIsOpenMenu } = useContext(NavigationContext);

  return (
    <NavigationProvider>
      <Button
        variant={variant}
        className="min-w-8 h-8 p-0"
        onClick={() => {
          setIsOpenMenu(true);
        }}
      >
        <MenuIcon className="text-xl" />
      </Button>
    </NavigationProvider>
  );
};

export default MenuButton;
