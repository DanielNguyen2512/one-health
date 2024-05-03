import { Button, Space, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Stack h="90vh" justify="center" align="center">
        <Text fw={700} h={1}>ONE HEALTH</Text>
        <Space h="md" />
        <Text fs="italic" ta="center">“better experience,
          better health, better wellness”</Text>
        <Space h="md" />
        <Text ta="center">a health and wellness platform provides curated experience for people </Text>
        <Space h="md" />
        <Button w="95" display="inline-block" bg="dark" onClick={() => router.push('/reservation')}>
          Sign Up
        </Button>
        <Space h="md" />
        <Button w="95" display="inline-block" bg="dark" onClick={() => router.push('/reservation')}>
          Log in
        </Button>
      </Stack>
    </>
  );
}
