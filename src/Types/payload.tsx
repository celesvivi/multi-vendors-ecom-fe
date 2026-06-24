import { UserRole, UserType } from '.';

interface signUpBody {
  email: string;
  username: string;
  password: string;
  role: UserRole;
  userType: UserType;
}

interface signInBody {
  email: string;
  password: string;
  userType: UserType;
}

export type { signInBody, signUpBody };
