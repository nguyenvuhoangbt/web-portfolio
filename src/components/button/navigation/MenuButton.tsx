import NavigationContext from '@/src/state/navigation/NavigationContext';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { Button, styled } from '@mui/material';
import { NavigationProvider } from '@/src/state/navigation/NavigationContext';

export interface IMenuButton extends React.ComponentPropsWithoutRef<'button'> {}

const StyledButton = styled(Button)(() => ({
  minWidth: '2rem',
  height: '2rem',
  padding: 0,
}));

const MenuButton: React.FC<IMenuButton> = () => {
  const { setIsOpenMenu } = useContext(NavigationContext);

  return (
    <NavigationProvider>
      <StyledButton
        variant="contained"
        className="min-w-20"
        onClick={() => {
          setIsOpenMenu(true);
        }}
      >
        <MenuIcon className="text-xl" />
      </StyledButton>
    </NavigationProvider>
  );
};

export default MenuButton;
