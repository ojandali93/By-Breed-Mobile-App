import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { data } from './cat-and-dog-breeds';
import { useEffect, useState } from 'react';

export default function App() {
  
  const catBreeds = Object.keys(data.cat_breeds)
  const dogBreeds = Object.keys(data.dog_breeds)

  const [displayAnimal, setDisplayAnimal] = useState('cats')

  const catsSelected = () => {
    return(
      <>
        <TouchableOpacity style={styles.buttonSelected} onPress={() => {setDisplayAnimal('cats')}}>
          <Text style={styles.buttonText}>Cat Breeds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {setDisplayAnimal('dogs')}}>
          <Text style={styles.buttonText}>Dog Breeds</Text>
        </TouchableOpacity>
      </>
    )
  }

  const dogsSelected = () => {
    return(
      <>
        <TouchableOpacity style={styles.button} onPress={() => {setDisplayAnimal('cats')}}>
          <Text style={styles.buttonText}>Cat Breeds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSelected} onPress={() => {setDisplayAnimal('dogs')}}>
          <Text style={styles.buttonText}>Dog Breeds</Text>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.menu}>
        {
          displayAnimal === 'cats'
            ? catsSelected()
            : dogsSelected()
        }
      </View>
      {
        displayAnimal === 'cats'
          ? <FlatList 
              data={catBreeds}
              keyExtractor={(item) => {item.item}}
              renderItem={(item) => {
                return(
                  <View style={styles.item}>
                    <Text style={styles.itemBreed}>
                      {item.item}
                    </Text>
                    <Text  style={styles.itemCount}>
                      {item.index}
                    </Text>
                  </View>)
              }}
            />
          : <FlatList 
              data={dogBreeds}
              keyExtractor={(item) => {item.item}}
              renderItem={(item) => {
                return(
                  <View>
                    <Text style={styles.itemBreed}>
                      {item.item}
                    </Text>
                    <Text  style={styles.itemCount}>
                      {item.index}
                    </Text>
                  </View>)
              }}
            />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    paddingHorizontal: 8
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    fontSize: 32,
    paddingVertical: 8,
    paddingHorizontal: 48,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
  buttonSelected: {
    fontSize: 32,
    paddingVertical: 8,
    paddingHorizontal: 48,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  itemBreed: {
    fontSize: 28
  },
  itemCount: {
    fontSize: 16
  },
  item: {
    paddingVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 2
  }
});
