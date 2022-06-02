import React from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import {styleSheet} from './style';
import {IMAGE_API} from '../../configs/configs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors/colors';
import Loading from '../globalComponents/Loading/loading';
import {useAppSelector} from '../../state-management/hooks';

export default function DroppDownSearch({searchResult, navigation}) {
  //const [ref, setRef] = useState(null);
  const likedList = useAppSelector(state => state.moviesSlice.likedList);
  const loading = useAppSelector(state => state.searchSlice.loading);
  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }
        style={styleSheet.ItemView}>
        <Image
          source={{uri: IMAGE_API + item.backdrop_path}}
          style={styleSheet.searchItemImage}
          imageStyle={styleSheet.searchImage}
        />
        <View style={styleSheet.inputItemTitle}>
          <Text style={styleSheet.inputItemText}>{item.original_title}</Text>
          {likedList?.includes(item.id) && (
            <AntDesign
              name="heart"
              size={20}
              style={{
                color: colors.orange,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // const FlatList_Header = () => {
  //   return (
  //     <View style={styleSheet.headerStyle}>
  //       <Button
  //         title="Authoscroll"
  //         onPress={() => {
  //           ref.scrollToOffset({
  //             offset: 240,
  //             animated: true,
  //           });
  //         }}
  //       />
  //     </View>
  //   );
  // };

  return (
    <View style={styleSheet.modalHeight}>
      {loading ? (
        <Loading size={35} />
      ) : (
        <FlatList
          data={searchResult}
          renderItem={RenderItem}
          keyExtractor={item => item.id}
          nestedScrollEnabled={true}
        />
      )}
    </View>
  );
}
