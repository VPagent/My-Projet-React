import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import SharedLayoutPage from 'pages/SharedLayoutPage';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const PlanningPage = lazy(() => import('./pages/PlanningPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const AwardsPage = lazy(() => import('./pages/AwardsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayoutPage />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<HomePage />} />
          <Route path="planning" element={<PlanningPage />} />
          <Route path="awards" element={<AwardsPage />} />
        </Route>
        <Route path="/" element={<PublicRoute restricted />}>
          <Route path="auth" element={<AuthPage />} />
        </Route>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};