import React from 'react';
import {Text} from 'react-native';

interface Props {
  children: React.ReactNode,
  style?:object
}


const MyText:React.FC<Props> = ({children, style,}) => {
  return (
    <Text  style={style}>
      {children}
    </Text>
  );
};
export default MyText;
