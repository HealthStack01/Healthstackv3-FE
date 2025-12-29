import { useEffect } from 'react';
import { Space, Typography } from 'antd';
import CheckboxGroup from '../../../../components/inputs/basic/Checkbox/CheckBoxGroup';

const { Text } = Typography;

const ModulesForm = ({ control, reset, setValue }) => {
  const modules = [
    'Admin',
    'Client',
    'Clinic',
    'Appointment',
    'Check-In',
    'Ward',
    'Laboratory',
    'Radiology',
    'Pharmacy',
    'Theatre',
    'Blood Bank',
    'Inventory',
    'Communication',
    'Immunization',
    'Finance',
    'Accounting',
    'Complaints',
    'Referral',
    'Epidemiology',
    'Engagement',
  ];

  useEffect(() => {
    setValue('facilityModules', modules);
  }, [setValue]);

  return (
    <div style={{ width: '100%' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <div>
          <Text
            strong
            style={{
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              display: 'block',
            }}
          >
            System Modules
          </Text>
          <Text type="secondary" style={{ fontSize: '0.75rem' }}>
            Select the modules you want to enable for your organization
          </Text>
        </div>
        <CheckboxGroup
          name="facilityModules"
          options={modules}
          control={control}
        />
      </Space>
    </div>
  );
};

export default ModulesForm;
