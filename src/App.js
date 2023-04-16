import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Login from './pages/login/Login';
import Users from './pages/users/Users';
import './app.css'
import Rightbar from './pages/rightbar/Rightbar';
import User from './pages/user/User';
import Eleves from './pages/eleves/Eleves';
import Presence from './pages/presence/Presence';
import Inscription from './pages/inscription/Inscription';
import Professeur from './pages/professeur/Professeur';

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
        path: '/users/:id',
        element: <User/>
      },
      {
        path: '/eleves',
        element: <Eleves/>
      },
      {
        path: '/inscription',
        element: <Inscription/>
      },
      {
        path: '/professeur',
        element: <Professeur/>
      },
      {
        path: '/publications',
        element: <Users/>
      },
      {
        path: '/presence',
        element: <Presence/>
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
