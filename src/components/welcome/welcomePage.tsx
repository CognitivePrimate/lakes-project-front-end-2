import { FormEvent, useState } from "react"
import { EqualityOperatorOrHigher } from "typescript"
import { useAuthUser } from "../../context-providers/auth-context"
import { Volunteer } from "../../model/volunteer"
import { updateVolunteer } from "../../services/volunteerServices"
import Aliases from "./aliases"
import PreferredName from "./preferredName"
import Pronouns from "./pronouns"


const WelcomePage = () => {
  const user: Volunteer | null = useAuthUser()
  const [newUser, setNewUser] = useState<Volunteer | null>(user)

  const updatePreferredName = async (name: string) => {
    try {
      if (user !== null) {
        user.preferredName = name
        console.log('userPrefName:', user)
        setNewUser(await updateVolunteer(user))
      }
      
    } catch (e) {
      console.log('There was an error setting your name:' + e)
    }
  }

  const updatePronouns = async (pronouns: string) => {
    try {
      if (user !== null) {
        user.pronouns = pronouns
        console.log('userPrefPronouns:', user)
        setNewUser(await updateVolunteer(user))
      }
      
    } catch (e) {
      console.log('There was an error setting your name:' + e)
    }
  }

  const updateAliases = async (aliases: string[]) => {
    try {
      if (user !== null) {
        user.otherKnownAliases = aliases
        console.log('userPrefPronouns:', user)
        setNewUser(await updateVolunteer(user))
      }
      
    } catch (e) {
      console.log('There was an error setting your name:' + e)
    }
  }
  

  return(
    <>
      <h2 style={{color: 'black'}}>Welcome, {user?.firstName}</h2>
      <h3 style={{color: 'black'}}>Please tell us a bit about yourself:</h3>
      <p style={{color: 'black'}}>{user?.preferredName + ' test'}</p>
      {user?.preferredName === '' &&
        <>
          <PreferredName updatePreferredName={updatePreferredName}/>
        </>
      }
      {user?.preferredName !== '' && newUser?.pronouns === '' &&
        <>
          <Pronouns updatePronouns={updatePronouns}/>
        </>
      }
      {user?.pronouns !== '' &&
        <>
          <Aliases updateAliases={updateAliases} />
        </>
      }
    </>
  )
}

export default WelcomePage