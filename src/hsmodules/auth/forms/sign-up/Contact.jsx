import { Space, Typography, Divider } from 'antd';
import Input from '../../../../components/inputs/basic/Input';
import GoogleAddressInput from '../../../../components/google-autocomplete';

const { Text } = Typography;

const ContactForm = ({ register, control, watch, errors, setValue }) => {
  const handleGoogleAddressSelect = (obj) => {
    setValue('facilityAddress', obj.address);
    setValue('facilityState', obj.state);
    setValue('facilityCity', obj.lga);
    setValue('facilityLGA', obj.lga);
    setValue('facilityCountry', obj.country);
  };

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
            Contact Information
          </Text>
        </div>

        <Input
          label="Official Address"
          control={control}
          name="facilityAddress"
          errorText={errors?.facilityAddress?.message}
          important
          placeholder="Enter and select address from suggestions"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
        >
          <Input
            label="LGA"
            control={control}
            name="facilityLGA"
            errorText={errors?.facilityLGA?.message}
            important
            placeholder="Local Government Area"
          />

          <Input
            label="City"
            control={control}
            name="facilityCity"
            errorText={errors?.facilityCity?.message}
            important
            placeholder="City"
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
            label="State"
            control={control}
            name="facilityState"
            errorText={errors?.facilityState?.message}
            important
            placeholder="State"
          />

          <Input
            label="Country"
            control={control}
            name="facilityCountry"
            errorText={errors?.facilityCountry?.message}
            important
            placeholder="Country"
          />
        </div>

        <Divider style={{ margin: '0.5rem 0' }} />

        <Input
          label="Phone Number"
          control={control}
          name="facilityContactPhone"
          errorText={errors?.facilityContactPhone?.message}
          important
          placeholder="e.g., 08012345678 (11 digits starting with 0)"
        />

        <Input
          label="Email Address"
          control={control}
          name="facilityEmail"
          errorText={errors?.facilityEmail?.message}
          important
          placeholder="organization@example.com"
          type="email"
        />
      </Space>
    </div>
  );
};

export default ContactForm;
