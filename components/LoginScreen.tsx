import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/login_header_image.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>

      {/* Login Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>You do not have account ? </Text>
          <TouchableOpacity>
            <Text style={styles.createAccountLink}>Create New Account Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    width: '100%',
    height: '40%', // Adjust height as needed
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    marginTop: -20, // Overlap with the image slightly
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  loginButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#28a745', // Green color from image
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  createAccountText: {
    fontSize: 16,
    color: '#666',
  },
  createAccountLink: {
    fontSize: 16,
    color: '#28a745', // Green color from image
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
