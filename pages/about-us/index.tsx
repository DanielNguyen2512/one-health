import { Box, Button, Grid, Image, Space, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  return (
    <Box>
      <Grid>
        <Grid.Col span={11}>
          <Stack h="80vh" justify="center" align="center" style={{ position: 'relative', left: -200 }}>
            <Text fw={700} h={1}>ONE HEALTH</Text>
            <Space h="md" />
            <Text w={500} fs="italic" ta="center">Our vision is to promote better health and wellness through delivering better experience</Text>
            <Space h="md" />
            <Text w={500} ta="center">Our mission is to build a health and wellness platform provides curated experience for people </Text>
            <Space h="md" />
            <Grid gutter={150}>
              <Grid.Col span={6}>
                <Stack align="center">
                  <Text w={260} ta="center">For partners:
                    Join us to deliver your services and products to more users</Text>
                  <Button display="inline-block" bg="dark" onClick={() => router.push('/')}>
                    join waitlist
                  </Button>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack align="center">
                  <Text w={260} ta="center">For users:
                    Join us to lift up your health and wellness to the next level</Text>
                  <Button display="inline-block" bg="dark" onClick={() => router.push('/')}>
                    join waitlist
                  </Button>
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>

        <Grid.Col span={1}>
          <Box pos="relative">
            <Box pos="absolute" left={-400}>
              <Image src="/one-health/app-home-page.png" w={150} />
            </Box>
            <Box pos="absolute" left={-300} top={50}>
              <Image src="/one-health/community-home-page.png" w={150} />
            </Box>
            <Box pos="absolute" left={-200} top={100}>
              <Image src="/one-health/reservation-account-page.png" w={150} />
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
