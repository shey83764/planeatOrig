import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from 'app/navigation/AppNavigator'; // o el componente raíz de navegación

import { useAppFonts } from 'app/theme';

export default function App() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) return null; // o un SplashScreen

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

  );
}
// import { useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import { registerForPushNotificationsAsync } from './services/NotificationService';

// export default function App() {
//   useEffect(() => {
//     registerForPushNotificationsAsync();

//     const subscription = Notifications.addNotificationReceivedListener(notification => {
//       console.log('Notificación recibida:', notification);
//     });

//     return () => subscription.remove();
//   }, []);

//   return <AppNavigator />;
// }
