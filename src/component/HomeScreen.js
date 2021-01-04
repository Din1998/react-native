import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const {textStyle,viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerTaxt}</Text>
    </View>
  );
};

const styles = {
  viewStyle:{
    backgroundColor: '#b09694',
    justifyContent: 'center',
    alignItems: 'center',
    height:60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};

export default Header;