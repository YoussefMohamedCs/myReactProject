import logo from './logo.svg';
import './App.css';
import Navbar from './Componnets/Navbar/Navbar';
import Navlist from './Componnets/Navlist/Navlist';
import SwipeHome from './Componnets/Swipehome/SwipeHome';
import SecondSection from './Componnets/SecondSection/SecondSection';
import Thirdsection from './Componnets/Thirdsection/Thirdsection';
import Fourthsection from './Componnets/Fourthsection/Fourthsection';
import Last from './Componnets/Last/Last';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './Componnets/Footer/Footer';
import Layout from './Componnets/layout/Layout';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Bedroom from './Pages/BedRoom/Bedroom';
import Dining from './Pages/Dining';
import Homefirniture from './Pages/Homefirniture';
import Living from './Pages/Living';
import Office from './Pages/Office';
import Launge from './Pages/Launge';
import Chair from './Pages/Chair';
import Hospital from './Pages/Hospital';
import Bed from './Pages/Bed';
import Utility from './Pages/Utility';
import Table from './Pages/Table';
import Conatct from './Pages/Conatct';
import PeoductDetails from './Pages/PeoductDetails';
import Cart from './Pages/Cart/Cart';
function App() {
  let router = createBrowserRouter([
    {path:'' , element:<Layout /> , children:[
      {path:'/' , element:<HomePage />} ,
        {path:'about' , element: <About />} ,
        {path:'HomeFurniture' , element:<Homefirniture /> , children:[
          {index:true , element:<Bedroom />} ,
          {path:'bedroom' , element:<Bedroom />} ,
          {path:'dining' , element: <Dining />} ,
          {path:'living' , element:<Living />}
        ]}  
        , {path:'Office' , element:<Office />  , children:[
          {index: true , element: <Launge /> },
          {path:'launge' , element:<Launge />} ,
          {path : 'chair' , element: <Chair />} ,
          {path : 'table' , element : <Table />}
        ]} 
        , 
        {path:"Hospital"  , element:<Hospital /> , children :[
          {index:true , element: <Bed />} ,
          {path:"bed" , element:<Bed />} , 
          {path : "utility" , element : <Utility />}
        ]} 
, {path : "contact" , element : <Conatct />} ,
{path : "product/:productId" , element: <PeoductDetails />} ,
{path:"cart" , element:<Cart />}
    ]}
  ])
  return (

<RouterProvider router={router}></RouterProvider>
  );
}

export default App;
