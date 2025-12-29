import { useEffect, useState } from 'react';
import { Space, Typography } from 'antd';
import Input from '../../../../components/inputs/basic/Input';
import CustomSelect from '../../../../components/inputs/basic/Select';
import { facilityTypes } from '../../../app/facility-types';

const { Text } = Typography;

const OrganizationForm = ({
  register,
  control,
  errors,
  watch,
  setValue,
  option = '',
}) => {
  const [selectedType, setSelectedType] = useState(null);

  const filterFacilityTypes =
    option !== ''
      ? facilityTypes.filter((item) => item.option === option)
      : facilityTypes;

  const facTypes = filterFacilityTypes
    .map((item) => item.type)
    .sort((a, b) => a.localeCompare(b));

  const type = watch('facilityType');

  useEffect(() => {
    setSelectedType(facilityTypes.find((item) => item.type === type));
    setValue('facilityCategory', '');
  }, [type, setValue]);

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
            Organization Details
          </Text>
        </div>

        <Input
          label="Organization Name"
          control={control}
          name="facilityName"
          errorText={errors?.facilityName?.message}
          placeholder="Enter organization name"
          important
        />

        <Input
          label="Organization CEO"
          control={control}
          name="facilityOwner"
          errorText={errors?.facilityOwner?.message}
          placeholder="Enter CEO name"
        />

        <CustomSelect
          label="Organization Type"
          control={control}
          name="facilityType"
          errorText={errors?.facilityType?.message}
          options={facTypes}
          placeholder="Select organization type"
        />

        <CustomSelect
          label="Organization Category"
          control={control}
          name="facilityCategory"
          errorText={errors?.facilityCategory?.message}
          options={
            selectedType
              ? selectedType?.categories?.sort((a, b) => a.localeCompare(b))
              : []
          }
          placeholder="Select category"
          disabled={!selectedType}
          important
        />

        <Input
          label="CAC Number"
          control={control}
          name="facilityCAC"
          errorText={errors?.facilityCAC?.message}
          placeholder="Enter CAC registration number"
          important
        />
      </Space>
    </div>
  );
};

export default OrganizationForm;
