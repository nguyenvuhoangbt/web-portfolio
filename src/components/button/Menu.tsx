import NavigationContext from '@/src/state/navigation/NavigationContext';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { NavigationProvider } from '@/src/state/navigation/NavigationContext';
import { IButton } from './IButton';

const ButtonMenu: React.FC<IButton> = ({ variant = 'contained' }: IButton) => {
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

export default ButtonMenu;
