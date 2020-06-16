import styled from "styled-components"

export const PageNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--site-max-width);
  margin: 0 0 40px 0;

  input {
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      opacity: 0.7;
    }
  }
`

export const ImgWrapper = styled.div`
  width: 30px;
  height: 30px;
`

export const Current = styled.div`
  font-family: "Muli Black", Arial, Helvetica, sans-serif;
`
