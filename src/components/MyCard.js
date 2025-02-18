import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

const MyCard = ({ imageUrl, title, description, onIconPress }) => {
  return (
    <Card style={styles.card}>
      {/* Image */}
      <View>
        <Card.Cover source={{ uri: imageUrl }} style={styles.image} />
        
        {/* Overlay Container */}
        <View style={styles.overlay}>
          {/* Title & Description */}
         

          {/* Icons at Bottom */}
          <View style={styles.actions}>
            <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{description}</Text>
            </View>
          
            <IconButton  icon="star-outline" color="#b2db00" />
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop:25
  },
  
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark semi-transparent background
    padding: 10,
  },
  textContainer: {
    marginBottom: 5, // Space between text and icons
  },
  title: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  description: {
    color: '#fff',
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center"
  },
});

export default MyCard;
