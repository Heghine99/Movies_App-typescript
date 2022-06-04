import React, {useMemo} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './style';
import URL from '../../../configs/configs';
import colors from '../../../assets/colors/colors';
import {useAppSelector, useAppDispatch} from '../../../state-management/hooks';

const FlatListMovies = ({navigation, list, deletList, screenName}) => {
  const {results} = useAppSelector(state => state.moviesSlice.posts);
  const filterList = useMemo(() => {
    return results?.filter(item => list?.includes(item.id));
  }, [results, list]);
  const dispatch = useAppDispatch();


  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }
        style={
          screenName ? {marginLeft: item.id === results[0].id ? 20 : 0} : null
        }>
        <View style={styles.moviesItem}>
          <Image
            source={{uri: URL.IMAGE_API + item.backdrop_path}}
            style={styles.itemImage}
            imageStyle={styles.moviesItemImageStyle}
          />
          <Text style={styles.moviesItemTitle}>{item.title}</Text>
          <View style={styles.moviesItembottomTitle}>
            <Text style={styles.moviesItembottomText}>Movie</Text>
            <Text style={styles.moviesItembottomDate}>{item.release_date}</Text>
            {screenName ? null : (
              <TouchableOpacity
                onPress={() => {
                  dispatch(deletList(item));
                }}>
                <AntDesign
                  name="delete"
                  size={32}
                  style={{
                    color: list?.includes(item.id)
                      ? colors.orange
                      : colors.white,
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
          {screenName ? (
            <View
              style={[
                styles.moviesItemVoteAverage,
                {
                  backgroundColor:
                    item.vote_average < 5 ? '#EC502E' : '#CEA8A0',
                },
              ]}>
              <Text style={styles.moviesItemVote}>{item.vote_average}</Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={screenName ? results : filterList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={screenName ? true : false}
          numColumns={screenName ? 0 : 2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatListMovies;
