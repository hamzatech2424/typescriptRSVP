import React, { useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../theme/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';




interface Props {
  height?:string | number
}



const AbstractImageUploadBox:React.FC<Props> = ({height}) => {
  const [ImageUploaded, setImageUploaded] = useState<{url:string | undefined}>();
  const defaultHeight:string | number = height ? height : 150

  const handleImageUpload = ():void => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImageUploaded({url:image.path});
    });
  };

  return (
    <React.Fragment>
      {ImageUploaded ? (
        <View
          style={{
            height: defaultHeight,
            width: '40%',
            backgroundColor: 'red',
            alignSelf: 'center',
          }}>
          <Image
            source={{uri:ImageUploaded.url}}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={handleImageUpload}
          activeOpacity={0.9}
          style={[{
            height: defaultHeight,
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }]}>
          <View
            style={{
              backgroundColor: Colors.Primary_pink,
              width: 110,
              height: 110,
              borderRadius: 55,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name={'image-plus'}
              size={40}
              color={Colors.Primary_white}
            />
          </View>

          <Text style={{color: Colors.Primary_pink, paddingTop: 5}}>
            Upload Your Profile Picture
          </Text>
        </TouchableOpacity>
      )}
    </React.Fragment>
  );
};

export default AbstractImageUploadBox;
