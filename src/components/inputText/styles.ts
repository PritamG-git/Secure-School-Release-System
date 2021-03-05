import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/fonts';

export const Styles = StyleSheet.create({
  inputTextWrap: {
    marginBottom: 16,
  },
  inputField: {
    lineHeight: 21,
    fontFamily: fonts.Regular,
    fontSize: 14,
    borderColor: colors.apptheme,
    borderRadius: 4,
  },
  inputLabel: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.black,
    lineHeight: 18,
  },
  error: {
    color: colors.red,
    fontSize: 13,
    lineHeight: 17,
    fontFamily: fonts.Regular,
    paddingLeft: 12,
    paddingTop: 8,
  },
  success: {
    color: colors.green,
    fontSize: 13,
    lineHeight: 17,
    fontFamily: fonts.Regular,
    paddingLeft: 12,
    paddingTop: 8,
    paddingBottom: 10,
  },
  successOutline: {
    borderWidth: 1,
    borderColor: colors.green,
  },
  focusedOutlin: {
    borderWidth: 1,
    borderColor: colors.apptheme,
  },
  disabledInput: {
    lineHeight: 21,
    fontFamily: fonts.Regular,
    fontSize: 14,
    backgroundColor: colors.disabled,
  },
  disabledLabel: {
    color: colors.lightGrayishBlue,
    fontFamily: fonts.SemiBold,
    fontSize: 13,
  },
  defaultfieldInstructionTextStyle: {
    color: colors.black,
    fontSize: 13,
    textAlign: 'left',
    lineHeight: 18,
    fontFamily: fonts.Regular,
  },
});
