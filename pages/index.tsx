import { Button, Space, Stack, Text } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Stack h="100%" justify="center" align="center">
        <Text fw={700} h={1}>ONE HEALTH</Text>
        <Space h="md" />
        <Text fs="italic" ta="center">“better experience,
          better health, better wellness”</Text>
        <Space h="md" />
        <Text ta="center">a health and wellness platform provides curated experience for people </Text>
        <Space h="md" />
        <Button w="95" display="inline-block" bg="dark">
          Sign Up
        </Button>
        <Space h="md" />
        <Button w="95" display="inline-block" bg="dark">
          Log in
        </Button>
      </Stack>
    </>
  );
}
