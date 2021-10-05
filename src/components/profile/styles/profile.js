import styled from 'styled-components/macro';

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

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;