import React from "react"
import { Container, Pane, Name, MenuNav, Filter, Search } from "./styles/header"

export default function Header({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Header.Pane = function HeaderPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};

Header.AppName = function AppName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
};

Header.MenuIcon = function Menu({ children, ...restProps }) {
    return <MenuNav {...restProps}>{children}</MenuNav>;
};

Header.FilterIcon = function FilterIcon({ children, ...restProps }) {
    return <Filter {...restProps}>{children}</Filter>;
};

Header.SearchIcon = function SearchIcon({ children, ...restProps }) {
    return <Search {...restProps}>{children}</Search>;
};
