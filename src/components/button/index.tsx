import React from 'react';
import {Button} from 'react-native-paper';
import {colors} from '../../theme/colors';
import {defaultStyle} from './styles';

export type ButtonProps = {
  btnTitle?: string;
  handlePress?: any;
  btnStyles?: any;
  btnTitleStyle?: any;
  isDisabled?: boolean | any;
  disabledStyles?: any;
  disabledTitleStyles?: any;
  mode?: 'text' | 'outlined' | 'contained';
};

const ButtonElement: React.FC<ButtonProps> = ({
  btnTitle,
  handlePress,
  btnStyles,
  btnTitleStyle,
  isDisabled,
  disabledStyles,
  disabledTitleStyles,
  mode,
}): JSX.Element => {
  const contentStyle = !isDisabled
    ? [defaultStyle.defaultButtonStyle, btnStyles]
    : [defaultStyle.defaultDisabledStyle, disabledStyles];
  const labelStyle = !isDisabled
    ? [defaultStyle.defaultTextStyle, btnTitleStyle]
    : [defaultStyle.disabledTitleStyle, disabledTitleStyles];

  return (
    <Button
      compact
      style={defaultStyle.boderWidth0}
      mode={mode || 'contained'}
      onPress={handlePress}
      contentStyle={contentStyle}
      color={contentStyle?.backgroundColor || colors.apptheme}
      labelStyle={labelStyle}
      disabled={isDisabled || false}>
      {btnTitle}
    </Button>
  );
};

export default ButtonElement;
