import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '@/src/components/Avatar';
import useSupabaseAuth from '@/hooks/useSupabaseAuth';
import { useUserStore } from '@/store/useUserStore';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [username, setUsername] = useState("User"); // Default value set here
  const [loading, setLoading] = useState(false);
  const { getUserProfile } = useSupabaseAuth();
  const { session } = useUserStore();

  async function handleGetProfile() {
    setLoading(true);
    try {
      const { data, error, status } = await getUserProfile();
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsername(data.username || "User");
        setAvatarUrl(data.avatar_url || "");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      Alert.alert("Error", "Could not fetch user profile. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (session) {
      handleGetProfile();
    }
  }, [session]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="relative">
        {/* Header */}
        <View className="w-full flex-row justify-between items-center px-4">
          <View className="w-3/4 flex-row space-x-2">
            <View className="justify-center items-center">
              <View className="h-12 w-12 rounded-2xl overflow-hidden">
                <Avatar url={avatarUrl} size={48} />
              </View>
            </View>
            <View>
              <Text className="text-lg font-bold">
                Welcome, {username ? username : "User"}
              </Text>
            </View>
          </View>

          <View className="py-6">
            <View className="bg-neutral-700 rounded-lg p-1">
                <Ionicons name="menu" size={24} color="white"/>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
