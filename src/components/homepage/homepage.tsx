import { useContext, useEffect } from "react";
import { Route, Router, Routes, useNavigate, useRoutes } from "react-router-dom";
import { AuthContext, AuthContextModel, useAuthUser } from "../../context-providers/auth-context";
import MenuButton from "../buttons/menuButton";
import { Wrapper } from "./homepage.Styles"
import {Volunteer} from "../../model/volunteer";
import {Organization, OrgContext} from "../../model/organization";


const Homepage = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();
    const logoutAndRedirect = () => {
        logout();
        navigate('/', {replace: true})
        // console.log('user', user)
      
    }
    // const userObject: AuthContextModel = useContext(AuthContext)
    const user = useAuthUser()

    useEffect( () => {
       const volunteerStatusCheck = async () => {
        if(user !== null  && user !== undefined) {
            // console.log('useeffect', user)
            // const user: Volunteer | null =  userObject.user
            let orgs: OrgContext[] | undefined = user.organizations
            // let activeOrg: OrgContext | undefined = user.activeOrganization
    
            
             /**
             * check user org.length
             * if 0, console log for now. need to redirect
             * if 1, user.activeorganization = orgz[0]
             * if > 1 need to redirect
             */
            //if volunteer belongs to more than one org redirect to select org to use
            console.log('orgs.length', orgs?.length)
            if (orgs?.length !== undefined && orgs?.length > 1) {
                console.log("first")
                navigate('/orgCreateSelect', {replace: true})
            //if vol belongs to only one org, set that org as active and navigate home
            } else if (orgs?.length !== undefined && orgs?.length === 1){
                user.activeOrganization = orgs[0]
                console.log('Active Organization:', user.activeOrganization)
                navigate('/Homepage', {replace: true})
            //if volunteer has no orgs, navigate to create a new one
            } else {
                console.log('else')
                navigate('/orgCreateSelect', {replace: true})
            }
    
        }
       }
        volunteerStatusCheck()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
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