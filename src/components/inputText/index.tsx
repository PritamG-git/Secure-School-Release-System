import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../../theme/colors';
import {Styles} from './styles';
import WarningIcon from '../../assets/images/warning.png';
interface inputTextProps {
  label?: string;
  changeHandler?: any;
  placeholderText?: string;
  fieldValue?: string;
  changeTextHandler?: any;
  fieldBlurHandler?: any;
  fieldError?: string;
  fieldTouched?: boolean;
  isPassword?: boolean;
  isEditable?: boolean;
  toggleSecureTextIcon?: boolean;
  nonEditableStyle?: any;
  disabledLabelStyle?: any;
  keyboardType?: any;
  maxLength?: number;
  inputFieldStyle?: any;
  inputLabelStyle?: any;
  isSuccess?: any;
  isMultiline?: boolean;
  numberOfLines?: number;
  fieldInstructionText?: string;
  fieldInstructionTextStyle?: any;
  handleKeyPress?: any;
}

const InputText: React.FC<inputTextProps> = ({
  label,
  changeHandler,
  placeholderText,
  fieldValue,
  changeTextHandler,
  fieldBlurHandler,
  fieldError,
  isPassword,
  isEditable,
  nonEditableStyle,
  disabledLabelStyle,
  keyboardType,
  maxLength,
  inputFieldStyle,
  inputLabelStyle,
  isSuccess,
  isMultiline,
  numberOfLines,
  fieldInstructionText,
  fieldInstructionTextStyle,
  handleKeyPress,
}): JSX.Element => {
  const fieldStyle =
    isEditable === false
      ? [Styles.disabledInput, nonEditableStyle]
      : isSuccess
      ? [Styles.inputField, inputFieldStyle, Styles.successOutline]
      : [Styles.inputField, inputFieldStyle];

  return (
    <View style={Styles.inputTextWrap}>
      <View>
        <Text
          style={
            isEditable === false
              ? disabledLabelStyle || Styles.inputLabel
              : [{...Styles.inputLabel, ...inputLabelStyle}]
          }>
          {label}
        </Text>
        <TextInput
          dense
          mode="outlined"
          onChange={changeHandler}
          placeholder={placeholderText}
          style={fieldStyle}
          placeholderTextColor={colors.greyChateau}
          value={fieldValue}
          onChangeText={changeTextHandler}
          onBlur={fieldBlurHandler}
          secureTextEntry={isPassword || false}
          disabled={isEditable === false ? true : false}
          keyboardType={keyboardType || 'default'}
          maxLength={maxLength}
          multiline={isMultiline}
          numberOfLines={numberOfLines || 4}
          error={fieldError ? true : false}
          right={
            fieldError ? (
              <TextInput.Icon name={WarningIcon} color={colors.red} size={20} />
            ) : null
          }
          onKeyPress={handleKeyPress}
        />
        {fieldError ? (
          <Text style={isSuccess ? {...Styles.success} : {...Styles.error}}>
            {fieldError}
          </Text>
        ) : (
          <></>
        )}
        {!fieldError && fieldInstructionText && (
          <Text
            style={{
              ...fieldInstructionTextStyle,
              ...Styles.defaultfieldInstructionTextStyle,
            }}>
            {fieldInstructionText}
          </Text>
        )}
      </View>
    </View>
  );
};

export default InputText;
