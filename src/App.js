import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import About from "./components/about"
import Experience from "./components/experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Interests from "./components/Interests"
import MyProjects from "./components/MyProjects"
import AddMe from "./components/AddMe"
import {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [DP, setDp] = useState('')
    const [street, setstreet] = useState('')
    const [address, setaddress] = useState('')
    const [shortInfo, setshortInfo] = useState('')
    const [contactQR, setcontactQR] = useState('')
    const [CV, setCV] = useState('')
    const [interest, setinterest] = useState('')
    const [expRemark, setExpRemark] = useState('')
    const [isloading, setisLoading] = useState(true)
    
    useEffect(() => {
        const fetchAbout = async () => {
            const result = await axios('about')
            const obj = result.data[0]
            try {
              setfirstName(obj.first_name);
              setlastName(obj.last_name);
              setDp(obj.dp);
              setstreet(obj.address_street);
              setaddress(obj.full_address);
              setshortInfo(obj.short_description);
              setCV(obj.cv);
              setcontactQR(obj.contact_qr);
              setinterest(obj.interests);
              setExpRemark(obj.experience_remarks);
              setisLoading(false);
            } catch (error) {
              console.log(error)
            }
        }
        fetchAbout()
      }, [])
  return (
    <Router>
      <Navbar contactQr={contactQR} dp={DP} cv={CV} firstName={firstName} lastName={lastName}/>
      <div className="container-fluid p-0">
        <Route path = "/" 
        exact 
        component={() => 
        <About 
        isloading={isloading}
        DP={DP}
        firstName={firstName}
        lastName={lastName}
        street={street}
        address={address}
        shortInfo={shortInfo}
        />
        }        
        />
        <Route path = "/experience" component={()=><Experience expRemark={expRemark}/>} />
        <Route path = "/education" component={Education} />
        <Route path = "/addme" component={() => <AddMe contactQr={contactQR} />} />
        <Route path = "/my-projects" component={MyProjects} />
        <Route path = "/interests" component={() => <Interests interest={interest}/>} />
        <Route path = "/skills" component={Skills} />
      </div>
    </Router>
  );
}

export default App;
