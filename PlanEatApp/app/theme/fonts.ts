import {
  useFonts as useMontserrat,
  Montserrat_700Bold,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';

import {
  useFonts as useOpenSans,
  OpenSans_400Regular,
} from '@expo-google-fonts/open-sans';

export const fontConfig = {
  title: 'Montserrat_700Bold',
  subtitle: 'Montserrat_500Medium',
  body: 'OpenSans_400Regular',
  button: 'Montserrat_700Bold',
};

export function useAppFonts() {
  const [montserratLoaded] = useMontserrat({
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  const [openSansLoaded] = useOpenSans({
    OpenSans_400Regular,
  });

  return montserratLoaded && openSansLoaded;
}
