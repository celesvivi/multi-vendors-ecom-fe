import { IDefaultReactProps } from '@/Types';

import HeaderComponent from '@/Layouts/Components/BaseHeader';
import FooterComponent from '@/Layouts/Components/BaseFooter';

const VenderLayout: React.FC<IDefaultReactProps> = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default VenderLayout;
