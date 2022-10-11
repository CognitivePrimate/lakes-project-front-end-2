import { useEffect, useState } from "react"
import { useAuthUser } from "../../context-providers/auth-context"
import { Volunteer } from "../../model/volunteer"
import { fetchVolunteers } from "../../services/volunteerServices"
import VolunteerItem  from '../volunteer/volunteerItem'
import { Wrapper } from './volunteerDatabase.Styles'


const VolunteerDataBaseMenu = () => {
    const [volunteerList, setVolunteerList] = useState<Volunteer[]>([])
    let userPrenullCheck: Volunteer | null = useAuthUser()
    let user: Volunteer 
    if (userPrenullCheck !== null){
        user = userPrenullCheck
    }
    
   
    //delete user & pull in all users from org to map 
    //to individual volunteer items
    const loadVolunteers = () => {
        fetchVolunteers(user).then((res) => {
            console.log('vol', res.data)
            setVolunteerList(res.data);
            console.log('volunteerlist', volunteerList)
        });
    }

    

    const resetSearch = () => {
        loadVolunteers();
    }
    
    useEffect(loadVolunteers, []);
    
    
    
    return(
        <Wrapper>
            { volunteerList.length > 0 && 
                volunteerList.map((volunteer, index) => 
                <VolunteerItem
                volunteer={volunteer}
                key={`${user.email}-${index}`}
                />
            )}
            <button onClick={loadVolunteers}>Reload</button>
        </Wrapper>
    )
}

export default VolunteerDataBaseMenu