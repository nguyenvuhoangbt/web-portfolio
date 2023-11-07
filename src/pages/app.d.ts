import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
  lang?: object;
};

export interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export type LangType = {
  [key: string]: string;
};
