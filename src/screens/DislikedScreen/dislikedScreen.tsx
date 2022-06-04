import React, {useContext} from 'react';
import {View, SafeAreaView} from 'react-native';
import NoFoundList from '../../components/GlobalComponents/NoFoundList/noFoundList';
import FlatListMovies from '../../components/GlobalComponents/FlatList/flatList';
import {dislikeListMovies} from '../../state-management/reducers/moviesReducer/moviesSlice';
import {styles} from '../ProfileScreen/style';
import {DarkModeContext} from '../../components/Context/context';
import {darkModeStyles} from '../../components/GlobalComponents/DarkModeStyle/style';
import {useAppSelector} from '../../state-management/hooks';

const Dislike = ({navigation}) => {
  const dislikedList = useAppSelector(state => state.moviesSlice.disliked);
  const mode = useContext(DarkModeContext);
  return (
    <SafeAreaView>
      <View style={mode ? styles.container : darkModeStyles.container}>
        {dislikedList.length ? (
          <FlatListMovies
            navigation={navigation}
            list={dislikedList}
            deletList={dislikeListMovies}
          />
        ) : (
          <NoFoundList list="disliked" />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Dislike;
