import * as React from 'react';
import { Steps } from 'antd';
import {
  ShopOutlined,
  ContactsOutlined,
  UserOutlined,
} from '@ant-design/icons';

const CreateOrganizationStepper = ({ steps, activeStep = 0 }) => {
  const icons = {
    0: <ShopOutlined />,
    1: <ContactsOutlined />,
    2: <UserOutlined />,
  };

  const items = steps.map((label, index) => ({
    title: label,
    icon: icons[index],
  }));

  return (
    <div style={{ width: '100%' }}>
      <Steps
        current={activeStep}
        items={items}
        style={{
          padding: '0 20px',
        }}
      />
    </div>
  );
};

export default CreateOrganizationStepper;
