import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      Alert.alert('Lỗi đăng nhập', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/vlu-logo.png')} style={styles.logo} />
      <Text style={styles.title}>VAN LANG UNIVERSITY</Text>
      <Text style={styles.login}>Đăng Nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: '#fff' }}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  logo: { width: 72, height: 72, marginBottom: 18 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#d44a55', marginBottom: 16 },
  login: { fontSize: 18, marginBottom: 8 },
  input: { width: '90%', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 },
  button: { backgroundColor: '#d44a55', padding: 14, borderRadius: 8, alignItems: 'center', width: '90%', marginTop: 12 },
});
