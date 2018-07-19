import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import Modal from "react-native-modal";
import { style } from "./style";

const MenuTask = ({ isVisible, onDisapearCallBack }) => (
  <Modal
    isVisible={isVisible}
    animationIn={"zoomInDown"}
    animationOut={"zoom"}
    animationInTiming={1000}
    animationOutTiming={1000}
    backdropTransitionInTiming={1000}
    backdropTransitionOutTiming={1000}
    onBackdropPress={() => onDisapearCallBack()}
  >
    <View style={style.modal}>
      <View style={style.textView}>
        <Text>Que souhaitez vous faire sur la tâche ?</Text>
      </View>
      <View style={style.buttonView}>
        <Button title="Supprimer" onPress={() => onDisapearCallBack()} />
        <Button title="Changer status" onPress={() => onDisapearCallBack()} />
      </View>
    </View>
  </Modal>
);

export default MenuTask;
