import { IDefaultReactProps } from '@/Types';

import HeaderComponent from '@/Layouts/Components/BaseHeader';
import FooterComponent from '@/Layouts/Components/UserFooter';

const UserLayout: React.FC<IDefaultReactProps> = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default UserLayout;
