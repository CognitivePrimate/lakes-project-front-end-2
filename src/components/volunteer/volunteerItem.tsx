import { Volunteer } from "../../model/volunteer";
import { Container, HiddenPanel, Wrapper } from "./volunteer.Styles";




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
            <Container>
                <img id='tinyPic' src={`${user?.picture}`} alt='Volunteer Google Portrait'/>
                    
                <div>
                    {user?.firstName}
                </div>
            </Container>
            <HiddenPanel>

            </HiddenPanel>
        </Wrapper>
    );
}


export default VolunteerItem