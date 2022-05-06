import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Profile, ProfileCard } from "../components/ProfileCard";

export function ProfileListPage() {
  const profiles: Profile[] = [
    {
      name: "Paul Allen",
      avatarUri: "https://i.pravatar.cc/400?img=12",
      points: 464,
    },
    {
      name: "John Smith",
      avatarUri: "https://i.pravatar.cc/400?img=2",
      points: -164,
    },
    {
      name: "Sarah Parker",
      avatarUri: "https://i.pravatar.cc/400?img=1",
      points: 203,
    },
    {
      name: "Terry Andrews",
      avatarUri: "https://i.pravatar.cc/400?img=4",
      points: 80,
    },
    {
      name: "Andy Vitale",
      avatarUri: "https://i.pravatar.cc/400?img=5",
      points: -230,
    },
    {
      name: "Katy Friedson",
      avatarUri: "https://i.pravatar.cc/400?img=6",
      points: 160,
    },
  ];

  const [currentProfileIndex, setCurrentProfileIndex] = React.useState(-1);

  return (
    <ScrollView>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={profile.name}
          profile={profile}
          open={currentProfileIndex === index}
          onToggleOpen={() =>
            setCurrentProfileIndex((old) => {
              if (old === index) {
                return -1;
              }
              return index;
            })
          }
        />
      ))}
    </ScrollView>
  );
}
