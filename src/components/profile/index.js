import React from 'react'
import { Inner, Item, Container, Pane, Order, Name, Title, Company } from './styles/profile'

export default function Profile({ children, letter, ...restProps }) {
    return (
        <Inner>
            <Order>{letter}</Order>
            <Item {...restProps}>
                {children}
            </Item>
        </Inner>
    )
}

Profile.Container = function ProfileContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Profile.Pane = function ProfilePane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

Profile.Order = function ProfileOrder({ children, ...restProps }) {
    return <Order {...restProps}>{children}</Order>
}

Profile.Name = function ProfileName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Profile.Company = function ProfileCompany({ children, ...restProps }) {
    return <Company {...restProps}>{children}</Company>
}
