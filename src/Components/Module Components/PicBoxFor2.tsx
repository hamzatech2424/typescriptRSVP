import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Touchable,
  TouchableOpacity,
  Text,
} from 'react-native';
import { AbstractRadio } from '../Abstract Components';


interface Props {
  imageUrl1: string,
  imageUrl2: string,
  activeRadio: boolean,
  onPressSend: () => void
}


const PicBoxFor2:React.FC<Props> = ({ imageUrl1, imageUrl2, activeRadio, onPressSend }) => {
  const [active, setActive] = useState<boolean>(false);
  const defaultImageUrl1:string = imageUrl1 ? imageUrl1 : '';
  const defaultImageUrl2:string = imageUrl2 ? imageUrl2 : '';

  return (
    <React.Fragment>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          onPressSend()
          setActive(activeRadio)
        }}

        style={styles.touchableView}>
        <View style={styles.image1View}>
          <Image
            resizeMode={'cover'}
            source={{ uri: defaultImageUrl1 }}
            style={{
              height: '100%',
              width: '100%',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,

            }} />
          <Text
            style={styles.textStyle}>
            Proveedor
          </Text>

        </View>

        <View style={styles.image2View}>
          <Image
            resizeMode={'cover'}
            source={{ uri: defaultImageUrl2 }}
            style={{
              height: '100%',
              width: '100%',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }} />
          {activeRadio ? (
            <AbstractRadio
              style={{ position: 'absolute', right: 0,  top: 15 }}
              active={active}
            />
          ) : (
            <AbstractRadio
              style={{ position: 'absolute', right: 0, top: 15 }}
            />
          )}

        </View>
      </TouchableOpacity>


    </React.Fragment>
  );
};

export default PicBoxFor2;

const styles = StyleSheet.create({
  touchableView: {
    height: 140,
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',

  },
  textStyle: {
    color: 'white',
    paddingTop: 15,
    paddingLeft: 15,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    position: 'absolute'
  },
  image1View: {
    height: 140,
    width: '50%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // borderRadius: 10,
  },
  image2View: {
    height: 140,
    width: '50%',
    borderRadius: 10,
  },
  touchableStyle: {
    height: 140,
    width: '100%',
    borderRadius: 10,

  },
});
