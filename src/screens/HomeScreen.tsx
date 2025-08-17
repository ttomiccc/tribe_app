import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';


// 내비게이션에 대한 타입 정의를 임포트
import { RootStackParamList } from '../navigation/types';

// 공통 레이아웃 컴포넌트 임포트
import MainLayout from '../layouts/MainLayout';


// RootStackParamList에서 'Home' 스크린에 대한 props 타입을 추출합니다.
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    // MainLayout 컴포넌트를 사용하여 공통 레이아웃을 적용합니다.
    // 'title' prop을 통해 헤더 텍스트를 설정할 수 있습니다.
    <MainLayout title="홈">
      <View style={globalStyles.container}>
        <Text>홈 입니다</Text>
        
        {/* 'Login' 스크린으로 이동하는 버튼 */}
        <Button
          title="Tribe List"
          onPress={() => navigation.navigate('TribeList')}
        />

      </View>
    </MainLayout>
  );
};

export default HomeScreen;