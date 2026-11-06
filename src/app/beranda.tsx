
import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';

export default function BerandaScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>BinLog</Text>
        <Text style={styles.subtitle}>Desa Wonosegoro</Text>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>Selamat Datang, Petugas!</Text>
        <Text style={styles.welcomeText}>
          Kelola pengambilan sampah dan pembayaran iuran warga.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Ringkasan</Text>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>0</Text>
          <Text style={styles.summaryLabel}>Total Warga</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>Rp0</Text>
          <Text style={styles.summaryLabel}>Iuran Bulan Ini</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Menu Utama</Text>

      <View style={styles.menuContainer}>
        <Pressable style={styles.menuCard}>
          <Text style={styles.menuTitle}>Data Warga</Text>
          <Text style={styles.menuDescription}>
            Tambah dan kelola data warga.
          </Text>
        </Pressable>

        <Pressable style={styles.menuCard}>
          <Text style={styles.menuTitle}>Pembayaran Iuran</Text>
          <Text style={styles.menuDescription}>
            Catat pembayaran iuran sampah.
          </Text>
        </Pressable>

        <Pressable style={styles.menuCard}>
          <Text style={styles.menuTitle}>Jadwal Sampah</Text>
          <Text style={styles.menuDescription}>
            Jadwal pengambilan setiap hari Rabu.
          </Text>
        </Pressable>

        <Pressable style={styles.menuCard}>
          <Text style={styles.menuTitle}>Rekapitulasi</Text>
          <Text style={styles.menuDescription}>
            Lihat ringkasan pembayaran warga.
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8F3',
    padding: 20,
  },
  header: {
    marginTop: 30,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#246B45',
  },
  subtitle: {
    fontSize: 14,
    color: '#647568',
    marginTop: 4,
  },
  welcome: {
    backgroundColor: '#246B45',
    padding: 20,
    borderRadius: 16,
    marginTop: 24,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 21,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#246B45',
    marginTop: 24,
    marginBottom: 12,
  },
  summaryContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  summaryNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#246B45',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 8,
  },
  menuContainer: {
    gap: 12,
    paddingBottom: 30,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    elevation: 2,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#246B45',
  },
  menuDescription: {
    fontSize: 13,
    color: '#666666',
    marginTop: 6,
  },
});
