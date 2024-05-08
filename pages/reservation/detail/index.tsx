import { Button, Grid, Group, Input, List, ListItem, Pill, ScrollArea, Space, Stack, Text, Title } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import Link from 'next/link';
import { Search } from '@/components/layout/search';
import { ReservationCard } from '../_components/reservation-card';
import { BottomBar } from '@/components/layout/bottom-bar';

const sideMenu = [
  {
    title: 'Trending Now',
    path: '/reservation/trending-now',
  },
  {
    title: 'Med Spa',
    path: '/reservation/med-spa',
  },
  {
    title: 'Mental Care',
    path: '/reservation/metal-care',
  },
];

export default function HomePage() {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Space h={150} />
        <Group align="start">
          <BottomBar />
          <Stack ml="xl">
            {
              sideMenu.map(item => <Link key={item.title} href={item.path}>
                {item.title}
              </Link>)
            }
          </Stack>
        </Group>
      </Grid.Col>
      <Grid.Col span={8}>
        <Search />
        <Space h="md" />
        <Grid>
          <Grid.Col span={8}>
            <ReservationCard titleOrder={2} title="Parner 1" thumb_url="https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png" />
            <Space h="md" />
            <Title order={2} mb="md">Services</Title>
            <ScrollArea
              w="100%"
              h={40}
              scrollbars="x"
            >
              <Group gap="sm" wrap="nowrap">
                {
                  ['Spa', 'Massage', 'Skin care', 'Nail care', 'Body care', 'Face care'].map(item => <Pill size="md" key={item}>{item}</Pill>)
                }
              </Group>
            </ScrollArea>

            <Space h="md" />
            <Title order={2} mb="md">Review</Title>

            <List listStyleType="none">
              <ListItem mb="md">
                <Group>
                  <Text fw={300}>Anonymous 1</Text>
                  <Text fw={300}>Passionate about body care</Text>
                </Group>
                <Text fw={500}>
                  “the best place that i have ever been to... highly recommend”
                </Text>
              </ListItem>

              <ListItem>
                <Group>
                  <Text fw={300}>Anonymous 2</Text>
                  <Text fw={300}>Newly arising voice</Text>
                </Group>
                <Text fw={500}>
                  “went here from a suggestion... didn’t meet my need tbh...”
                </Text>
              </ListItem>
            </List>
          </Grid.Col>
          <Grid.Col span={4}>
            <Title order={2} mb="md">Reserve Now</Title>

            <Stack>
              <Input.Wrapper label="Email">
                <Input />
              </Input.Wrapper>
              <DateInput
                label="Reserve Date"
                placeholder="Date input"
              />
              <Button bg="dark">Confirm</Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>

  );
}
