import React,{useEffect,useState} from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text,Dimensions  } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const { width } = Dimensions.get('window');


const SplashScreen = () => {

    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setProgress((prev) => {
            if(prev < 1){
                return prev + 0.01
            }
            clearInterval(timer)
            return prev
        })
    },10)
    return () => clearInterval(timer)
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/DevGuide.png')}
            style={styles.image}
            resizeMode="contain" // Adjust to maintain aspect ratio
          />
            <View style={{justifyContent:'center',alignItems:'center'}}>
      <ProgressBar 
      progress={progress} 
      width={width*0.8} 
      height={20} 
      color='#7ed957'/>
      </View>
        </View>
      </View>
      <View  style={styles.imageContainer}>
        <Image 
          source={require('../assets/People.png')}
          style={styles.footerImage}
          resizeMode='contain'// Adjust to maintain aspect ratio
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding:20
  },
  headingContainer: {
    alignItems: 'center',
    padding:10, // Center the content horizontally
  },
  image: {
    width: 170,
    height: 170,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:45
  },
  footer: {
    position:'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerImage: {
    height: 535, // 80% of screen width
    width: width * 0.8,  // 80% of screen width
  },
  
});

export default SplashScreen;

