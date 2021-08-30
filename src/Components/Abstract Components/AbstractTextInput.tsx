import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Colors } from '../../theme/color';
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield'


interface Props {
  value?: string,
  setvalue?: (txt: string) => void,
  label?: string,
  secureText?: boolean,
  style?: object,
}



const AbstractTextInput: React.FC<Props> = ({
  value,
  setvalue,
  label,
  secureText,
  style,
}) => {

  const defaultlabel: string = label ? label : 'Email';
  const defaultTextEntry: boolean = secureText ? secureText : false;
  const defaultStyle: object = style ? style : { };

  return (
    <View style={[{ height: 80, width: '100%' }, defaultStyle]}>


      <TextField
        label={defaultlabel}
        lineWidth={1}
        activeLineWidth={1}
        disabledLineWidth={1}
        tintColor={Colors.Primary_grey}
        value={value}
        onChangeText={setvalue}
        fontSize={16}
        labelFontSize={16}
        secureTextEntry={defaultTextEntry}
      />


    </View>
  );
};

export default AbstractTextInput;
