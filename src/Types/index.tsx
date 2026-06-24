interface IDefaultReactProps {
  children: React.ReactNode;
}

interface IRoute {
  path: string;
  component: React.FC;
  layout: React.FC<IDefaultReactProps> | null;
}

type HttpMethods = 'get' | 'post' | 'put' | 'delete';

enum UserRole {
  Customer = 'customer',
  Vender = 'vender',
  Support = 'support',
  Admin = 'admin',
}

enum UserType {
  FrontUser = 'front_user',
  EndUser = 'end_user',
}

export type { HttpMethods, IDefaultReactProps, IRoute };

export { UserRole, UserType };
