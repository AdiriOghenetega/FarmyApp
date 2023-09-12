import {useState} from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';
import colors from '../../configs/colors';
import CustomButton from '../../configs/CustomButton'

const customModal = ({ isVisible, onClose, onSave, modalHeader, modalPlaceholder })=> {
const [modalItem, setModalItem] = useState('')

const saveModalItem = () => {
    onSave(modalItem);
    setModalItem('');
}

return (
    <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalHeaderText}>{modalHeader}</Text>
        <TextInput
          style={styles.modalTextInput}
          placeholder={modalPlaceholder}
          value={modalItem}
          onChangeText={text => setModalItem(text)}
        />
        {/* Save button */}
     
          <CustomButton buttonLabel="Save Changes" onPress={saveModalItem}  />
       
          <View style={{marginTop: 10}}>
            <CustomButton buttonLabel="Cancel" onPress={onClose} style={styles.cancelBtn}/>
          </View>
      </View>
    </View> 
  </Modal>
   );
 }


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    
      modalContent: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 10,
        width: '80%',
      },
    
      modalHeaderText: {
        fontFamily: 'RalewayBold',
        fontSize: 18,
        marginBottom: 10,
      },
    
      modalTextInput: {
        borderColor: colors.lightgray,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      },

      cancelBtn:{
        borderWidth: 2,
        marginTop: 20
      }
 })
export default customModal;