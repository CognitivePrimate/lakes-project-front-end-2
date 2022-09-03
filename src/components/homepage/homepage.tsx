import { useContext, useEffect } from "react";
import { Route, Router, Routes, useNavigate, useRoutes } from "react-router-dom";
import { AuthContext, AuthContextModel } from "../../context-providers/auth-context";
import MenuButton from "../buttons/menuButton";
import { Wrapper } from "./homepage.Styles"
import Volunteer from "../../model/volunteer";
import Organization from "../../model/organization";


const Homepage = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();
    const logoutAndRedirect = () => {
        logout();
        navigate('/', {replace: true})
        // console.log('user', user)
      
    }
    const userObject: AuthContextModel = useContext(AuthContext)

    useEffect(() => {
        if(userObject !== null  && userObject !== undefined) {
            const user: Volunteer | null = userObject.user
            let orgs: Organization[] | undefined = user?.organizations
            let activeOrg: Organization | undefined = user?.activeOrganization
    
            
             /**
             * check user org.length
             * if 0, console log for now. need to redirect
             * if 1, user.activeorganization = orgz[0]
             * if > 1 need to redirect
             */
            if (orgs?.length !== undefined && orgs?.length > 1) {
                navigate('/orgCreateSelect', {replace: true})
            } else if (orgs?.length !== undefined && orgs?.length === 1){
                activeOrg = orgs[0]
                console.log('activeOrg', user?.activeOrganization)
            } else {
                navigate('/orgCreateSelect', {replace: true})
            }
            
            
            // if (user?.organizations.length === 0) {
            //     navigate('/createOrg', {replace: true})
            // }
            
            // if (user?.organizations.length === 1) {
            //     let active = user?.organizations[0]
            //     user?.activeOrganization = user.organizations[0]
            // }
            
    
        }
    })
    
    // const setOrganization = async (user: Volunteer) => {
       
    

    return (
        <Wrapper>
            {}
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