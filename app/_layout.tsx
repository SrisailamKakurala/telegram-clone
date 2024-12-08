import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/utils/Constants";
import { Stack } from "expo-router";
import { View, Text, Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf")
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
        if (Platform.OS === 'android') {
            // Make the system navigation bar transparent
            NavigationBar.setBackgroundColorAsync('transparent');
            NavigationBar.setVisibilityAsync('visible');
        }
    }, [loaded]);

    if (!loaded) {
        return;
    }

    return (
        <>
            <StatusBar style="light" backgroundColor="transparent" translucent />
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="(auth)" />
            </Stack>
        </>
    )
}