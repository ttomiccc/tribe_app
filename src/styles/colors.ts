interface ThemeColors {
  primary: string; // 앱의 주요 강조 색상
  secondary: string; // 보조 강조 색상 또는 액션 색상
  accent: string; // 강조를 위한 추가 색상

  background: string; // 페이지 배경색
  card: string; // 카드, 패널 등 컴포넌트 배경색

  text_dark: string; // 어두운 텍스트 색상 (주로 밝은 배경에 사용)
  text_light: string; // 밝은 텍스트 색상 (주로 어두운 배경에 사용)

  border: string; // 경계선, 구분선 색상

  success: string; // 성공 상태 (예: 완료, 성공 메시지)
  warning: string; // 경고 상태 (예: 주의, 알림)
  error: string; // 오류 상태 (예: 에러 메시지)

  button: string; // 버튼 배경색
  button_text: string; // 버튼 텍스트 색상
}

// 라이트 모드 테마 색상
export const lightColors: ThemeColors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  accent: '#FF9500',

  background: '#f8f8f8',
  card: '#FFFFFF',

  text_dark: '#333333',
  text_light: '#FFFFFF',

  border: '#E0E0E0',

  success: '#4CDA64',
  warning: '#FFCC00',
  error: '#FF3B30',

  button: '#007AFF',
  button_text: '#FFFFFF',
};

// 다크 모드 테마 색상
export const darkColors: ThemeColors = {
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  accent: '#FF9F0A',

  background: '#F1F3F5',
  card: '#1C1C1E',

  text_dark: '#FFFFFF',
  text_light: '#000000',

  border: '#48484A',

  success: '#30D158',
  warning: '#FFD700',
  error: '#FF453A',

  button: '#0A84FF',
  button_text: '#FFFFFF',
};

// 기본 내보내기 (여기서는 라이트 모드를 기본으로 사용)
export const colors = lightColors;