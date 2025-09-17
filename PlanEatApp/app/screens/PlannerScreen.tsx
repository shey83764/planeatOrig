import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import { theme } from '../theme';

type MealsByDate = {
  [date: string]: string[];
};

export default function PlannerScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mealsByDate, setMealsByDate] = useState<MealsByDate>({});
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

  const startWeek = startOfWeek(selectedDate, { weekStartsOn: 1 }); // Lunes
  const daysOfWeek = Array.from({ length: 7 }).map((_, i) => addDays(startWeek, i));

  const handleDayPress = (day: Date) => setSelectedDate(day);

  const handleAddMeal = () => {
    const newMeal = `Comida ${Math.floor(Math.random() * 100)}`; // Simulada
    const dateKey = format(selectedDate, 'yyyy-MM-dd');

    setMealsByDate(prev => {
      const prevMeals = prev[dateKey] || [];
      return {
        ...prev,
        [dateKey]: [...prevMeals, newMeal],
      };
    });
  };

  const mealsForSelectedDate = mealsByDate[format(selectedDate, 'yyyy-MM-dd')] || [];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Ionicons name="calendar" size={48} color={colors.primary} style={{ marginBottom: 16 }} />
      <Text style={[styles.title, { color: colors.text }]}>📅 Planificador Semanal de Comidas</Text>

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
              <Text style={[styles.dayName, { color: isSelected ? '#fff' : colors.text }]}>
                {format(day, 'eee')}
              </Text>
              <Text style={[styles.dayNumber, { color: isSelected ? '#fff' : colors.text }]}>
                {format(day, 'dd')}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.mealsContainer}>
        {mealsForSelectedDate.length === 0 ? (
          <Text style={[styles.emptyText, { color: colors.placeholder }]}>
            No hay comidas para este día.
          </Text>
        ) : (
          <FlatList
            data={mealsForSelectedDate}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={[styles.mealItem, { backgroundColor: colors.card }]}>
                <Text style={[styles.mealText, { color: colors.text }]}>{item}</Text>
              </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: theme.fonts.title,
  },
  weekContainer: {
    flexGrow: 0,
    marginBottom: 20,
  },
  dayContainer: {
    padding: 12,
    marginHorizontal: 6,
    borderRadius: 10,
    alignItems: 'center',
    width: 60,
    elevation: 3,
  },
  dayName: {
    fontSize: 14,
    fontFamily: theme.fonts.body,
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: theme.fonts.body,
  },
  mealsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  emptyText: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 40,
    fontFamily: theme.fonts.body,
  },
  mealItem: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  mealText: {
    fontSize: 16,
    fontFamily: theme.fonts.body,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: theme.fonts.button,
  },
});
