import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';


import { RootStackParamList } from '../navigation/types';
import HeadBackLayout from '../layouts/HeadBackLayout';
import SVGIcon from '../components/SVGIcon';
import { Icons } from '../assets/icons';

/// 임시 목업
const meetingData = [
  {
    id: '1',
    category: '자기계발',
    title: '[1기모집] 하루 10분 습관만들기(3주)',
    location: '온라인',
    date: '25.07.21~25.10.20',
    organizer: '프로옆정리',
    participants: '10/20',
  },
  {
    id: '2',
    category: '드로잉',
    title: '[7기] ✨2026 꿈을 그리다✨',
    location: '온라인',
    date: '26.05.17~25.12.20',
    organizer: '나는 해피',
    participants: '5/20',
  },
  {
    id: '3',
    category: '커리어',
    title: '갓생 살아보자!',
    location: '강남',
    date: '26.01.12~25.12.10',
    organizer: 'Good day',
    participants: '2/10',
  },
  {
    id: '4',
    category: '자기계발',
    title: '💗공부챌린지💗(자유 주제)',
    location: '신림',
    date: '26.07.12~25.11.05',
    organizer: 'ekagp',
    participants: '6/10',
  },
  // Add more data as needed
];

const categoryTabs = ['온라인', '날짜', '지역', '나이', '성별'];


type TribeListProps = StackScreenProps<RootStackParamList, 'TribeList'>;

const TribeListScreen: React.FC<TribeListProps> = ({ navigation }) => {
  return (
    // MainLayout 컴포넌트를 사용하여 공통 레이아웃을 적용합니다.
    // 'title' prop을 통해 헤더 텍스트를 설정할 수 있습니다.
    <HeadBackLayout title="모임 리스트">
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <SVGIcon source={Icons.BackArrow} width={20} height={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="도전할 과제를 찾으세요"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <SVGIcon source={Icons.BackArrow} width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryTabsContainer}>
      {categoryTabs.map((tab, index) => (
          <TouchableOpacity key={index} style={styles.categoryTab}>
            <Text style={styles.categoryTabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryTabsContainer}>
        {categoryTabs.map((tab, index) => (
          <TouchableOpacity key={index} style={styles.categoryTab}>
            <Text style={styles.categoryTabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}
      <View style={styles.sortContainer}>
        <Text>최신 등록 순</Text>
        <SVGIcon source={Icons.BackArrow} width={16} height={16} />
      </View>
    </HeadBackLayout>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    width: 275,
    fontSize: 16,
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  categoryTabsContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryTab: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  categoryTabText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
})

export default TribeListScreen;