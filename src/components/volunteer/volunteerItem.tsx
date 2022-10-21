import { useState } from "react";
import { Volunteer } from "../../model/volunteer";
import { Card, Container, HiddenPanel, Wrapper } from "./volunteer.Styles";




interface Props {
    volunteer: Volunteer
}

const VolunteerItem = ({ volunteer }: Props) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    let user
    if (volunteer !== null && volunteer !== undefined) {
        user = volunteer
    }

    return (
        <Wrapper>
            <Card onClick={() => setIsActive(!isActive)}>
                <div className='previewCard'>
                    <img id='tinyPic' referrerPolicy="no-referrer" src={`${user?.picture}`} alt='Volunteer Google Portrait' />

                    <div className="textInfoBox">
                        <p><b>Name:</b>{` ${user?.firstName} ${user?.lastName}`}</p>
                        {user?.pronouns && <p><b>Pronouns:</b>{` ${user?.pronouns}`}</p>}
                        {user?.email && <p><b>Email:</b>{` ${user?.email}`}</p>}
                    </div>

                </div>

                {isActive &&
                    <HiddenPanel>
                        
                        <Container className="textInfoBox">
                            
                        </Container>
                        <Container className="textInfoBox">
                            {user?.additionalTrainings !== undefined &&
                            user?.additionalTrainings.length > 0 && <p><b>Addition Trainings:</b>{` ${user?.additionalTrainings}`}</p>}
                            {user?.preferredName && <p><b>Preferred Name:</b>{` ${user?.preferredName}`}</p>}
                            
                        </Container>
                    </HiddenPanel>
                }

            </Card>

        </Wrapper>
    );
}


export default VolunteerItem