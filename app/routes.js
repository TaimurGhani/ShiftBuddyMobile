import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import EmployeeLogin from '../components/employee/EmployeeLogin';
import ManagerLogin from '../components/manager/ManagerLogin';
import EmployeeDashboard from '../components/employee/EmployeeDashboard';
import EmployeeShift from '../components/employee/EmployeeShift';

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    ManagerLogin: { screen: ManagerLogin },
    EmployeeLogin: { screen: EmployeeLogin },
    EmployeeDashboard: { screen: EmployeeDashboard },
    EmployeeShift: { screen: EmployeeShift }
  },
  {
  initialRouteName: 'Home'
  }
);
