import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  useColorScheme,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import { theme } from '../theme';
import { allRecipes, Recipe } from '../data/recipes';

type MealsByDate = { [date: string]: string[] };

export default function PlannerScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mealsByDate, setMealsByDate] = useState<MealsByDate>({});
  const [editingMealIndex, setEditingMealIndex] = useState<number | null>(null);
  const [customMeal, setCustomMeal] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Estados para filtros en el modal
  const [selectedCategory, setSelectedCategory] = useState<'Desayuno' | 'Almuerzo' | 'Merienda' | 'Cena'>('Desayuno');
  const [searchText, setSearchText] = useState('');

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const colors = {
    background: isDarkMode ? theme.colors.darkBackground : theme.colors.lightBackground,
    card: theme.colors.surface,
    text: isDarkMode ? theme.colors.textLight : theme.colors.textDark,
    textSecondary: isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondaryLight,
    primary: theme.colors.primary,
    placeholder: theme.colors.textSecondaryLight,
  };

  const startWeek = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const daysOfWeek = Array.from({ length: 7 }).map((_, i) => addDays(startWeek, i));
  const dateKey = format(selectedDate, 'yyyy-MM-dd');

  // Genera comidas aleatorias por categoría si no existen para el día
  useEffect(() => {
    if (!mealsByDate[dateKey]) {
      const categories: Recipe['category'][] = ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'];
      const initialMeals = categories.map(category => {
        const options = allRecipes.filter(r => r.category === category);
        const randomMeal = options[Math.floor(Math.random() * options.length)];
        return `${category}: ${randomMeal.title}`;
      });
      setMealsByDate(prev => ({ ...prev, [dateKey]: initialMeals }));
    }
  }, [dateKey]);

  const mealsForSelectedDate = mealsByDate[dateKey] || [];

  const handleDayPress = (day: Date) => setSelectedDate(day);

  const handleAddMeal = () => {
    setEditingMealIndex(null);
    setCustomMeal('');
    setModalVisible(true);
  };

  const handleEditMeal = (index: number) => {
    setEditingMealIndex(index);
    setCustomMeal(mealsForSelectedDate[index]);
    setModalVisible(true);
  };

  const handleDeleteMeal = (index: number) => {
    setMealsByDate(prev => {
      const updated = [...(prev[dateKey] || [])];
      updated.splice(index, 1);
      return { ...prev, [dateKey]: updated };
    });
  };

  const saveCustomMeal = (mealText: string) => {
    if (!mealText.trim()) return;

    setMealsByDate(prev => {
      const updated = [...(prev[dateKey] || [])];
      if (editingMealIndex !== null) {
        updated[editingMealIndex] = mealText;
      } else {
        updated.push(mealText);
      }
      return { ...prev, [dateKey]: updated };
    });

    setModalVisible(false);
    setEditingMealIndex(null);
    setCustomMeal('');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Ionicons name="calendar" size={48} color={colors.primary} style={{ marginBottom: 16 }} />
      <Text style={[styles.title, { color: colors.text }]}>📅 Planificador Semanal de Comidas</Text>

      {/* Selector de días */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.weekContainer}>
        {daysOfWeek.map(day => {
          const isSelected = isSameDay(day, selectedDate);
          return (
            <TouchableOpacity
              key={day.toISOString()}
              style={[
                styles.dayContainer,
                { backgroundColor: isSelected ? colors.primary : colors.card },
              ]}
              onPress={() => handleDayPress(day)}
            >
              <Text style={[styles.dayName, { color: isSelected ? '#fff' : colors.text }]}>{format(day, 'eee')}</Text>
              <Text style={[styles.dayNumber, { color: isSelected ? '#fff' : colors.text }]}>{format(day, 'dd')}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Lista de comidas */}
      <View style={styles.mealsContainer}>
        {mealsForSelectedDate.length === 0 ? (
          <Text style={[styles.emptyText, { color: colors.placeholder }]}>No hay comidas para este día.</Text>
        ) : (
          <FlatList
            data={mealsForSelectedDate}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[styles.mealItem, { backgroundColor: colors.card }]}
                onLongPress={() => handleDeleteMeal(index)}
              >
                <Text style={[styles.mealText, { color: colors.text }]}>{item}</Text>
                <TouchableOpacity onPress={() => handleEditMeal(index)}>
                  <Ionicons name="create-outline" size={22} color={colors.primary} />
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleAddMeal}
      >
        <Text style={styles.buttonText}>Agregar comida</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Selecciona o personaliza una comida
            </Text>

            {/* Filtros de categoría */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
              {['Desayuno', 'Almuerzo', 'Merienda', 'Cena'].map(cat => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    { padding: 8, borderRadius: 5, borderWidth: 1 },
                    selectedCategory === cat ? { backgroundColor: colors.primary } : { backgroundColor: '#ccc' }
                  ]}
                  onPress={() => setSelectedCategory(cat as any)}
                >
                  <Text style={{ color: selectedCategory === cat ? '#fff' : 'black' }}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Input de búsqueda dentro de la categoría */}
            <TextInput
              style={[styles.input, { color: colors.text, borderColor: colors.primary }]}
              placeholder={`Filtra tu ${selectedCategory.toLowerCase()}...`}
              placeholderTextColor={colors.placeholder}
              value={searchText}
              onChangeText={setSearchText}
            />

            {/* Lista filtrada por categoría y texto */}
            <FlatList
              data={allRecipes
                .filter(r => r.category === selectedCategory)
                .filter(r => r.title.toLowerCase().includes(searchText.toLowerCase()))
                .map(r => `${r.category}: ${r.title}`)}
              keyExtractor={(item, index) => index.toString()}
              style={{ maxHeight: 250, marginBottom: 10 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.suggestedItem, { borderColor: colors.primary }]}
                  onPress={() => saveCustomMeal(item)}
                >
                  <Text style={{ color: colors.text }}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <Text style={[styles.modalSubtitle, { color: colors.text }]}>O escribe la tuya:</Text>
            <TextInput
              style={[styles.input, { color: colors.text, borderColor: colors.primary }]}
              value={customMeal}
              onChangeText={setCustomMeal}
              placeholder="Escribe tu comida personalizada"
              placeholderTextColor={colors.placeholder}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.primary }]}
                onPress={() => saveCustomMeal(customMeal)}
              >
                <Text style={styles.modalButtonText}>Guardar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: 'gray' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center', fontFamily: theme.fonts.title },
  weekContainer: { flexGrow: 0, marginBottom: 20 },
  dayContainer: { padding: 12, marginHorizontal: 6, borderRadius: 10, alignItems: 'center', width: 60, elevation: 3 },
  dayName: { fontSize: 14, fontFamily: theme.fonts.body },
  dayNumber: { fontSize: 18, fontWeight: '700', fontFamily: theme.fonts.body },
  mealsContainer: { flex: 1, marginBottom: 20 },
  emptyText: { fontStyle: 'italic', textAlign: 'center', fontFamily: theme.fonts.body },
  mealItem: { padding: 12, marginVertical: 6, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  mealText: { fontSize: 16, fontFamily: theme.fonts.body },
  button: { paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16, fontFamily: theme.fonts.button },

  // Modal
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: '90%', borderRadius: 10, padding: 20 },
  modalTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, fontFamily: theme.fonts.title },
  suggestedItem: { padding: 10, borderWidth: 1, borderRadius: 6, marginVertical: 4 },
  modalSubtitle: { fontSize: 14, marginTop: 10, marginBottom: 5, fontFamily: theme.fonts.body },
  input: { borderWidth: 1, borderRadius: 6, padding: 10, marginBottom: 10, fontFamily: theme.fonts.body },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  modalButton: { flex: 1, padding: 12, borderRadius: 6, alignItems: 'center', marginHorizontal: 5 },
  modalButtonText: { color: '#fff', fontWeight: '600', fontSize: 16, fontFamily: theme.fonts.button },
});