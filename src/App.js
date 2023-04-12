import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Login from './pages/login/Login';
import Users from './pages/users/Users';
import './app.css'
import Rightbar from './pages/rightbar/Rightbar';
import User from './pages/user/User';

function App() {

  const Layout = () =>{
    return(
      <div>
        <Topbar/>
        <div className="appContainer">
          <Sidebar/>
          <div className="appOutlet">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Rightbar/>
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/users/:id',
        element: <User/>
      }
    ]
    },
    {
      path: '/login',
      element: <Login/>
    }
  ])

  return (
 
      <div>
        <RouterProvider router={router} />
      </div>

  );
}

export default App;
