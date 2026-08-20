import { UserRole } from '.';

const afterSignInLink: Record<UserRole, string> = {
  [UserRole.Customer]: '/',
  [UserRole.Vender]: '/shop',
  [UserRole.Support]: '/support',
  [UserRole.Admin]: '/admin',
};

export { afterSignInLink };
