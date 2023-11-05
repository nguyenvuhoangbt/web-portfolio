import { AuthProvider } from '@/src/state/auth/AuthContext';
import { MyThemeProvider } from '@/src/theme/MyThemeProvider';
import { NavigationProvider } from '@/src/state/navigation/NavigationContext';

type ProviderType = React.FC<{ children: React.ReactNode }>;

const compose = (providers: ProviderType[]) => {
  return ({ children }: { children: React.ReactNode }) =>
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );
};

export const Provider = compose([
  AuthProvider,
  NavigationProvider,
  MyThemeProvider,
]);
