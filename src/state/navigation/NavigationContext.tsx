import { ReactNode, createContext, useState } from 'react';

interface INavigationContext {
  isOpenMenu: boolean;
  setIsOpenMenu: (_isOpenMenu: boolean) => void;
  isShadowHeader: boolean;
  setIsShadowHeader: (_isShadowHeader: boolean) => void;
}

const defaultValue: INavigationContext = {
  isOpenMenu: false,
  setIsOpenMenu: () => undefined,
  isShadowHeader: false,
  setIsShadowHeader: () => undefined,
};

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationContext = createContext<INavigationContext>(defaultValue);

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isShadowHeader, setIsShadowHeader] = useState(false);

  return (
    <NavigationContext.Provider
      value={{ isOpenMenu, setIsOpenMenu, isShadowHeader, setIsShadowHeader }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
