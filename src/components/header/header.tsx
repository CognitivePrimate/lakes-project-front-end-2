import { User } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, AuthContextModel, useAuthUser } from '../../context-providers/auth-context';
import {Volunteer} from '../../model/volunteer';

// styles
import { Wrapper } from './header.Styles';




const Header = () => {
    // const userObject: AuthContextModel = useContext(AuthContext) || null
    const user: Volunteer | null = useAuthUser()
    // console.log('headerUser:', user)
    let displayName = ''
    let orgname = ''

    if(user !== null  && user !== undefined) {
        displayName = `${user?.firstName} ${user?.lastName}`
        user?.activeOrganization !== undefined ? orgname = `${user?.activeOrganization}` : orgname = ''
    }

    return (
        <Wrapper>
            {/* {user !== null && 
                <Link to="/">
                    <h1 className='orgName'>{orgname}</h1>
                </Link>
            } */}
            <Link to="/">
                <h1 className='orgName'>{orgname}</h1>
            </Link>
            <h3>{displayName}</h3>
        </Wrapper>
    )

}

export default Header;
