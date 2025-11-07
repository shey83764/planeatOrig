import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Switch, List } from 'react-native-paper';

export default function NotificacionesScreen() {
  const [recordatorios, setRecordatorios] = React.useState(true);
  const [nuevasRecetas, setNuevasRecetas] = React.useState(false);
  const [notasSalud, setNotasSalud] = React.useState(true);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text variant="headlineSmall" style={{ fontWeight: 'bold', marginBottom: 10 }}>
        Notificaciones 🔔
      </Text>
      <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
        Elegí qué notificaciones querés recibir.
      </Text>

      <List.Item
        title="Recordatorios de comidas"
        right={() => <Switch value={recordatorios} onValueChange={setRecordatorios} />}
      />
      <List.Item
        title="Nuevas recetas disponibles"
        right={() => <Switch value={nuevasRecetas} onValueChange={setNuevasRecetas} />}
      />
      <List.Item
        title="Consejos de salud y bienestar"
        right={() => <Switch value={notasSalud} onValueChange={setNotasSalud} />}
      />
    </ScrollView>
  );
}
