import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

export default class ListViewBasics extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: dataSource.cloneWithRows([
        'Muchai', 'Bisma', 'Kinyanjui', 'Bakrania', 'Masila',
      ])
    }
  }

  render() {
    return(
      <View style={{ flex: 1, padding: 22 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}
