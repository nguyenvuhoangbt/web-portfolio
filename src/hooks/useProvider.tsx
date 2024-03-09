import { AuthProvider } from '@/src/state/auth/AuthContext';
import { DarkModeProvider } from '@/src/state/darkMode/DarkModeContext';
import { NavigationProvider } from '@/src/state/navigation/NavigationContext';

type ProviderType = React.FC<{ children: React.ReactNode }>;

const compose = (providers: ProviderType[]) => {
  return ({ children }: { children: React.ReactNode }) =>
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );
};

const UseProvider = compose([
  AuthProvider,
  DarkModeProvider,
  NavigationProvider,
]);

export default UseProvider;
