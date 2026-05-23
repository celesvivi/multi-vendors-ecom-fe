import { IDefaultReactProps } from '@/Types';

import HeaderComponent from '@/Layouts/Components/BaseHeader';
import FooterComponent from '@/Layouts/Components/BaseFooter';

const AdminLayout: React.FC<IDefaultReactProps> = ({ children }) => {
  return (
    <div style={{ paddingLeft: 88, paddingRight: 88 }}>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default AdminLayout;
