import { ReactNode, createContext, useState } from 'react';

interface INavigationContext {
  isOpenMenu: boolean;
  handleSetIsOpenMenu: (_isOpenMenu: boolean) => void;
  isShadowHeader: boolean;
  setIsShadowHeader: (_isShadowHeader: boolean) => void;
  isShowScrollUp: boolean;
  setIsShowScrollUp: (_isShowScrollUp: boolean) => void;
}

const defaultValue: INavigationContext = {
  isOpenMenu: false,
  handleSetIsOpenMenu: () => undefined,
  // setIsOpenMenu: () => undefined,
  isShadowHeader: false,
  setIsShadowHeader: () => undefined,
  isShowScrollUp: false,
  setIsShowScrollUp: () => undefined,
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
  const [isShowScrollUp, setIsShowScrollUp] = useState(false);

  const handleSetIsOpenMenu = (flag: boolean) => {
    setIsOpenMenu(flag);
    if (flag) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        isOpenMenu,
        handleSetIsOpenMenu,
        isShadowHeader,
        setIsShadowHeader,
        isShowScrollUp,
        setIsShowScrollUp,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
