import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/color';



interface AllInterfacesHere {
  defaultStyle: {
    borderRadius: number,
    borderWidth: number,
  }
}


const defaultStyles:AllInterfacesHere['defaultStyle']  = {
  borderRadius: 11,
  borderWidth: 1,
};

const getbtnStyle = (type:string|undefined):{borderStroke:string, bgColor:string, fntColor:string} => {
  let borderStroke:string = '';
  let bgColor:string = '';
  let fntColor:string = '';

  switch (type) {
    case 'primary':
      borderStroke = Colors.Primary_pink;
      bgColor = Colors.Primary_pink;
      fntColor = Colors.Primary_white;
      break;

    case 'transparent':
      borderStroke = Colors.Primary_white;
      bgColor = 'transparent';
      fntColor = Colors.Primary_white;
      break;

    case 'transparent2':
      borderStroke = Colors.Primary_pink;
      bgColor = 'transparent';
      fntColor = Colors.Primary_pink;
      break;

    default:
      borderStroke = Colors.Primary_pink;
      bgColor = Colors.Primary_pink;
      fntColor = Colors.Primary_white;
      break;
  }

  return {borderStroke, bgColor, fntColor};
};



interface Props {
  height ?: string | number,
  width?: string | number,
  btnStyle?: string | undefined,
  txt?:string | number,
  onPressIn?: () => void

}



const AbstractButton:React.FC<Props> = ({height, width, btnStyle, txt,onPressIn}) => {
  let {borderStroke, bgColor, fntColor} = getbtnStyle(btnStyle);

  let btndefaultWidth:string|number = width ? width : 180;
  let btndefaultheight:string|number = height ? height : 50;
  let defaulttxt:string|number = txt ? txt : 'Alice';

  return (
    <TouchableOpacity
    onPress={onPressIn}
      activeOpacity={1}
      style={[
        defaultStyles,
        {
          height: btndefaultheight,
          width: btndefaultWidth,
          borderColor: borderStroke,
          backgroundColor: bgColor,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <Text
        style={{
          textTransform: 'uppercase',
          fontSize: 16,
          fontWeight: '800',
          color: fntColor,
          // fontFamily:'Nunito'
        }}>
        {defaulttxt}
      </Text>
    </TouchableOpacity>
  );
};

export default AbstractButton;
