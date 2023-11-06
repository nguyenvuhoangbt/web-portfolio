import { ReactNode, createContext, useState } from 'react';

interface INavigationContext {
  isOpenMenu: boolean;
  setIsOpenMenu: (_isOpenMenu: boolean) => void;
}

const defaultValue: INavigationContext = {
  isOpenMenu: false,
  setIsOpenMenu: () => undefined,
};

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationContext = createContext<INavigationContext>(defaultValue);

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <NavigationContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
