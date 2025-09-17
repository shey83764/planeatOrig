import React from 'react';
import { View, Text, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RecipesStackParamList } from '../navigation/RecipesStackNavigator';
import { theme } from '../theme';

type Props = {
  route: RouteProp<RecipesStackParamList, 'RecipeDetail'>;
};

export default function RecipeDetailScreen({ route }: Props) {
  const { recipeId, title } = route.params;
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const colors = {
    background: isDarkMode ? theme.colors.darkBackground : theme.colors.lightBackground,
    textPrimary: isDarkMode ? theme.colors.textLight : theme.colors.textDark,
    textSecondary: isDarkMode ? theme.colors.textSecondaryDark : theme.colors.textSecondaryLight,
    accent: theme.colors.accent,
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
      <Text style={[styles.recipeId, { color: colors.textSecondary }]}>ID de receta: {recipeId}</Text>

      {/* Sección de ingredientes */}
      <Text style={[styles.sectionTitle, { color: colors.accent }]}>Ingredientes</Text>
      <Text style={[styles.text, { color: colors.textPrimary }]}>- Ingrediente 1</Text>
      <Text style={[styles.text, { color: colors.textPrimary }]}>- Ingrediente 2</Text>

      {/* Sección de preparación */}
      <Text style={[styles.sectionTitle, { color: colors.accent }]}>Preparación</Text>
      <Text style={[styles.text, { color: colors.textPrimary }]}>
        Aquí va la descripción detallada de cómo preparar la receta.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
    fontFamily: theme.fonts.title,
  },
  recipeId: {
    fontSize: 14,
    marginBottom: 24,
    fontFamily: theme.fonts.body,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: theme.fonts.subtitle,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    fontFamily: theme.fonts.body,
  },
});
