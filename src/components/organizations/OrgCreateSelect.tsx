import { FormEvent, useContext, useEffect, useState } from "react";
import { Route, Router, Routes, useNavigate, useRoutes } from "react-router-dom";
import { AuthContext, AuthContextModel, useAuthUser } from "../../context-providers/auth-context";
import MenuButton from "../buttons/menuButton";
import {Volunteer, volContext} from "../../model/volunteer";
import { Organization, OrgContext } from "../../model/organization";
import Paper from "../paper/paper";
import { Container, Wrapper } from "./orgCreateSelect.Styles";
import SubmitButton from "../buttons/submitButton";
import { ObjectId } from "mongodb";
import { createNewOrganization } from "../../services/organizationServices";
import { updateVolunteer } from "../../services/volunteerServices";

// interface Props {
//   org: Organization;
// }

const OrgCreateSelect = () => {
  // const userObject: AuthContextModel = useContext(AuthContext)
  const navigate = useNavigate()
  // let user: Volunteer | null
  const user = useAuthUser()
  // user = userObject.user
  const [pendingOrg, setPendingOrg] = useState<Organization | any>({
    name: '',
    leads: [],
    volunteers: []
  })
  
  // console.log('userOrgCreate', userObject.user)

  const createOrg = (e: FormEvent) => {
    try{
      e.preventDefault()
      setPendingOrg({
        ...pendingOrg, 
        // leads: [user]
      })
      createNewOrganization(pendingOrg).then(async (org) => {
        if (user !== null) {
          console.log('notnull')
          user.organizations.push({
            orgName: org.name,
            orgId: org._id
          })
          user.lead = true
          await updateVolunteer(user)
          user.activeOrganization = org.name
          console.log('userupdatedWithOrg', user)
          navigate('/', {replace: true})
          
        }
      })
  
      
    } catch (e) {
      console.log('error:', e)
    }
  }

  const selectOrg = (e: FormEvent) => {
    try{
      e.preventDefault()
      
    } catch (e) {
      console.log('We encountered an error selecting your org:' + e)
    }
  }
  
  return(
    
    <Wrapper>
      {/* if user has active org already/ they only have one org so it's auto set */}
      {!user?.activeOrganization && 
      <>
        <Container>
        <h2>Welcome,</h2>
        <h2 style={{color: 'black'}}>{user?.firstName}</h2>
        <h3>Please name your new organization.</h3>
        </Container>
        <Paper>
          <form id="createOrgForm" action="submit" onSubmit={createOrg}>
            <Container>
              <label htmlFor="orgName">Organization Name:</label>
              <input type="text" name="orgName" id="orgName" value={pendingOrg.name} onChange={(e) => {setPendingOrg({
              ...pendingOrg,
              name: e.target.value,
              leads: [{
                firstName: user?.firstName,
                lastName: user?.lastName,
                email: user?.email,
                _id: user?._id
              }]})}}/>            
            </Container>
          </form>
        </Paper>
        <SubmitButton type={'submit'} name={'submit'} form={'createOrgForm'}/>
      </>
      }
      { user?.organizations !== undefined && user?.organizations?.length > 1 && 
        <>
          <Container>
            <h2>Welcome,</h2>
            <h2 style={{color: 'black'}}>{user?.firstName}</h2>
            <h3>Please select an organization to use.</h3>
          </Container>
          <Container>
            <form id='selectOrgForm' action='submit' onSubmit={selectOrg}>
              <p style={{color: 'black'}}>{JSON.stringify(user.organizations)}</p>
              <select>
                {user.organizations.map((org: OrgContext, index: number) => 
                  <option key={`${org}-${index}`} value={org.orgName}>{org.orgName}</option>
                )}
              </select>
              <button id='confirmOrgSelection'>Confirm</button>
            </form>
          </Container>
        </>
      }
      
    </Wrapper>
  )
}

export default OrgCreateSelect