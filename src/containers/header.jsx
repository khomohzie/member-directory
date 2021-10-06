import React from "react";
import Header from "../components/Header";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Pane>
        <Header.MenuIcon />
      </Header.Pane>

      <Header.Pane>
        <Header.AppName>members directory</Header.AppName>
      </Header.Pane>

      <Header.Pane>
        <Header.FilterIcon />
        <Header.SearchIcon />
      </Header.Pane>
    </Header>
  );
}
