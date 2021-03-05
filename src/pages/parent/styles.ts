import {fonts} from '../../theme/fonts';
import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
  },
  welcome: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTextPrimary: {
    fontFamily: fonts.ExtraBold,
    lineHeight: 40,
    letterSpacing: 0.3,
    color: colors.apptheme,
  },
  welcomeTextSecondary: {
    fontFamily: fonts.Medium,
    letterSpacing: 0.3,
  },
  welcomeTextParent: {
    alignSelf: 'center',
    fontFamily: fonts.ExtraBold,
    color: colors.apptheme,
    letterSpacing: 0.3,
    marginTop: 20,
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'center',
  },
  content: {
    marginHorizontal: 40,
    marginTop: 40,
  },
  Button: {
    marginTop: 70,
    marginHorizontal: 120,
  },
  customcontainer: {
    marginTop: 10,
    borderBottomColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 15,
    borderRadius: 4,
    padding: 10,
  },
  column: {
    flex: 3,
  },
  column2: {
    flex: 1,
    alignSelf: 'center',
  },
  primaryText: {
    fontFamily: fonts.Bold,
    color: colors.secondryAppTheme,
  },
  secondaryText: {
    color: colors.black,
  },
  footernav: {
    fontFamily: fonts.ExtraBold,
    color: colors.apptheme,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
