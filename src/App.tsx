import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./styles/colors";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    // NavigationContainer로 전체 내비게이션을 감싸야 합니다.
    // 이는 내비게이션 상태를 관리하는 역할을 합니다.
    <NavigationContainer>
      {/* AppNavigator는 Stack, Tab 등의 내비게이션 설정을 포함합니다. */}
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
