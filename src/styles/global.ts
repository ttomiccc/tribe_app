import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { typography } from './typography';

export const globalStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
  },
  text: {
    ...typography.body,
    color: colors.text_light,
  },
});