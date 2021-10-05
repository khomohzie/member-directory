import React from 'react'
import { Profile } from '../components'
import ProfileData from '../fixtures/profiles.json'

export default function ProfileContainer() {
    return (
        <Profile.Container>
            {ProfileData.map((item, i) => (
                <Profile key={i} letter={item.name.charAt(0)}>

                    <Profile.Pane>
                        <p>{item.image}</p>
                    </Profile.Pane>

                    <Profile.Pane>
                        <Profile.Name>{item.name}</Profile.Name>
                        <Profile.Title>{item.title}</Profile.Title>
                        <Profile.Company>{item.company}</Profile.Company>
                    </Profile.Pane>

                    <Profile.Pane>
                        ♠
                    </Profile.Pane>

                </Profile>
            ))}
        </Profile.Container>
    )
}
