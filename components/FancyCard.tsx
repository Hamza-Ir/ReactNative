import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending place</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.B-SyBKlcolIjnGhrJlNdkQHaHa?rs=1&pid=ImgDetMain',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Himalayas</Text>
          <Text style={styles.cardLabel}>3.4k reviews</Text>
          <Text style={styles.cardDescription}>
            The Himalayas is a mountain range in Asia, separating the plains of
            the the Indian subcontinent from the Tibetan Plateau. It includes
            the highest peaks in the world, including Mount Everest and K2.
            region.
          </Text>

          <Text style={styles.cardFooter}>100km away</Text>
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
    width: 375,
    height: 500,
    borderRadius: 6,
    marginHorizontal: 10,
    marginVertical: 12,
  },

  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },

  cardImage: {
    height: 300,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  cardBody: {
    flexGrow: 1,
    paddingHorizontal: 8,
  },
  cardTitle: {
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 22,
  },

  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 4,
  },

  cardDescription: {color: '#1f1c1c', fontSize: 14, marginBottom: 18},

  cardFooter: {color: '#000000', fontSize: 14, alignSelf: 'flex-end'},
});
