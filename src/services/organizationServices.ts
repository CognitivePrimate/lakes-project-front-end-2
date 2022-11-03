import axios, { AxiosResponse } from 'axios';
import { setUserId } from 'firebase/analytics';
import { useNavigate } from 'react-router-dom';
import { Organization } from '../model/organization';

//firebase APIs to database
const baseURL = process.env.REACT_APP_BASE_URL

//local baseURL when running backend fb emulators
// const baseURL = process.env.REACT_APP_LOCAL_BASE_URL

//create new organization, send to db, and get new organization back - FIX ANY
export const createNewOrganization = async(organization: Organization): Promise<any> => {

  // const payload = {
  //   organization
  // }
  console.log('increateorgfunc', organization)
  try{
      const res = axios.post(`${baseURL}/organizationDB`, organization)
      console.log('New Organization Created:', (await res).data.name)
      return (await res).data
  } catch(e) {
      console.error('There was an error creating your organization', e)
  }
}