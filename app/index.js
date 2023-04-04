import registerNNPushToken from "native-notify";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Home from "./Home/Home";
import Login from "./Login/Login";

const index = ({ AppState }) => {
  const appInfo = { appId: 7073, tokenId: "22IoxDmZIdkOBoyELaJwda" };
  registerNNPushToken(appInfo.appId, appInfo.tokenId);
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <Home AppState={AppState} appInfo={appInfo} />
          <Login AppState={AppState} appInfo={appInfo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
