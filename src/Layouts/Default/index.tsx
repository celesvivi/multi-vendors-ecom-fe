import { IDefaultReactProps } from '@/Types';

import HeaderComponent from '@/Layouts/Default/Components/header';
import FooterComponent from '@/Layouts/Default/Components/footer';

const DefaultLayout: React.FC<IDefaultReactProps> = ({ children }) => {
  return (
    <div style={{ paddingLeft: 88, paddingRight: 88 }}>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default DefaultLayout;
