import { useState } from "react";
import deconstructor from "../../helperFunctions/objectdeconstructor";
import { Volunteer } from "../../model/volunteer";
import { Card, Container, HiddenPanel, Wrapper } from "./volunteer.Styles";




interface Props {
    volunteer: Volunteer
}

const VolunteerItem = ({ volunteer }: Props) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    let user: Volunteer = volunteer
    // if (volunteer !== null && volunteer !== undefined) {user = volunteer}
    const hoursArray: [] | undefined = user?.hoursWorked
    


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
                        
                        <Container className="dummybox">
                            
                        </Container>
                        <Container className="textInfoBox text">
                            {user?.preferredName && <p><b>Preferred Name:</b>{` ${user?.preferredName}`}</p>}
                            {user !== undefined && user?.additionalTrainings.length > 0 && <p><b>Additional Trainings:</b>{` ${user?.additionalTrainings}`}</p>}
                            <div className='hoursBox'>
                                {user !== undefined && user.hoursWorked.length > 0 &&  <span className='hoursWorked'><b>Hours Worked: </b></span>}
                                {user !== undefined && user.hoursWorked.length > 0 && hoursArray?.map((object, index) => 
                                    <span key={`${index}`}><b></b>{deconstructor(object) + `, `}</span>
                                )} 

                            </div>
                            
                            
                            
                        </Container>
                    </HiddenPanel>
                }
            </Card>
        </Wrapper>
    );
}


export default VolunteerItem