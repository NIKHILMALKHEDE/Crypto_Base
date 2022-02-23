import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Middle from '../components/Middle'
import Right from '../components/Right'
import Section from '../components/Section'

function Home() {
  return (
    <div>
       <Announcement/>
       <Wrapper>
          <Section/>
          <Middle/>
          <Right/>
       </Wrapper>
    </div>
  )
}

export default Home;

const Wrapper = styled.div`
  display: flex;
`