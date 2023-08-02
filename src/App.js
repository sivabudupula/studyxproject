// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/routes/home';
import Signup from './Components/routes/signup';
 import Login from './Components/routes/login';

import Sidebar from './Components/routes/sidebar';
import Dashboard from './Components/routes/dashboard';
import Profileform from './Components/routes/profileform';
import Jobs from './Components/routes/jobs';
import Calender from './Components/routes/calender';
import Courses from './Components/routes/courses';
import CoursesAssignments from './Components/routes/CoursesAssignments';
import DigitalMarketing from './Components/routes/digitalmarketing/digitalmarketing';
import DataScience from './Components/routes/datascience/datascience';
import DigiMainComponent from './Components/routes/digitalmarketing/DigiMainComponent';
import { DigiTimerProvider } from './Components/routes/digitalmarketing/DigiTimeContext';
import MainComponent from './Components/routes/datascience/MainComponent';
import { TimerProvider } from './Components/routes/datascience/TimeContext';
import PernMainComponent from './Components/routes/pern/PernMainComponent';
import { PernTimerProvider } from './Components/routes/pern/PernTimeContext';
import ArtificialMainComponent from './Components/routes/artificalandmachine/ArtificialMaincomponent';
import { ArtificialTimerProvider } from './Components/routes/artificalandmachine/ArtificialTimerContext';
import MeanMainComponent from './Components/routes/mean/MeanMainComponent';
import { MeanTimerProvider } from './Components/routes/mean/MeanTimeContext';
import PernQuizMainComponent from './Components/routes/pernquiz/PernQuizMainComponent';
import { PernQuizTimerProvider } from './Components/routes/pernquiz/PernQuizTimeContext';
import DigiQuizMainComponent from './Components/routes/digitalmarketingquiz/DigiQuizMainComponent';
import { DigiQuizTimerProvider } from './Components/routes/digitalmarketingquiz/DigiQuizTimeContext';
import DigiAssignmenttwo from './Components/routes/digitalmarketing/DigiAssignmenttwo';
import DigiAssignmentthree from './Components/routes/digitalmarketing/DigiAssignmentthree';
import DigiAssignmentfour from './Components/routes/digitalmarketing/DigiAssignmentfour';
import DigiAssignmentfive from './Components/routes/digitalmarketing/DigiAssignmentfive';
import Assignmenttwo from './Components/routes/datascience/Assignmenttwo';
import Assignmentsthree from './Components/routes/datascience/Assignmentsthree';
import Assignmentsfour from './Components/routes/datascience/Assignmentsfour';
import Assignmentfive from './Components/routes/datascience/Assignmentfive';
import Pernstack from './Components/routes/pern/pernstack';
import PernStackAssignmenttwo from './Components/routes/pern/PernstackAssignmenttwo';
import PernStackAssignmentthree from './Components/routes/pern/PernstackAssignmentthree';
import PernStackAssignmentfour from './Components/routes/pern/PernstackAssignmentfour';
import PernStackAssignmentfive from './Components/routes/pern/PernstackAssignmentfive';
import ArtificialIntelligence from './Components/routes/artificalandmachine/ArtificialIntelligence';
import Artificalassignmenttwo from './Components/routes/artificalandmachine/Artificalassignmenttwo';
import Artificalassignmentthree from './Components/routes/artificalandmachine/Artificalassignmentthree';
import Artificalassignmentfour from './Components/routes/artificalandmachine/Artificalassignmentfour';
import Artificalassignmentfive from './Components/routes/artificalandmachine/Artificalassignmentfive';

import Uiux from './Components/routes/ui/uiux';
import Mernstack from './Components/routes/mern/mernstack';
import MeanStack from './Components/routes/mean/meanstack';
import App1 from './Components/routes/pernquiz/app1';
import Buynow from './Components/routes/buynow';
import ForgotPassword from './Components/routes/ForgotPassword';
import CardsDetails from "./Components/CardsDetails";
import Cards from "./Components/Cards";
import Header from './Components/Header'
import RazorpayPaymentPopup from "./Components/PaymentMethodPage";
import Jobdetails from './Components/routes/jobdetails';
import Meanstackquiz from './Components/routes/meanstackquiz/quiz';
import DataSciencequiz from './Components/routes/datasciencequiz/quiz';
import Artificialquiz from './Components/routes/artificialquiz/quiz';
import Uiquiz from './Components/routes/uiquiz/quiz';
import Mernstackquiz from './Components/routes/mernstackquiz/quiz';
import MernstackMaincomponent from './Components/routes/mern/MernstackMainComponent';
import MernAssignmentstwo from './Components/routes/mern/MernAssignmenttwo';
import MernAssignmentsthree from './Components/routes/mern/MernAssignmentthree';
import MernAssignmentsfour from './Components/routes/mern/MernAssignmentfour';
import MernAssignmentsfive from './Components/routes/mern/Mernstackassignmentfive';
function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
         
          <Route path="/Cards" element={<Cards />} />
          <Route path="/Header" element={<Header />} />

        <Route path="/Cart/:id" element={<CardsDetails Pricing={null} />} />

        <Route path="/price/:id" element={<RazorpayPaymentPopup />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/assignments" element={<CoursesAssignments />} /> 
          <Route path="/profileform" element={<Profileform />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/calender" element={<Calender />} /> 
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/dashboard" element={<Dashboard/>}/> 
          <Route path="/buynow" element={<Buynow/>}/> 
          <Route path="/meanstackquiz" element={<Meanstackquiz/>}/> 
          <Route path="/datasciencequiz" element={<DataSciencequiz/>}/> 
          <Route path="/artificialquiz" element={<Artificialquiz/>}/> 
          <Route path="/uiquiz" element={<Uiquiz/>}/>
          <Route path='/mernstackquiz                                                                                                                                                                                                                                                                                   ' element={<Mernstackquiz/>}/> 
          <Route path="/mernstack" element={<Mernstack/>}/>
          
          <Route path="/uiux"  element={<Uiux/>}/>

          <Route path="/forgotpassword" element={<ForgotPassword/>}/> 


        
           <Route path="/digitalmarketing" element={<DigitalMarketing/>}/> 
           <Route path="/datascienceassigments" element={
            <TimerProvider>
              <MainComponent />
            </TimerProvider>
          } />

<Route path="/assignmenttwo" element={
            <TimerProvider>
              <Assignmenttwo />
            </TimerProvider>
          } />
           <Route path="/assignmentthree" element={
            <TimerProvider>
              <Assignmentsthree />
            </TimerProvider>
          } />
           <Route path="/assignmentfour" element={
            <TimerProvider>
              <Assignmentsfour />
            </TimerProvider>
          } />
           <Route path="/assignmentfive" element={
            <TimerProvider>
              <Assignmentfive />
            </TimerProvider>
          } />

           
          
          <Route path="/datascience" element={<DataScience/>}/> 
          <Route path="/digitalassignments" element={
            <DigiTimerProvider>
              <DigiMainComponent />
            </DigiTimerProvider>
          } />
           <Route path="/digitalassignment2" element={
            <DigiTimerProvider>
              <DigiAssignmenttwo />
            </DigiTimerProvider>
          } />

          <Route path="/digitalassignment3" element={
            <DigiTimerProvider>
              <DigiAssignmentthree />
            </DigiTimerProvider>
          } />

          <Route path="/digitalassignment4" element={
            <DigiTimerProvider>
              <DigiAssignmentfour />
            </DigiTimerProvider>
          } />

          <Route path="/digitalassignment5" element={
            <DigiTimerProvider>
              <DigiAssignmentfive />
            </DigiTimerProvider>
          } />

<Route path="/pernstack" element={<Pernstack/>}/> 
<Route path="/pernstackassignments" element={
            <PernTimerProvider>
              <PernMainComponent />
            </PernTimerProvider>
          } />

<Route path="/pernstackassignmenttwo" element={
            <PernTimerProvider>
              <PernStackAssignmenttwo />
            </PernTimerProvider>
          } />

<Route path="/pernstackassignmentthree" element={
            <PernTimerProvider>
              <PernStackAssignmentthree />
            </PernTimerProvider>
          } />
          <Route path="/pernstackassignmentfour" element={
            <PernTimerProvider>
              <PernStackAssignmentfour />
            </PernTimerProvider>
          } />
          <Route path="/pernstackassignmentfive" element={
            <PernTimerProvider>
              <PernStackAssignmentfive />
            </PernTimerProvider>
          } />
  <Route path="/artificialIntelligence" element={<ArtificialIntelligence/>}/> 
  <Route path="/artificialassigments" element={
            <ArtificialTimerProvider>
              <ArtificialMainComponent />
            </ArtificialTimerProvider>
          } />
 <Route path="/artificialassignmenttwo" element={
            <ArtificialTimerProvider>
              <Artificalassignmenttwo />
            </ArtificialTimerProvider>
          } />
           <Route path="/artificialassignmentthree" element={
            <ArtificialTimerProvider>
              <Artificalassignmentthree />
            </ArtificialTimerProvider>
          } />
           <Route path="/artificialassignmentfour" element={
            <ArtificialTimerProvider>
              <Artificalassignmentfour />
            </ArtificialTimerProvider>
          } />
           <Route path="/artificialassignmentfive" element={
            <ArtificialTimerProvider>
              <Artificalassignmentfive />
            </ArtificialTimerProvider>
          } />

<Route path="/meanstack" element={<MeanStack/>}/> 
<Route path="/meanstackassignments" element={
            <MeanTimerProvider>
              <MeanMainComponent />
            </MeanTimerProvider>
          } />


<Route path="/app1" element={
            <PernQuizTimerProvider>
              <PernQuizMainComponent />
            </PernQuizTimerProvider>
          } />

<Route path="/digitalmarketingquiz" element={
            <DigiQuizTimerProvider>
              <DigiQuizMainComponent />
            </DigiQuizTimerProvider>
          } />
 <Route path="/Mernstack" element={<Mernstack/>}/> 
           <Route path="/mernstackassignments" element={
            <TimerProvider>
              <MernstackMaincomponent />
            </TimerProvider>
          } />

<Route path="/mernassignmenttwo" element={
            <TimerProvider>
              <MernAssignmentstwo />
            </TimerProvider>
          } />
           <Route path="/mernassignmentthree" element={
            <TimerProvider>
              <MernAssignmentsthree />
            </TimerProvider>
          } />
           <Route path="/mernassignmentfour" element={
            <TimerProvider>
              <MernAssignmentsfour />
            </TimerProvider>
          } />
           <Route path="/mernassignmentfive" element={
            <TimerProvider>
              <MernAssignmentsfive />
            </TimerProvider>
          } />



        </Routes>
       
      
      </Router>


    </div>
  );
}

export default App;
