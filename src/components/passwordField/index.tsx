import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Text, View} from 'react-native';
import {colors} from '../../theme/colors';
import defaultStyles from './styles';

interface passwordTextProps {
  label?: string;
  changeHandler?: any;
  placeholderText?: string;
  fieldValue?: string;
  changeTextHandler?: any;
  fieldError?: string;
  labelStyle?: any;
  inputStyle?: any;
}

const PasswordField: React.FC<passwordTextProps> = ({
  label,
  labelStyle,
  fieldValue,
  placeholderText,
  fieldError,
  changeTextHandler,
  inputStyle,
  changeHandler,
}) => {
  const [showText, setVisibility] = useState(true);

  return (
    <View style={defaultStyles.inputTextWrap}>
      <Text style={[defaultStyles.inputLabel, labelStyle]}>{label}</Text>
      <TextInput
        dense
        mode="outlined"
        style={[defaultStyles.defaultInputStyle, inputStyle]}
        placeholder={placeholderText}
        placeholderTextColor={colors.greyChateau}
        right={
          <TextInput.Icon
            onPress={() => setVisibility(!showText)}
            name={!showText ? 'eye' : 'eye-off'}
            color={colors.lightGray}
            size={20}
          />
        }
        secureTextEntry={showText}
        value={fieldValue}
        onChangeText={changeTextHandler}
        error={fieldError ? true : false}
        onChange={changeHandler}
        maxLength={10}
      />
      {fieldError && <Text style={defaultStyles.error}>{fieldError}</Text>}
    </View>
  );
};

export default PasswordField;
