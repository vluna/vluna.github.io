import React from 'react'
import styled from 'styled-components';
import Link from './Link'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.primary10};
  padding: 10px;
  border-radius: .5em;
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
    border-radius: 2em 2em 0 0;
    width: 80%;
    margin: .5em auto 0;
    padding: 2em;
    height: 100vh;
    background: ${(props) => props.theme.colors.light};

    h2 {
      text-align: center;
      margin: 0;
      color: ${(props) => props.theme.colors.primary};
    }

    p {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const StyledLink = styled(Link)`
  padding: .5em 1em;
  border-radius: .5em;
  background-color: ${(props) => props.theme.colors.primary10};
  justify-content: center;
  display: flex;
`

const Popup = ({ title, id, content }) => {
  return (
    <div>
      <Container>
        <Link href="#open-modal" title={title} />
      </Container>
      <PopupContent id="open-modal">
        <div>
          <h2>Why?</h2>
          <p><strong>Energy Consumption:</strong> websites with a lot of graphics, animations, and videos contribute to higher carbon emissions from data centers and servers as they require more energy to load and render.</p>
          <p><strong>Accessibility:</strong> with lots of visual elements, it can sometimes be hard to navigate for people with colour blindness or visual impairments.</p>
          <p><strong>Page Speed:</strong> shortening the loading times does not only improve the UX but also reduces the time users spend waiting for pages to load, which can save energy and reduce carbon emissions.</p>

          <StyledLink href="#" title="Close" />
        </div>
      </PopupContent>
    </div>
  )
}

export default Popup


    


