import React, { useState } from 'react';
import { Input, Tag } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Controller } from 'react-hook-form';

interface PasswordInputProps {
  label?: string;
  name?: string;
  onChange?: (_value: any) => void;
  errors?: string;
  register?: any;
  autoComplete?: string;
  important?: boolean;
  placeholder?: string;
  control?: any;
  defaultValue?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label = 'Password',
  name,
  onChange,
  errors,
  register,
  autoComplete = 'on',
  important,
  placeholder,
  control,
  defaultValue = '',
}) => {
  // If control is provided, use Controller for proper React Hook Form integration
  if (control) {
    return (
      <div style={{ marginBottom: '8px', width: '100%' }}>
        {label && (
          <label
            htmlFor={name}
            style={{
              display: 'block',
              marginBottom: '4px',
              fontSize: '14px',
              color: errors ? '#ff4d4f' : '#000000d9',
              fontWeight: 400,
            }}
          >
            {label}
            {important && (
              <Tag
                color="error"
                style={{
                  marginLeft: '8px',
                  fontSize: '11px',
                  padding: '0 6px',
                }}
              >
                Required
              </Tag>
            )}
          </label>
        )}
        <Controller
          name={name || ''}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <Input.Password
              {...field}
              id={name}
              placeholder={placeholder}
              autoComplete={autoComplete}
              status={errors ? 'error' : undefined}
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              style={{
                width: '100%',
              }}
            />
          )}
        />
        {errors && (
          <div style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '4px' }}>
            {errors}
          </div>
        )}
      </div>
    );
  }

  // Handle register pattern (direct React Hook Form registration)
  const registerProps = register || {};
  const hasRegisterProps =
    register &&
    (register.onChange || register.onBlur || register.ref || register.name);

  return (
    <div style={{ marginBottom: '8px', width: '100%' }}>
      {label && (
        <label
          htmlFor={name}
          style={{
            display: 'block',
            marginBottom: '4px',
            fontSize: '14px',
            color: errors ? '#ff4d4f' : '#000000d9',
            fontWeight: 400,
          }}
        >
          {label}
          {important && (
            <Tag
              color="error"
              style={{ marginLeft: '8px', fontSize: '11px', padding: '0 6px' }}
            >
              Required
            </Tag>
          )}
        </label>
      )}
      <Input.Password
        id={name || registerProps.name}
        onChange={hasRegisterProps ? registerProps.onChange : onChange}
        onBlur={hasRegisterProps ? registerProps.onBlur : undefined}
        placeholder={placeholder}
        name={hasRegisterProps ? registerProps.name : name}
        autoComplete={autoComplete}
        status={errors ? 'error' : undefined}
        iconRender={(visible) =>
          visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
        }
        style={{
          width: '100%',
        }}
        ref={(e) => {
          if (hasRegisterProps && registerProps.ref) {
            registerProps.ref(e?.input || e);
          }
        }}
      />
      {errors && (
        <div style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '4px' }}>
          {errors}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
