import React, {useContext} from 'react';
import {SafeAreaView, View} from 'react-native';

import {addAndRemoveLikedListMovies} from '../../state-management/reducers/moviesReducer/moviesSlice';
import NoFoundList from '../../components/GlobalComponents/NoFoundList/noFoundList';
import FlatListMovies from '../../components/GlobalComponents/FlatList/flatList';
import {styles} from '../../components/GlobalComponents/FlatList/style';
import {DarkModeContext} from '../../components/Context/context';
import {darkModeStyles} from '../../components/GlobalComponents/DarkModeStyle/style';
import {useAppSelector} from '../../state-management/hooks';

const Liked = ({navigation}) => {
  const likedList = useAppSelector(state => state.moviesSlice.likedList);
  const mode = useContext(DarkModeContext);
  return (
    <SafeAreaView>
      <View style={mode ? styles.container : darkModeStyles.container}>
        {likedList.length ? (
          <View>
            {/* Movies */}
            <View style={styles.moviesContainer}>
              <FlatListMovies
                navigation={navigation}
                list={likedList}
                deletList={addAndRemoveLikedListMovies}
              />
            </View>
          </View>
        ) : (
          <NoFoundList list="liked" />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Liked;
