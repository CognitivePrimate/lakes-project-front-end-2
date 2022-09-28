import { FormEvent, useState } from "react"
import Paper from "../paper/paper"
import { Wrapper } from "./welcome.Styles"

interface Props {
  updatePronouns: (n: string) => {}
}

const Pronouns = ({ updatePronouns }: Props) => {
  const [preferredPronouns, setPreferredPronouns] = useState<string>('')
  const handleChange = (e: any) => {
    e.preventDefault()
    setPreferredPronouns(e.target.value)
    console.log('prefnamecomponent:', e.target.value)
    return preferredPronouns
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    updatePronouns(preferredPronouns)
  }

  return(
    <Wrapper>
    <Paper>
      <p>What are your pronouns?</p>
      <form id='preferredPronounForm' action='submit' onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange}/>
      </form>
      <button type={'submit'} name={'submit'} form={'preferredPronounForm'} >Next</button>
    </Paper>
  </Wrapper>
  )
}

export default Pronouns