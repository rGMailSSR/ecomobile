import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ApplicationsPage } from '../../pages/ApplicationsPage';
import { DetailingPage } from '../../pages/DetailingPage';
import { ErrorPage } from '../../pages/ErrorPage';
import { ExpensesPage } from '../../pages/ExpensesPage';
import { HomePage } from '../../pages/HomePage';
import { MyNumbersPage } from '../../pages/MyNumbersPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { RemainingPackagesPage } from '../../pages/RemainingPackagesPage';
import { ServicesPage } from '../../pages/ServicesPage';
import { TopUpBalancePage } from '../../pages/TopUpBalancePage';

export const router = createBrowserRouter([
  {
    path: '/ecomobile/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/ecomobile/applications',
            element: <ApplicationsPage />,
          },
          {
            path: '/ecomobile/detailing',
            element: <DetailingPage />,
          },
          {
            path: '/ecomobile/expenses',
            element: <ExpensesPage />,
          },
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/ecomobile/myNumbers',
            element: <MyNumbersPage />,
          },
          {
            path: '/ecomobile/profile',
            element: <ProfilePage />,
          },
          {
            path: '/ecomobile/remainingPackages',
            element: <RemainingPackagesPage />,
          },
          {
            path: '/ecomobile/services',
            element: <ServicesPage />,
          },
          {
            path: '/ecomobile/topUpBalance',
            element: <TopUpBalancePage />,
          },
        ],
      },
    ],
  },
]);
