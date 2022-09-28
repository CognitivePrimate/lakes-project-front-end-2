import { FormEvent, useState } from "react"
import Paper from "../paper/paper"
import { Wrapper } from "./welcome.Styles"

interface Props {
  // handleSubmit: (n: any) => {}
  // preferredName: string
  updatePreferredName: (n: string) => {}
}

const PreferredName = ({ updatePreferredName }: Props) => {
  const [preferredName, setPreferredName] = useState<string>('')
  const handleChange = (e: any) => {
    e.preventDefault()
    setPreferredName(e.target.value)
    console.log('prefnamecomponent:', e.target.value)
    return preferredName
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    updatePreferredName(preferredName)
  }

  return(
    <Wrapper>
      <Paper>
        <p>What name do you prefer to be called?</p>
        <form id='preferredNameForm' action='submit' onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange}/>
        </form>
        <button type={'submit'} name={'submit'} form={'preferredNameForm'} >Next</button>
      </Paper>
    </Wrapper>
  )
}

export default PreferredName