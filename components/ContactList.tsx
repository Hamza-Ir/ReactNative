import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',

      email: 'john.doe@example.com',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'Jane Smith',

      email: 'jane.smith@example.com',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'Emily Johnson',

      email: 'emily.johnson@example.com',
      imageUrl: 'https://picsum.photos/200/300',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({id, name, email, imageUrl}) => (
          <View key={id} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userEmail}>{email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 8,
    marginBottom: 3,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#7f8c8d',
    padding: 8,
    borderRadius: 8,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userEmail: {
    fontSize: 12,
    color: '#000000',
  },
});
