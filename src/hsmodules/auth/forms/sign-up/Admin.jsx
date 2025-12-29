import { Space, Typography, Divider, Alert } from 'antd';
import Input from '../../../../components/inputs/basic/Input';
import CustomSelect from '../../../../components/inputs/basic/Select';
import PasswordInput from '../../../../components/inputs/basic/Password';

const { Text } = Typography;

const AdminForm = ({ register, control, errors }) => {
  const professions = [
    'Medical Doctor',
    'Nurse',
    'Pharmacist',
    'Laboratory Scientist',
    'Radiographer',
    'Physiotherapist',
    'Dentist',
    'Optometrist',
    'Medical Records Officer',
    'Health Information Manager',
    'Administrator',
    'Accountant',
    'Human Resources Officer',
    'IT Specialist',
    'Other',
  ];

  const positions = [
    'Chief Executive Officer (CEO)',
    'Chief Medical Officer (CMO)',
    'Chief Nursing Officer (CNO)',
    'Medical Director',
    'Head of Department',
    'Senior Consultant',
    'Consultant',
    'Senior Registrar',
    'Registrar',
    'Medical Officer',
    'Administrator',
    'Manager',
    'Supervisor',
    'Officer',
    'Other',
  ];

  const departments = [
    'Administration',
    'Medical',
    'Nursing',
    'Pharmacy',
    'Laboratory',
    'Radiology',
    'Emergency',
    'Surgery',
    'Pediatrics',
    'Obstetrics & Gynecology',
    'Internal Medicine',
    'Orthopedics',
    'Cardiology',
    'Finance',
    'Human Resources',
    'IT',
    'Records',
    'Other',
  ];

  const departmentUnits = [
    'Executive',
    'Management',
    'Operations',
    'Clinical',
    'Support Services',
    'Administrative',
    'Technical',
    'Other',
  ];

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
            Administrator Account
          </Text>
          <Text type="secondary" style={{ fontSize: '0.75rem' }}>
            This will be the primary admin account for your organization
          </Text>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
        >
          <Input
            label="First Name"
            control={control}
            name="firstname"
            errorText={errors?.firstname?.message}
            placeholder="First name"
            important
          />
          <Input
            label="Last Name"
            control={control}
            name="lastname"
            errorText={errors?.lastname?.message}
            placeholder="Last name"
            important
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
        >
          <Input
            label="Email Address"
            control={control}
            name="email"
            errorText={errors?.email?.message}
            placeholder="admin@example.com"
            type="email"
            important
          />
          <Input
            label="Phone Number"
            control={control}
            name="phone"
            errorText={errors?.phone?.message}
            placeholder="e.g., 08012345678 (11 digits)"
            important
          />
        </div>

        <Divider style={{ margin: '0.5rem 0' }} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
        >
          <CustomSelect
            label="Profession"
            control={control}
            name="profession"
            errorText={errors?.profession?.message}
            options={professions}
            placeholder="Select profession"
            important
          />
          <CustomSelect
            label="Position"
            control={control}
            name="position"
            errorText={errors?.position?.message}
            options={positions}
            placeholder="Select position"
            important
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
        >
          <CustomSelect
            label="Department"
            control={control}
            name="department"
            errorText={errors?.department?.message}
            options={departments}
            placeholder="Select department"
            important
          />
          <CustomSelect
            label="Department Unit"
            control={control}
            name="deptunit"
            errorText={errors?.deptunit?.message}
            options={departmentUnits}
            placeholder="Select unit"
            important
          />
        </div>

        <Divider style={{ margin: '0.5rem 0' }} />

        <PasswordInput
          label="Password"
          control={control}
          name="password"
          autoComplete="new-password"
          errors={errors?.password?.message}
          placeholder="Create a strong password"
          important
        />

        <Alert
          message="Password must be at least 8 characters with uppercase, lowercase, and numbers"
          type="info"
          showIcon
          style={{ fontSize: '0.75rem' }}
        />
      </Space>
    </div>
  );
};

export default AdminForm;
