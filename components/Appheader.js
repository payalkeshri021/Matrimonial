import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Badge} from 'react-native-elements';
import Icon  from 'react-native-vector-icons/MaterialIcons'

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isIcon:this.props.isIcon
    };
  }

  bellIconWithBadge = () => {
    return (
      <View>
        <Icon
          name="bell"
          color="#696969"
          size={23}
        
        />
        <Badge
          value={this.state.value}
          containerStyle={{ position: 'absolute', top: -4, right: -4 }}
        />
      </View>
    );
  };
  render() {
        const isTrue = this.state.isIcon;
    return (
      <Header
        containerStyle={{
         backgroundColor:'#612D08'
          }}
        centerComponent={{
          text: this.props.title,
          style: { color: '#ffffff', fontSize: 20, fontWeight: 'Bold' },
        }}
        leftComponent={
        
     isTrue ? (
     <Icon
            name="arrow-back"
            type="matrial-icon"
            color="#ffffff"
             size={18}
            onPress={() => this.props.navigation.navigate(this.props.route)}
          />
    ) : (
       <Icon
            name="menu"
            type="matrial-icon"
            color="#ffffff"
             size={18}
            onPress={() => this.props.navigation.toggleDrawer()}
          />   
    )
        }
        
      />
    );
  }
}
