import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Inner,
    Item,
    Container,
    Pane,
    Order,
    OrderDiv,
    Name,
    Title,
    Company,
    Image,
    Open
} from './styles/profile'

export default function Profile({ children, letter, image, ...restProps }) {
    return (
        <Inner>
            <OrderDiv><Order>{letter}</Order></OrderDiv>
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

Profile.Image = function ProfileImage({ children, image, ...restProps }) {

    const AvatarStyle = makeStyles((theme) => ({
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7)
        }
    }));

    return <Image src={image} {...restProps} className={AvatarStyle().large}>{children}</Image>
}

Profile.Open = function ProfileOpen({ children, ...restProps }) {
    return <Open {...restProps}>{children}</Open>
}
