import React, { FC, PropsWithChildren } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

// MainLayout에 전달할 props의 타입을 정의
interface MainLayoutProps {
  title?: string;
}

// PropsWithChildren을 사용하여 children prop을 명시적으로 추가
const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Safe Area View</Text>
      </View>
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

export default MainLayout;