import { useEffect, useState, lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ConfigProvider, Spin } from 'antd';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import gsap from 'gsap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import MyUserProvider from './context';
import { ObjectContext } from './context';
import { darkTheme, lightTheme } from './ui/styled/theme';
import ActionLoader from './components/action-loader/Action-Loader';
import PopUpComplaintFormComponent from './components/complaint-form/ComplaintForm';
import GlobalComplaintResponse from './components/complaint-form/GlobalComplaintResponse';
import useModuleState from './hooks/useModuleState';
import { queryClient } from './lib/queryClient';
import { setupSocketQuerySync } from './lib/socketQuerySync';
import { ProtectedRoute } from './components/auth/protected-route';
import { appRoutes } from './hsmodules/AppRoutes';

// Lazy load auth pages
const Login = lazy(() => import('./hsmodules/auth'));
const Register = lazy(() => import('./hsmodules/auth/Register'));
const Verifying = lazy(() => import('./hsmodules/auth/Verifying'));
const OrganizationSignup = lazy(
  () => import('./hsmodules/auth/forms/sign-up/sign-up'),
);
const OrganizationSignupWithType = lazy(
  () => import('./hsmodules/auth/forms/sign-up/sign-up-with-type'),
);
const OrganizationSignupHMO = lazy(
  () => import('./hsmodules/auth/forms/sign-up/signupHMO'),
);
const ForgotPassword = lazy(() => import('./hsmodules/auth/ForgotPassword'));
const CreatePassword = lazy(() => import('./hsmodules/auth/CreatePassword'));

// Lazy load external pages
const PolicyCreateForExternalLink = lazy(
  () => import('./hsmodules/ManagedCare/CreatePolicyExternalLink'),
);
const CreateTest = lazy(() => import('./hsmodules/ManagedCare/CreateTest'));
const ExternalPaymentPage = lazy(
  () => import('./hsmodules/External/ExternalPayment'),
);
const WalletOTP = lazy(() => import('./hsmodules/PouchiiWallet/walletOtp'));
const WalletPin = lazy(() => import('./hsmodules/PouchiiWallet/walletPin'));

// Lazy load main dashboard
const Dashboard = lazy(() => import('./hsmodules/Dashboard/Dashboard'));

// Lazy load NotFound
const NotFound = lazy(() => import('./notFound'));

function App() {
  const {
    state,
    setState,
    showActionLoader,
    hideActionLoader,
    toggleSideMenu,
  } = useModuleState();

  useEffect(() => {
    gsap.to('body', 0, { css: { visibility: 'visible' } });

    // Setup socket-query synchronization
    setupSocketQuerySync();
  }, []);

  const [theme] = useState('light');

  const antdTheme = {
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 4,
      fontSize: 14,
    },
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={antdTheme}>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <ObjectContext.Provider
                value={{
                  state,
                  setState,
                  showActionLoader,
                  hideActionLoader,
                  toggleSideMenu,
                }}
              >
                <MyUserProvider>
                  <PopUpComplaintFormComponent />
                  {state.ComplaintModule.complaintId && (
                    <GlobalComplaintResponse />
                  )}
                  <Router>
                    <Suspense
                      fallback={
                        <Spin
                          size="large"
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100vh',
                          }}
                        />
                      }
                    >
                      <Routes>
                        {/* ==================== AUTH ROUTES (Public) ==================== */}
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/verify" element={<Verifying />} />
                        <Route
                          path="/signup"
                          element={<OrganizationSignup />}
                        />
                        <Route
                          path="/signup/:type/:id"
                          element={<OrganizationSignupHMO />}
                        />
                        <Route
                          path="/signup/:type"
                          element={<OrganizationSignupWithType />}
                        />
                        <Route
                          path="/forgot-password"
                          element={<ForgotPassword />}
                        />
                        <Route
                          path="/create-password"
                          element={<CreatePassword />}
                        />

                        {/* ==================== EXTERNAL ROUTES (No Auth Required) ==================== */}
                        <Route
                          path="/create-policy-external-link/:hmoFacilityId/:facilityType"
                          element={<PolicyCreateForExternalLink />}
                        />
                        <Route path="/create-test" element={<CreateTest />} />
                        <Route path="/verify-otp" element={<WalletOTP />} />
                        <Route
                          path="/external-payment/:hospitalId/:patientId"
                          element={<ExternalPaymentPage />}
                        />
                        <Route path="/wallet-pin" element={<WalletPin />} />

                        {/* ==================== PROTECTED APP ROUTES ==================== */}
                        <Route
                          path="/app"
                          element={
                            <ProtectedRoute>
                              <Dashboard />
                            </ProtectedRoute>
                          }
                        >
                          {/* Nested app routes */}
                          {appRoutes()}
                        </Route>

                        {/* ==================== 404 NOT FOUND ==================== */}
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </Router>
                </MyUserProvider>
              </ObjectContext.Provider>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </LocalizationProvider>
          </ThemeProvider>
          {/* React Query DevTools - Only shows in development */}
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
