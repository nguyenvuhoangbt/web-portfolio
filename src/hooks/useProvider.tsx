import { MyThemeProvider } from '@/src/theme/MyThemeProvider';
import { AuthProvider } from '@/src/state/auth/AuthContext';
import { NavigationProvider } from '@/src/state/navigation/NavigationContext';

type ProviderType = React.FC<{ children: React.ReactNode }>;

const compose = (providers: ProviderType[]) => {
  return ({ children }: { children: React.ReactNode }) =>
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );
};

const useProvider = compose([
  AuthProvider,
  NavigationProvider,
  MyThemeProvider,
]);

export default useProvider;
