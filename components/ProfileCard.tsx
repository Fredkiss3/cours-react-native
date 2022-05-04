import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";

export type Profile = {
  name: string;
  avatarUri: string;
  points: number;
}

export interface ProfileCardProps {
  profile: Profile;
  open: boolean;
  onToggleOpen: () => void;
}

export function ProfileCard({ profile: {name, avatarUri, points}, open, onToggleOpen }: ProfileCardProps) {

  return (
    <TouchableOpacity
      onPress={onToggleOpen}
      style={open ? styles.cardOpen : styles.card}
    >
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: avatarUri }}
          style={open ? styles.avatarOpen : styles.avatar}
        />
        <Text style={open ? styles.nameOpen : styles.name}>{name}</Text>
      </View>

      {open && (
        <View style={styles.buttonsOpen}>
          <TouchableOpacity
            style={{
              ...styles.button,
              ...styles.buttonSecondary,
            }}
          >
            <Text style={styles.buttonTextSecondary}>View Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.button,
              ...styles.buttonPrimary,
            }}
          >
            <Text style={styles.buttonTextPrimary}>Add User</Text>
          </TouchableOpacity>
        </View>
      )}

      {!open && (
        <View style={styles.buttons}>
          <TouchableOpacity
            style={{
              ...styles.pointButton,
              backgroundColor: points > 0 ? "#ABEBC6" : "#F5B7B1",
            }}
          >
            <FontAwesomeIcon
              style={{
                color: points > 0 ? "#20B341" : "#E74C3C",
              }}
              icon={points > 0 ? faCaretUp : faCaretDown}
            />
            <Text
              style={{
                ...styles.pointText,
                color: points > 0 ? "#20B341" : "#E74C3C",
              }}
            >
              {" "}
              {points > 0 && "+"}
              {points}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <FontAwesomeIcon icon={faUserPlus} style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flex: 1,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  cardOpen: {
    backgroundColor: "#fff",
    flex: 2,
    margin: 5,
    borderRadius: 10,
    padding: 20,
    flexDirection: "column",
    alignItems: "flex-start",
  },

  avatarWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    borderRadius: 50,
    height: 40,
    width: 40,
    marginRight: 10,
  },

  avatarOpen: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginRight: 10,
  },

  name: {
    fontSize: 20,
    color: "#797979",
  },

  nameOpen: {
    fontSize: 30,
    color: "#7D3C98",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },

  pointButton: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },

  pointText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  iconButton: {
    marginLeft: 10,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "#c0c0c0",
  },

  icon: {
    color: "#5d5d5d",
  },

  buttons: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    marginLeft: "auto",
    justifyContent: "flex-end",
  },

  buttonsOpen: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    borderTopColor: "#c0c0c0",
    borderTopWidth: 1,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  buttonPrimary: {
    backgroundColor: "#27AE60",
  },

  buttonSecondary: {
    backgroundColor: "#c0c0c0",
  },

  buttonTextPrimary: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },

  buttonTextSecondary: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#797979",
  },
});
