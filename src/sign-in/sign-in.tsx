import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import {Route, Navigate} from 'react-router-dom'
import { useContext, useState } from 'react';
import { auth } from '../firebaseConfig';
import { AuthContext } from '../context-providers/auth-context';


const SignInPage = () => {
    // instantiate context
    const {signInWithGoogle, register, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useContext(AuthContext)

    return(
        <div>
            {user !== null && user.user !== null ? <Navigate to='/Homepage' replace={true} /> : null}
            <div>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
            <div>
                <h3>Register User</h3>
                <input placeholder='email' onChange={(e) => {setEmail(e.target.value)}}/>
                <input placeholder='password' onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={() => register}>Create User</button>
            </div>

            <div>
                <h3>Login</h3>
                <input placeholder='email' onChange={(e) => {setEmail(e.target.value)}}/>
                <input placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/>

                <button onClick={() => login}>Login</button>
            </div>
        </div>
    )
}

export default SignInPage;

