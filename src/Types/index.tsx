interface IDefaultReactProps {
  children: React.ReactNode;
}

interface IRoute {
  path: string;
  component: React.FC;
  layout: React.FC<IDefaultReactProps> | null;
}

type HttpMethods = 'get' | 'post' | 'put' | 'delete';

export type { 
  HttpMethods,
  IDefaultReactProps, IRoute 
};
