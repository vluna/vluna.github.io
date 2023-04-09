import React from 'react'
import styled from 'styled-components';
import Link from './Link'

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.primary10};
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`

const PopupContent = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.colors.primary10};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;

  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: white;
  }

  header {
    font-weight: bold;
  }

  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
`

const CloseLink = styled(Link)`
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;

  &:hover {
    color: black;
  }
`

const Popup = ({ title, id, content }) => {
  return (
    <div>
      <Container>
        <Link href="#open-modal" title={title} />
      </Container>
      <PopupContent id="open-modal">
        <div>
          <CloseLink href="#" title="Close" />
          <h1>Why?</h1>
          <ul>
            <li>Energy Consumption: websites with a lot of graphics, animations, and videos require more energy to load and render, which means they contribute to higher carbon emissions from data centers and servers. </li>
            <li>Accessibility: with lots of visual elements, it can sometimes be difficult to navigate for people with color blindness or visual impairments.</li>
            <li>Page Speed: websites load faster and have shorter loading times. This does not only improve the UX but also reduces the time users spend waiting for pages to load, which can save energy and reduce carbon emissions.</li>
          </ul>
        </div>
      </PopupContent>
    </div>
  )
}

export default Popup


    


