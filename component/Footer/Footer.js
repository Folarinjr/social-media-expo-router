import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Icon from "react-native-vector-icons/Feather";

const Footer = ({ AppState }) => {
  const { chosenIndieID, followerCount } = AppState;
  const router = useRouter();
  return (
    <View style={styles.footer}>
      <Icon
        name={"home"}
        size={27}
        color="#141414"
        onPress={() => router.push("/index/Home/Home")}
      />
      <Text>
        {chosenIndieID} - {followerCount >= 0 ? followerCount : null}
      </Text>
      <Icon
        name={"user"}
        size={27}
        color="#141414"
        onPress={() => router.push("/index/Login/Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
  },
});

export default Footer;
