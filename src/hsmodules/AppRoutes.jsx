import { lazy } from 'react';
import { Route } from 'react-router-dom';

import Overview from './app/Overview';

import ClinicHome from './Clinic/ClinicHome';
import EpidemiologyHome from './Epidemiology/EpidemiologyHome';
import FacilityHome from './Admin/FacilityHome';
import FinanceHome from './Finance/FinanceHome';
import WardHome from './Ward/WardHome';
import InventoryHome from './inventory/InventoryHome';
import LaboratoryHome from './Laboratory/LaboratoryHome';
import PharmacyHome from './Pharmacy/PharmacyHome';
import RadiologyHome from './Radiology/RadiologyHome';
import TheatreHome from './Theatre/TheatreHome';
import ClientHome from './Client/ClientHome';
import GlobalAdminDashboard from './GlobalAdmin/GlobalAdminDashboard';
import ProviderRelationshipHome from './ProviderRelationship/providerRelationshipHome';
import CaseManagementHome from './CaseManagement/caseManagementHome';

const AccountHome = lazy(() => import('./Accounts/AccountHome'));
const ManagedCareHome = lazy(() => import('./ManagedCare/ManagedCareHome'));
const CorporateHome = lazy(() => import('./Corporate/CorporateHome'));
const ReferralHome = lazy(() => import('./Referral/ReferralHome'));
const CRMHome = lazy(() => import('./CRM/CrmHome'));
const ARTHome = lazy(() => import('./ART/ArtHome'));
const ImmunizationHome = lazy(() => import('./Immunization/ImmunizationHome'));
const BloodBankHome = lazy(() => import('./Bloodbank/BloodBankHome'));
const ScheduleHome = lazy(() => import('./Schedule/ScheduleHome'));
const GlobalAdminHome = lazy(() => import('./GlobalAdmin/GlobalAdminHome'));

const NewComplaints = lazy(() => import('./Complaints/new-complaints'));
const DetailComplaint = lazy(() => import('./Complaints/DetailComplaints'));
const UserAccountPage = lazy(() => import('./Admin/UserDetail'));
const OrganizationsPage = lazy(() => import('./Organization/Organizations'));

import { AccountsRoutes } from './routes/account-routes';
import { accountingRoutes } from './routes/accounting-routes';
import { adminRoutes } from './routes/admin-routes';
import { AppointmentRoutes, WorkFlowRoutes } from './routes/appointment-routes';
import { bloodBankRoutes } from './routes/blood-bank';
import { clientRoutes } from './routes/client-routes';
import { clinicRoutes } from './routes/clinic-routes';
import { communicationRoutes } from './routes/communication-routes';
import { crmRoutes } from './routes/crm-routes';
import { epidRoutes } from './routes/epid-routes';
import { managedCareRoutes } from './routes/managecare-routes';
import { financeRoutes } from './routes/finance-routes';
import { globalAdminRoutes } from './routes/global-admin-routes';
import { inventoryRoutes } from './routes/inventory-routes';
import { laboratoryRoutes } from './routes/lab-routes';
import { pharmacyRoutes } from './routes/pharmacy-routes';
import { radiologyRoutes } from './routes/radiology-routes';
import { referralRoutes } from './routes/referral-routes';
import { patientProfileRoutes } from './routes/patient-portal';
import { immunizationRoutes } from './routes/immunization-routes';
import { documentationRoutes } from './routes/documentation-routes';
import { theatreRoutes } from './routes/theatre-routes';
import { wardRoutes } from './routes/ward-routes';
import { corporateRoutes } from './routes/corporate-routes';
import { scheduleRoutes } from './routes/schedule-routes';
import { marketPlaceRoutes } from './routes/marketPlace';
import { artRoutes } from './routes/art-routes';
import { providerRelationshipRoutes } from './routes/providerRelationship-routes';
import { AnalyticsRoutes } from './routes/analytics-routes';
import { caseManagementRoutes } from './routes/caseManagement-routes';

const renderRoutes = (routes) => {
  return routes.map((route) => {
    const { path, Component } = route;
    return <Route key={path} path={path} element={<Component />} />;
  });
};

export const appRoutes = () => {
  return (
    <>
      <Route index element={<Overview />} />

      <Route path="user" element={<UserAccountPage />} />
      <Route path="Organizations" element={<OrganizationsPage />} />
      <Route path="global-dashboard" element={<OrganizationsPage />} />

      <Route path="accounts" element={<AccountHome />}>
        {renderRoutes(AccountsRoutes)}
      </Route>

      <Route path="schedule" element={<ScheduleHome />}>
        {renderRoutes(scheduleRoutes)}
      </Route>

      <Route path="corporate" element={<CorporateHome />}>
        {renderRoutes(corporateRoutes)}
      </Route>

      <Route path="appointments">{renderRoutes(AppointmentRoutes)}</Route>
      <Route path="appointments/workflow">{renderRoutes(WorkFlowRoutes)}</Route>

      {renderRoutes(documentationRoutes)}

      <Route path="clinic" element={<ClinicHome />}>
        {renderRoutes(clinicRoutes)}
      </Route>

      <Route path="clients" element={<ClientHome />}>
        {renderRoutes(clientRoutes)}
      </Route>

      <Route path="epidemiology" element={<EpidemiologyHome />}>
        {renderRoutes(epidRoutes)}
      </Route>

      <Route path="admin" element={<FacilityHome />}>
        {renderRoutes(adminRoutes)}
      </Route>

      <Route path="finance" element={<FinanceHome />}>
        {renderRoutes(financeRoutes)}
      </Route>

      <Route path="global-admin" element={<GlobalAdminHome />}>
        <Route index element={<GlobalAdminDashboard />} />
        {renderRoutes(globalAdminRoutes)}
      </Route>

      <Route path="inventory" element={<InventoryHome />}>
        {renderRoutes(inventoryRoutes)}
      </Route>

      <Route path="laboratory" element={<LaboratoryHome />}>
        {renderRoutes(laboratoryRoutes)}
      </Route>

      <Route path="pharmacy" element={<PharmacyHome />}>
        {renderRoutes(pharmacyRoutes)}
      </Route>

      <Route path="radiology" element={<RadiologyHome />}>
        {renderRoutes(radiologyRoutes)}
      </Route>

      <Route path="theatre" element={<TheatreHome />}>
        {renderRoutes(theatreRoutes)}
      </Route>

      {/* ========== ANALYTICS MODULE ========== */}
      <Route path="analytics" element={<TheatreHome />}>
        {renderRoutes(AnalyticsRoutes)}
      </Route>

      {/* ========== WARD MODULE ========== */}
      <Route path="ward" element={<WardHome />}>
        {renderRoutes(wardRoutes)}
      </Route>

      {/* ========== MANAGED CARE MODULE ========== */}
      <Route path="managed-care" element={<ManagedCareHome />}>
        {renderRoutes(managedCareRoutes)}
      </Route>

      {/* ========== PROVIDER RELATIONSHIP MODULE ========== */}
      <Route
        path="provider-relationship"
        element={<ProviderRelationshipHome />}
      >
        {renderRoutes(providerRelationshipRoutes)}
      </Route>

      {/* ========== CASE MANAGEMENT MODULE ========== */}
      <Route path="case-management" element={<CaseManagementHome />}>
        {renderRoutes(caseManagementRoutes)}
      </Route>

      {/* ========== CRM MODULE ========== */}
      <Route path="crm" element={<CRMHome />}>
        {renderRoutes(crmRoutes)}
      </Route>

      {/* ========== COMPLAINTS MODULE ========== */}
      <Route path="complaints" element={<NewComplaints />} />
      <Route path="complaints/detailComplaints" element={<DetailComplaint />} />

      {/* ========== REFERRAL MODULE ========== */}
      <Route path="referral" element={<ReferralHome />}>
        {renderRoutes(referralRoutes)}
      </Route>

      {/* ========== COMMUNICATION MODULE ========== */}
      <Route path="communication">{renderRoutes(communicationRoutes)}</Route>

      {/* ========== PATIENT PORTAL MODULE ========== */}
      <Route path="patient-portal">{renderRoutes(patientProfileRoutes)}</Route>

      {/* ========== MARKET PLACE MODULE ========== */}
      <Route path="market-place">{renderRoutes(marketPlaceRoutes)}</Route>

      {/* ========== ACCOUNTING MODULE ========== */}
      <Route path="accounting">{renderRoutes(accountingRoutes)}</Route>

      {/* ========== IMMUNIZATION MODULE ========== */}
      <Route path="immunization" element={<ImmunizationHome />}>
        {renderRoutes(immunizationRoutes)}
      </Route>

      {/* ========== BLOOD BANK MODULE ========== */}
      <Route path="blood-bank" element={<BloodBankHome />}>
        {renderRoutes(bloodBankRoutes)}
      </Route>

      {/* ========== ART MODULE ========== */}
      <Route path="art" element={<ARTHome />}>
        {renderRoutes(artRoutes)}
      </Route>
    </>
  );
};
