import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/fonts';
import {colors} from '../../theme/colors';

export const defaultStyle = StyleSheet.create({
  defaultDisabledStyle: {
    backgroundColor: colors.disabled,
    borderColor: colors.disabled,
    borderWidth: 1,
  },
  disabledTitleStyle: {
    color: colors.lightGrayishBlue,
    fontFamily: fonts.Bold,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.65,
    textTransform: 'uppercase',
    marginVertical: 16,
  },
  defaultButtonStyle: {
    backgroundColor: colors.apptheme,
    borderColor: colors.apptheme,
    borderWidth: 1,
  },
  defaultTextStyle: {
    fontFamily: fonts.Bold,
    fontSize: 13,
    color: colors.white,
    letterSpacing: 0.65,
    lineHeight: 16,
    textTransform: 'uppercase',
    marginVertical: 16,
  },
  boderWidth0: {
    borderWidth: 0,
  },
});
