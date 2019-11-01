import styled from 'styled-components'
import { Link as LinkRouter} from '@reach/router'

export const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding-bottom: 10px;
`

export const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0,0,0,.2);
    border-radius: 50%;
    /*height: auto;*/
    object-fit: cover;
    height: 200px;
    width: 200px;
`

