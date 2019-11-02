import styled, { css } from 'styled-components'

import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    ${props => props.fixed && css`
          ${fadeIn()};
          background-color: #FFF;
          box-shadow: 0 0 20px rgba(0,0,0, 0.3);
          border-radius: 60px;
          /*left: 0;*/
          /*margin: 0 auto;*/
          padding: 15px;
          position: fixed;
          right: 0;
          top: -20px;
          transform: scale(.4);
          z-index: 1;
          display: flex;
          justify-content: space-around;
        `}
    `


export const Item = styled.li`
    padding: 0 8px;
`

export const Loader = styled.li`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`
