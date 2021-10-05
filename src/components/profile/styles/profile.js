import styled from 'styled-components/macro';
import { Avatar } from '@material-ui/core'
import { RiArrowRightCircleLine } from 'react-icons/ri'

export const Container = styled.div`

`;

export const Inner = styled.div`

`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: 100%;
    max-width: 1100px;
`;

export const Pane = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;

export const Order = styled.div`
    background: #EEEEF0;
    border-color: #DDDDDD;
    width: 80%;
    margin: auto;
`;

export const OrderDiv = styled.div`
    background: #EEEEF0;
    border-color: #DDDDDD;
`;

export const Name = styled.p`
    font-size: 16px;
    margin-bottom: -10px;
`;

export const Title = styled.p`
    font-size: 14px;
    margin-bottom: -10px;
`;

export const Company = styled.p`
    font-size: 12px;
    color: #999999;
`;

export const Image = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

export const Open = styled(RiArrowRightCircleLine)`
    color: #BBBBBB;
    cursor: pointer;
    font-size: 1.5rem;
`;