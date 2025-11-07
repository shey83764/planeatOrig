import React from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';

export default function CompartirScreen() {
  const [email, setEmail] = React.useState('');

  const handleShare = () => {
    console.log('Compartiendo plan con:', email);
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Card style={{ padding: 20, borderRadius: 16 }}>
        <Text variant="headlineSmall" style={{ marginBottom: 10, fontWeight: 'bold' }}>
          Compartí tu plan de comidas 🍽️
        </Text>
        <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
          Enviá tu plan semanal a tu pareja o familia por correo electrónico.
        </Text>

        <TextInput
          label="Correo electrónico"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          style={{ marginBottom: 20 }}
        />

        <Button mode="contained" onPress={handleShare} style={{ borderRadius: 12 }}>
          Enviar invitación
        </Button>
      </Card>
    </View>
  );
}
