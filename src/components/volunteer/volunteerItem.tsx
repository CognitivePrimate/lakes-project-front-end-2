import { Volunteer } from "../../model/volunteer";
import { Card, Container, HiddenPanel, Wrapper } from "./volunteer.Styles";




interface Props {
    volunteer: Volunteer
}

const VolunteerItem = ({volunteer}: Props) => {
    let user
    if (volunteer !== null && volunteer !== undefined){
        user = volunteer
    }

    return(
        <Wrapper>
            <Card>
                <img id='tinyPic' referrerPolicy="no-referrer" src={`${user?.picture}`} alt='Volunteer Google Portrait'/>
                    
                <div>
                    <p><b>Name:</b>{` ${user?.firstName} ${user?.lastName}`}</p>
                    { user?.pronouns && <p><b>Pronouns:</b>{` ${user?.pronouns}`}</p>}
                    { user?.email && <p><b>Email:</b>{` ${user?.email}`}</p>}
                </div>
            </Card>
            <HiddenPanel>

            </HiddenPanel>
        </Wrapper>
    );
}


export default VolunteerItem