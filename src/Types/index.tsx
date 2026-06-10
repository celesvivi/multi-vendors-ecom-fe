interface IDefaultReactProps {
  children: React.ReactNode;
}

interface IRoute {
  path: string;
  component: React.FC;
  layout: React.FC<IDefaultReactProps> | null;
}

enum UserRole {
  Customer = 'customer',
  Vender = 'vender',
  Support = 'support',
  Admin = 'admin',
}

export type { IDefaultReactProps, IRoute };
export { UserRole };
