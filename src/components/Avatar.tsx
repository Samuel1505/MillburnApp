import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { supabase } from '@/lib/supabase';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  size: number;
  url: string | null;
  onUpload: (filePath: string) => void;
  showUpload?: boolean;
}

const Avatar = ({ url, size = 150, onUpload, showUpload }: Props) => {
  const [isUploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const avatarSize = { height: size, width: size };

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path);

      if (error) {
        console.error(error);
        throw error;
      }

      const imageUri = URL.createObjectURL(data); // Only works for web. Use another method for mobile.
      setAvatarUrl(imageUri);
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading Image: ', error.message);
      }
    }
  }

  async function uploadAvatar() {
    // Implement upload logic here
  }

  return (
    <View>
      {avatarUrl ? (
        <Image
          source={{ uri: avatarUrl }}
          accessibilityLabel="Avatar"
          style={[avatarSize, styles.avatar, styles.image]}
        />
      ) : (
        <View
          style={[
            avatarSize,
            styles.avatar,
            styles.image,
            styles.center,
          ]}
        >
          <ActivityIndicator color="white" />
        </View>
      )}

      {
        showUpload && (
          <View className="absolute right-0 bottom-0">
            {
              isUploading ? (
                 <Pressable>
                  <MaterialIcons name="cloud-upload" size={30} color="black" />
                 </Pressable>
              ) : (<ActivityIndicator color="white" />)
            }
          </View>
        )
      }
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    overflow: 'hidden',
    maxWidth: '100%',
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
    paddingTop: 0,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
