import React from "react";
import HeaderContainer from "../containers/header";
import ProfileContainer from "../containers/profile";

export default function Home() {
  return (
    <React.Fragment>
      <HeaderContainer />
      <ProfileContainer />
    </React.Fragment>
  );
}
