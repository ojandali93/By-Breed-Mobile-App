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

  const displayCatAttributes = (breed) => {
    let catInfo = data.cat_breeds[breed]
    let catInfoKeys = Object.keys(data.cat_breeds[breed])
    // console.log(catInfo)
    console.log(catInfoKeys)
    return(
      <>
        {
          catInfoKeys.map((item) => {
            return(
              <View style={styles.attributeContainer}>
                <Text>{item} | {catInfo[item]}</Text>
                <View>
                  {
                    catInfo[item] === 5 
                    ? <View style={styles.ratingContainer}><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text></View>
                    : catInfo[item] === 4
                      ? <View style={styles.ratingContainer}><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text></View>
                      : catInfo[item] === 3 
                        ? <View style={styles.ratingContainer}><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text></View>
                        : catInfo[item] === 2
                          ? <View style={styles.ratingContainer}><Text>&#11088;</Text><Text>&#11088;</Text></View>
                            : catInfo[item] === 1
                              ? <View style={styles.ratingContainer}><Text>&#11088;</Text></View>
                              : null
                  }
                </View>
              </View>
            )
          })
        }
      </>
    )
  }

  const displayDogAttributes = (breed) => {
    let dogInfo = data.dog_breeds[breed]
    let dogInfoKeys = Object.keys(data.dog_breeds[breed])
    return(
      <>
        {
          dogInfoKeys.map((item) => {
            return(
              <View style={styles.attributeContainer}>
                <Text>{item} | {dogInfo[item]}</Text>
                <View>
                  {
                    dogInfo[item] === 5 
                    ? <View style={styles.ratingContainer}><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text></View>
                    : dogInfo[item] === 4
                      ? <View style={styles.ratingContainer}><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text></View>
                      : dogInfo[item] === 3 
                        ? <View style={styles.ratingContainer}><Text>&#11088;</Text><Text>&#11088;</Text><Text>&#11088;</Text></View>
                        : dogInfo[item] === 2
                          ? <View style={styles.ratingContainer}><Text>&#11088;</Text><Text>&#11088;</Text></View>
                            : dogInfo[item] === 1
                              ? <View style={styles.ratingContainer}><Text>&#11088;</Text></View>
                              : null
                  }
                </View>
              </View>
            )
          })
        }
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
                    {displayCatAttributes(item.item)}
                  </View>)
              }}
            />
          : <FlatList 
              data={dogBreeds}
              keyExtractor={(item) => {item.item}}
              renderItem={(item) => {
                return(
                  <View  style={styles.item}>
                    <Text style={styles.itemBreed}>
                      {item.item}
                    </Text>
                    {displayDogAttributes(item.item)}
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
  },
  attributeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});
