
import React, { FC, PropsWithChildren } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../MainLayout";
import { globalStyles } from "../../styles/global";
import SVGIcon from "../../components/SVGIcon";
import { Icons } from "../../assets/icons";

interface HeadBackLayoutProps {
  title?: string;
}

const HeadBackLayout: FC<PropsWithChildren<HeadBackLayoutProps>> = ({
  children,
  title,
}) => {
  const navigation = useNavigation();
  return (
    <MainLayout title="상세 화면">
      {navigation.canGoBack() ? (
        <View style={detailStyles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SVGIcon source={Icons.BackArrow} width={24} height={24} />
          </TouchableOpacity>

          <Text style={detailStyles.headerTitle}>{title}</Text>
          <View style={detailStyles.headerSpace} ></View>
        </View>
      ) : (

        <View />
      )}
      <View style={{ flex: 1 }}>{children}</View>
    </MainLayout>
  );
};

// DetailScreen의 고유 스타일
const detailStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 15,
    backgroundColor: "white",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSpace: {
    width: 24,
    height: 24,
  }
});

export default HeadBackLayout;
