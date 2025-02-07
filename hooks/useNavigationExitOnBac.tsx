import { BackHandler } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function useNavigationExitOnBack() {
  const navigation = useNavigation();

  useEffect(() => {
    const handleBeforeRemove = (e: any) => {
      e.preventDefault();
      BackHandler.exitApp();
    };

    navigation.addListener("beforeRemove", handleBeforeRemove);

    return () => {
      navigation.removeListener("beforeRemove", handleBeforeRemove);
    };
  }, [navigation]);
}
