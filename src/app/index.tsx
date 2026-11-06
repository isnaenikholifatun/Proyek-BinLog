
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert(
        'Perhatian',
        'Username dan password harus diisi.'
      );
      return;
    }

    // Navigasi untuk pengujian di browser Web
    window.location.href = '/beranda';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BinLog</Text>

      <Text style={styles.subtitle}>
        Pencatatan Iuran Sampah
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>Login Petugas</Text>

        <Text style={styles.description}>
          Silakan masuk untuk melanjutkan
        </Text>

        <Text style={styles.label}>Username</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Masuk</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        BinLog • Desa Wonosegoro
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F8F3',
    padding: 24,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#246B45',
  },
  subtitle: {
    fontSize: 14,
    color: '#647568',
    marginTop: 6,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 20,
    marginTop: 32,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#246B45',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D5DED5',
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#246B45',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    color: '#647568',
    marginTop: 24,
    fontSize: 12,
  },
});
