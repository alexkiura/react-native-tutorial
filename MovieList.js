import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class MovieList extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      title: '',
      dataSource: dataSource.cloneWithRows([]),
      description: '',
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    console.log('started fetching movies');
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          title: responseJson.title,
          description: responseJson.description,
          dataSource: this.state.dataSource.cloneWithRows(responseJson.movies),
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.titletext}>{this.state.title} </Text>
        <Text style={styles.descriptionText}>{this.state.description}</Text>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(movieName) => <Text style={styles.descriptionText}>{movieName.title}, {movieName.releaseYear}</Text>}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
  },
  titletext: {
    fontSize: 20,
  },
  descriptionText: {
    fontSize: 15,
    paddingTop: 5,
  }
})
