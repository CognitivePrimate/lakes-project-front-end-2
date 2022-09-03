import { User } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, AuthContextModel } from '../../context-providers/auth-context';
import Volunteer from '../../model/volunteer';

// styles
import { Wrapper } from './header.Styles';




const Header = () => {
    const userObject: AuthContextModel = useContext(AuthContext) || null
    let displayName = ''
    let orgname = ''

    if(userObject !== null  && userObject !== undefined) {
        const user: Volunteer | null = userObject.user
        displayName = `${user?.firstName} ${user?.lastName}`
        user?.activeOrganization !== undefined ? orgname = `${user?.activeOrganization}` : orgname = ''
    }

    return (
        <Wrapper>
            <Link to="/">
                <h1 className='orgName'>{orgname}</h1>
            </Link>
            <h3>{displayName}</h3>
        </Wrapper>
    )

}

export default Header;
