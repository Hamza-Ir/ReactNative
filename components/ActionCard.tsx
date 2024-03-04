import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>

        <Image
          source={{uri: 'https://avatars.githubusercontent.com/u/69631?v=4'}}
          style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={3}>
            ES12 is the latest version of the ECMAScript standard, which is the
            scripting language specification that JavaScript is based on. ES12
            introduced new features such as String.prototype.replaceAll,
            Promise.any, Logical Assignment Operators, Numeric Separators, and
            more.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/blog')}>
            <Text style={styles.Links}>Read more</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openWebsite('https://www.youtube.com/')}>
            <Text style={styles.Links}>Visit youtubee</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  card: {
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },

  elevatedCard: {
    backgroundColor: '#d22cb4',
    elevation: 6,
  },

  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  bodyText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'normal',
  },

  cardImage: {
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 8,
  },

  bodyContainer: {
    padding: 10,
  },

  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  Links: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    borderRadius: 6,
    elevation: 5,
  },
});
