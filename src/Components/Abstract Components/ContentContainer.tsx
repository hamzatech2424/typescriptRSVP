import React from "react"
import {View,Text } from "react-native"


interface Props {
  children: React.ReactNode,
  style?:object
}

const ContentContainer:React.FC<Props> = ({children,style}) => {
    return(
        <View style={[{width:"85%",alignSelf:"center"},style]}>
          {children}
        </View>
    )
}


export default ContentContainer