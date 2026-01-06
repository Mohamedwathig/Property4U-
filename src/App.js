import './App.css';
import { useEffect, useState } from 'react';
import { fetchApi } from './utils/fetchApi';
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom';
import Search from './utils/Search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PropertyDetailes from './pages/PropertyDetailes';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  const [properties, setProperties] = useState([]);
  const [propertiesBuy, setPropertiesBuy] = useState([]);
  const [propertiesRent, setPropertiesRent] = useState([]);

  useEffect(() => {
  const getProperties = async () => {
    const data = await fetchApi("/properties/v3/list", {
      limit: 20,
      offset: 0,
      postal_code: "90004",
      status: ["for_sale"],
      sort: {
        direction: "desc",
        field: "list_date",
      },
    });

    setPropertiesBuy(data);
    console.log(data);
  };

  getProperties();
}, []);

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchApi(
        "/rent/property-to-rent?identifier=REGION%5E1036&sort_by=HighestPrice&search_radius=0.0&added_to_site=1&type_of_let=LongTerm"
      );
      console.log("Fetched data:", data);
      setPropertiesRent(data);
    };

    getProperties();
  }, []);



  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home propertiesBuy={propertiesBuy} propertiesRent={propertiesRent} />} />
        <Route path='/search' element={<Search />} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/property/:propertyId" element={<PropertyDetailes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;