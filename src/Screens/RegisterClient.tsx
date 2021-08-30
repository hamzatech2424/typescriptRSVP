import React, {useState} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import {styles} from './style';
import {Header} from '../Components/Module Components';
import {Colors} from '../theme/color';
import {
  ContentContainer,
  AbstractImageUploadBox,
  AbstractTextInput,
  AbstractButton,
} from '../Components/Abstract Components';
import { navigate } from '../Navigation/AuthStack';




const RegisterClient:React.FC = () => {
  const [firstName, setFirstname] = useState<string>('');
  const [lastName, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [Phone, setPhone] = useState<string>('');

  // console.log(firstName,lastName,email,Phone)

  return (
    <View style={[styles.container, {backgroundColor: Colors.Primary_white}]}>
      <Header text={'Register as a Client'} containerheight={180} />

      <ContentContainer
        style={{
          height: '75%',
          flexDirection: 'column',
        }}>
        <View style={styles.rcimgUploadContainerView}>
          <AbstractImageUploadBox />
        </View>

        <ScrollView
          contentContainerStyle={styles.rptextInputsContainerView}
          showsVerticalScrollIndicator={false}>
          <AbstractTextInput
            label={'First Name'}
            value={firstName}
            setvalue={txt => setFirstname(txt)}
          />
          <AbstractTextInput
            label={'last Name'}
            value={lastName}
            setvalue={txt => setLastname(txt)}
          />
          <AbstractTextInput
            label={'Email'}
            value={email}
            setvalue={txt => setEmail(txt)}
          />
          <AbstractTextInput
            label={'Phone'}
            value={Phone}
            setvalue={txt => setPhone(txt)}
          />
          </ScrollView>

        <View style={styles.rcbuttonContainerView}>
          <AbstractButton
            txt={'register'}
            width={'90%'}
            height={55}
            onPressIn={() => navigate('ConfirmationClientPage')}
          />
        </View>
      </ContentContainer>
    </View>
  );
};

export default RegisterClient;
