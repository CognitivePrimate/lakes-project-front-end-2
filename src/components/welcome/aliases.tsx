import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import Paper from "../paper/paper"
import { Wrapper } from "./welcome.Styles"

interface Props {
  updateAliases: (n: string[]) => {}
}

const Aliases = ({ updateAliases }: Props) => {
  const [aliases, setAliases] = useState<string[]>([''])
  let navigate = useNavigate()
  const handleChange = (e: any) => {
    e.preventDefault()
    setAliases([...aliases, e.target.value])
    console.log('aliasescomponent:', e.target.value)
    return aliases
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    updateAliases(aliases)
    navigate('/Homepage', {replace: true})
  }

  return(
    <Wrapper>
    <Paper>
      <p>Are there other names you've gone by that you feel comfortable sharing?</p>
      <form id='aliasesForm' action='submit' onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} placeholder='if none, just click next'/>
      </form>
      <button type={'submit'} name={'submit'} form={'aliasesForm'} >Next</button>
    </Paper>
  </Wrapper>
  )
}

export default Aliases