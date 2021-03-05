import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/fonts';

export default StyleSheet.create({
  inputTextWrap: {
    marginBottom: 16,
  },
  error: {
    color: colors.red,
    fontSize: 13,
    lineHeight: 17,
    fontFamily: fonts.Regular,
    paddingLeft: 12,
    paddingTop: 8,
  },
  inputLabel: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.black,
    lineHeight: 18,
  },
  defaultInputStyle: {
    lineHeight: 21,
    fontFamily: fonts.Regular,
    fontSize: 14,
    borderColor: colors.apptheme,
    borderRadius: 4,
  },
});
