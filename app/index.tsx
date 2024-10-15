import useCachedResources from '@/hooks/useCachedResources';
import RootNavigation from '@/src/screens/navigation/RootNavigation';
import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import styled from "styled-components/native";

const index = () =>  {

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Container>
      <StatusBar  />
      <RootNavigation />
    </Container>
    );
  };

export default index;

const Container = styled(View)`
flex: 1; ` 
;
