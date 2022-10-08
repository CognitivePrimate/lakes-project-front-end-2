import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// imported components
import Header from './components/header/header';


// styles
import GlobalStyle from "./GlobalStyles";
import Homepage from './components/homepage/homepage';
import SchedulingMenu from './components/scheduling/scheduling-menu';
import CreateNewSchedule from './components/scheduling/create-new-schedule';
import SignInPage from './sign-in/sign-in';
import { AuthContextProvider } from './context-providers/auth-context';
import VolunteerDataBaseMenu from './components/volunteerDataBaseMenu/volunteerDataBaseMenu';
import OrgCreateSelect from './components/organizations/OrgCreateSelect';
import WelcomePage from './components/welcome/welcomePage';


function App() {
  return (
    <AuthContextProvider>
      <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route index element={<SignInPage />}/>
          <Route path='Homepage' element={<Homepage />}/>
          <Route path='SchedulingMenu' element={<SchedulingMenu />}/>
          <Route path='CreateNewSchedule' element={<CreateNewSchedule/>}/>
          <Route path='VolunteerDatabaseMenu' element={<VolunteerDataBaseMenu />}/>
          <Route path='orgCreateSelect' element={< OrgCreateSelect/>}/>
          <Route path='welcome' element={<WelcomePage/>}/>
        </Routes>
        <GlobalStyle />
      </Router>
    </div>
    </AuthContextProvider>
  );
}

export default App
