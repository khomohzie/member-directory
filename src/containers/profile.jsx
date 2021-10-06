import React from "react";
import { Profile } from "../components";
import ProfileData from "../fixtures/profiles.json";
import { getAvatarInitials } from "../utils/get-initials";

export default function ProfileContainer() {
  return (
    <Profile.Container>
      {ProfileData.map((item, i) => (
        <Profile key={i} letter={item.name.charAt(0)}>
          <Profile.Pane>
            <Profile.Image image={item.image}>
              {getAvatarInitials(item.name)}
            </Profile.Image>
          </Profile.Pane>

          <Profile.Pane>
            <Profile.Name>{item.name}</Profile.Name>
            <Profile.Title>{item.title}</Profile.Title>
            <Profile.Company>{item.company}</Profile.Company>
          </Profile.Pane>

          <Profile.Pane>
            <Profile.Open />
          </Profile.Pane>
        </Profile>
      ))}
    </Profile.Container>
  );
}
