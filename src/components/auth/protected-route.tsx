import { useContext, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Spin } from 'antd';

import { UserContext } from '../../context';
import { isAuthenticated } from '../../utils/authUtils';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const userContext = useContext(UserContext) as any;

  // Ensure context is available
  if (!userContext) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const { user, authenticatingUser } = userContext;

  // Show loading spinner while checking authentication
  if (authenticatingUser) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  // Enhanced security check: Verify both user context and token validity
  const isAuthorized = user && isAuthenticated();

  return isAuthorized ? <>{children}</> : <Navigate to="/" replace />;
};
