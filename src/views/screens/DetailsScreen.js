import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {SecondaryButton} from '../components/Button';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 28, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View>
          </View>
          <Text style={style.coachname}>
          {item.Coach}
          </Text>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. 
          </Text>
          <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
                }}> 
          <Text style={style.headerText}>
            Upplysingar
          </Text>
          <Text style={style.headerTextmin}>
            {item.time}
          </Text>
          </View>
          <Text style={style.detailsText}>
             Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <Text style={style.headerText}>
            {item.drilllist}
          </Text>
          <Text style={style.detailsText}>
            {item.description}
          </Text>
          <View style={{flex: 1, flexDirection: 'row', marginTop:30}}>
          <Text style={style.headerText1}>
            {item.Drill1}
          </Text>
          <Text style={style.detailsText1}>
            {item.Infodrill}
          </Text>
          </View>
          <View style={{marginTop: 40, marginBottom: 0}}>
            <SecondaryButton title="Pick practice" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  coachname: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight:'bold',
  },
  headerText: {
    fontSize:20,
    fontWeight:"bold",
    marginTop:5,
  },
  headerText1: {
    fontSize:20,
    fontWeight:"bold",
    marginTop:5,
    width:'30%',
  },
  detailsText1: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
    width:'65%',
  },
  headerTextmin: {
    fontSize:20,
    fontWeight:"bold",
    marginTop:5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default DetailsScreen;
