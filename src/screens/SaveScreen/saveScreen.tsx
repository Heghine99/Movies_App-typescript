import React, {useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import {addSaveList} from '../../state-management/reducers/moviesReducer/moviesSlice';
import BackIcon from '../../components/GlobalComponents/BackIcon/backIcon';
import FlatListMovies from '../../components/GlobalComponents/FlatList/flatList';
import {DarkModeContext} from '../../components/Context/context';
import {styles} from '../ProfileScreen/style';
import {darkModeStyles} from '../../components/GlobalComponents/DarkModeStyle/style';
import {useAppSelector} from '../../state-management/hooks';

const Rating = ({navigation}) => {
  const saveList = useAppSelector(state => state.moviesSlice.SaveList);
  const mode = useContext(DarkModeContext);
  return (
    <SafeAreaView>
      <View style={mode ? styles.container : darkModeStyles.container}>
        <BackIcon navigation={navigation} />
        <FlatListMovies
          navigation={navigation}
          list={saveList}
          addAndRemoveList={addSaveList}
        />
      </View>
    </SafeAreaView>
  );
};

export default Rating;
