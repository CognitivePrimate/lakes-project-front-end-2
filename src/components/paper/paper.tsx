import styled from 'styled-components';
import device from '../../media-query-sizes';
import {Wrapper} from './paper.Styles'
interface Props {
  children: React.ReactNode;
}

const Paper = (({children}: Props) => {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
})

export default Paper