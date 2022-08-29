import { useContext } from "react";
import { Route, Router, Routes, useNavigate, useRoutes } from "react-router-dom";
import { AuthContext } from "../../context-providers/auth-context";
import MenuButton from "../buttons/menuButton";
import { Wrapper } from "./homepage.Styles"


const Homepage = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();
    const logoutAndRedirect = () => {
        logout();
        navigate('/', {replace: true})
        console.log('user', user)
      
    }
    const user = useContext(AuthContext)

    return (
        <Wrapper>
            <MenuButton 
                to={'/SchedulingMenu'}
                text={'Schedules'}
            />
            <MenuButton 
                to={'/ShiftLogsMenu'}
                text={'Shift Logs'}
            />
            <MenuButton 
                to={'/IncidentReportsMenu'}
                text={'Incident Reports'}
            />
            <MenuButton 
                to={'/EmergencyContactsMenu'}
                text={'Emergency Contacts'}
            />
            <MenuButton 
                to={'/VolunteerDatabaseMenu'}
                text={'Volunteer Database'}
            />
            
            <button onClick={logoutAndRedirect}>Sign Out</button>
    
        </Wrapper>
    )
}

export default Homepage;