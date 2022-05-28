import './App.css';
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// Hometemplate
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
// UserTemplate
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
// AdminTemplate
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import UserManagement from './pages/Admin/UserManagement/UserManagement';
import ListManagement from './pages/Admin/ListManagement/ListManagement';
import ServiceManagement from './pages/Admin/ServiceManagement/ServiceManagement';


// npx create-react-app friverr
// npm react-router-dom@5.3.0
// npm i react-redux
// npm i redux
// npm i redux-thunk
// npm i lodash
// npm i axios
// npm i moment   (để định dạng thời gian)
// npm i antd   (Để lấy mẫu component)
// npm install --save @ant-design/icons   (để lấy icon antd)
// npm install formik --save   (để làm lấy thông tin từ form)
// npm install slick-carousel --save   (để làm slide trượt)
// npm i redux-devtools-extension
// npm install node-sass --save 

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />

        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />

        <AdminTemplate path="/admin/usermanagement" exact Component={UserManagement} />
        <AdminTemplate path="/admin/listmanagement" exact Component={ListManagement} />
        <AdminTemplate path="/admin/servicemanagement" exact Component={ServiceManagement} />

        <HomeTemplate path="/" exact Component={Home} />

      </Switch> 
    </Router>
  );
}

export default App;
