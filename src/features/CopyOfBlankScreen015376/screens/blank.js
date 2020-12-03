import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    CheckBox_4: true,
    Switch_5: true,
    CheckBox_6: true,
    CheckBox_7: true
  }

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/test_jpeg_61xTzCN.jpg"
      }}
      style={styles.ImageBackground_1}
    >
      <Text>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_5}
        value={this.state.Switch_5}
        onValueChange={nextChecked => this.setState({ Switch_5: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_6}
        onPress={nextChecked => this.setState({ CheckBox_6: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
      <Icon name="address-card" />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: {
    borderStyle: "dotted",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    backgroundSize: "stretch"
  },
  Text_2: {},
  Button_3: {},
  CheckBox_4: {},
  Switch_5: { alignSelf: "flex-start" },
  CheckBox_6: {},
  CheckBox_7: {},
  Icon_8: {}
})
