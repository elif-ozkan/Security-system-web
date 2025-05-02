import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Products from "./components/Products/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ITWorker from "./components/ITWorker/ITWorker";
import NITWorker from "./components/NITWorker/NITWorker";
import StorageProduct from "./components/StorageProduct/StorageProduct";
import Antivirüs from "./components/Antivirüs/Antivürüs";
import Directory from "./components/Directory/directory";
import Ergonomics from "./components/Ergonomics/ergonomic";
import IDS from "./components/IDS/Ids";
import DataPassword from "./components/Data/Data";
import Question from "./components/Questions/Questions";
import NetworkSecurity from "./components/NetworkSecurity/NetworkSecurity";
import Choose from "./components/Choose/Choose";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
import Charts from "./components/adminDashboard/Charts";
import Team from "./components/Team/Team";
import Login from "./components/Login/login";
import CreateAccount from "./components/CreateAccount/createAccount";
import GuestPage from "./components/GuestPage/GuestPage";
import UserPage from "./components/Login/UserPage";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Itworker" element={<ITWorker />} />
          <Route path="/Nıtworker" element={<NITWorker />} />
          <Route path="/storage" element={<StorageProduct />} />
          <Route path="/Nıtworker/storage" element={<StorageProduct />} />
          <Route path="/antıvırus" element={<Antivirüs />} />
          <Route path="/Nıtworker/Antıvırus" element={<Antivirüs />} />
          <Route path="/dırectory" element={<Directory />} />
          <Route path="/Nıtworker/dırectory" element={<Directory />} />
          <Route path="/ergonomıcs" element={<Ergonomics />} />
          <Route path="/NITWorker/ergonomıc" element={<Ergonomics />} />
          <Route path="/IDS" element={<IDS />} />
          <Route path="/ITWorker/IDS" element={<IDS />} />
          <Route path="/dataproduct" element={<DataPassword />} />
          <Route path="/ITWorker/dataproduct" element={<DataPassword />} />
          <Route path="/questions" element={<Question />} />
          <Route path="/ITWorker/questıons" element={<Question />} />
          <Route path="/NetworkSecurity" element={<NetworkSecurity />} />
          <Route
            path="/ITWorker/NetworkSecurity"
            element={<NetworkSecurity />}
          />
          <Route path="/choose" element={<Choose />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/admin/charts" element={<Charts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login/createaccount" element={<CreateAccount />} />
          <Route path="/guestpage" element={<GuestPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/user/:id/product/:productId" element={<UserPage />} />
        </Routes>
        {/*<MainPage />*/}
      </Router>
    </>
  );
}

export default App;
