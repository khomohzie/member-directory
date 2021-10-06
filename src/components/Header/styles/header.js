import styled from 'styled-components/macro';
import { CgMenuRound } from 'react-icons/cg'
import { IoFilterCircleOutline } from 'react-icons/io5'
import { IoSearchCircleOutline } from 'react-icons/io5'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 80%;
    margin: 1rem auto;
`;

export const Pane = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Name = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
`;

export const MenuNav = styled(CgMenuRound)`
    color: #444444;
    font-size: 25px;
`;

export const Filter = styled(IoFilterCircleOutline)`
    color: #444444;
    font-size: 25px;
    margin: 0 20px;
`;

export const Search = styled(IoSearchCircleOutline)`
    color: #444444;
    font-size: 25px;
`;