import React,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
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



const RegisterProvider:React.FC = () => {
  const [businessName, setbusinessName] = useState<string>('');
  const [businessId, setbusinessId] = useState<string>('');
  const [ownerName, setownerName] = useState<string>('');
  const [ownerEmail, setownerEmail] = useState<string>('');
  const [telephone, settelephone] = useState<string>('');
  const [employees, setemployees] = useState<string>('');

  return (
    <View style={[styles.container, {backgroundColor: Colors.Primary_white}]}>
      <Header text={'Register as a Provider'} containerheight={180} />

      <ContentContainer
        style={{
          height: '75%',
          flexDirection: 'column',
        }}>
        <View style={styles.rpimgUploadContainerView}>
          <AbstractImageUploadBox />
        </View>

        <ScrollView
          contentContainerStyle={styles.rptextInputsContainerView}
          showsVerticalScrollIndicator={false}>
          <AbstractTextInput
            label={'Business Name'}
            value={businessName}
            setvalue={txt => setbusinessName(txt)}
          />
          <AbstractTextInput
            label={'RUC (Business ID)'}
            value={businessId}
            setvalue={txt => setbusinessId(txt)}
          />
          <AbstractTextInput
            label={'Owner Name'}
            value={ownerName}
            setvalue={txt => setownerName(txt)}
          />
          <AbstractTextInput
            label={'Owner Email'}
            value={ownerEmail}
            setvalue={txt => setownerEmail(txt)}
          />
          <AbstractTextInput
            label={'Telephone'}
            value={telephone}
            setvalue={txt => settelephone(txt)}
          />
          <AbstractTextInput
            label={'No. of Employees'}
            value={employees}
            setvalue={txt => setemployees(txt)}
          />
        </ScrollView>

        <View style={styles.rpbuttonContainerView}>
          <AbstractButton
            txt={'register'}
            width={'90%'}
            height={55}
            onPressIn={() => navigate('ConfirmationProviderPage')}
          />
        </View>
      </ContentContainer>
    </View>
  );
};

export default RegisterProvider;
