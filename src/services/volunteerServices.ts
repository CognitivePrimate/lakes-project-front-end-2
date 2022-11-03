import axios, { AxiosResponse } from 'axios';
import { Volunteer } from '../model/volunteer';
import { fire } from '../firebaseConfig'

import { setUserId } from 'firebase/analytics';
import { useNavigate } from 'react-router-dom';


//firebase APIs to database
// const baseURL = process.env.REACT_APP_BASE_URL

//local baseURL when running backend fb emulators
const baseURL = process.env.REACT_APP_LOCAL_BASE_URL
//create user tokens for backend auth? i think
const createToken = async () => {
    const user = fire.auth().currentUser;
    const token = user && (await user.getIdToken());

    const payloadHeader = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return payloadHeader
}

//create new volunteer, send to db, and get new volunteer back - FIX ANY
export const createNewVolunteer = async (volunteer: Volunteer): Promise<any> => {
    const header = await createToken()

    const payload = {
        volunteer
    }

    try {
        const res = axios.post(`${baseURL}/Volunteers`, payload, header)
        console.log('header:', header)
        return (await res).data
    } catch (e) {
        console.error(e)
    }

}

//Get all volunteers
export function fetchVolunteers(user: Volunteer): Promise<any> {
    const headers = {
        headers: {
            activeOrg: JSON.stringify(user.activeOrganization)
        }
    }
    //need to account for active org. here or in backend?
    return axios.get(`${baseURL}/VolunteerDB`, headers)
}

export async function fetchExistingVolunteerAndSetUser(token: string): Promise<any> {
    // console.log('inFetchVol')
    const headers = {
        headers: {
            authorization: 'Bearer ' + token
        }
    }
    // console.log('headers', headers)
    return await axios.post(`${baseURL}/volunteerDB/tokenAuth`, token, headers).then(async (res: AxiosResponse<any, any>) => {
        // console.log('inPost')
        let responseObject = await res.data
        if (responseObject._id) {
            console.log('FERes', responseObject)
            return await responseObject
        } else {
            console.log('else', responseObject)
            const res = await axios.post(`${baseURL}/volunteerDB`, responseObject.user)
            return await ((res)).data
        }

    })
}

export const updateVolunteer = async (volunteer: Volunteer): Promise<Volunteer> => {
    return await axios.put(`${baseURL}/volunteerDB/${volunteer._id}`, volunteer).then((res) => {
        console.log('putresponse', res.data)
        return res.data
    })
}
