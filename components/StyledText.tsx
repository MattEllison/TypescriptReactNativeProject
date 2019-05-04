import React from 'react';
import { Text } from 'react-native';
import { any } from 'prop-types';


export class MonoText extends React.Component<any, any> {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
