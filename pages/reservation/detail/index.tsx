import { Button, Grid, Group, Input, List, ListItem, Pill, ScrollArea, Space, Stack, Text, Title } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import Link from 'next/link';
import { Search } from '@/components/layout/search';
import { ReservationCard } from '../_components/reservation-card';
import { BottomBar } from '@/components/layout/bottom-bar';
import { useAuthContext } from '@/components/_context';

const sideMenu = [
  {
    title: 'Trending Now',
    path: '/reservation?type=trending-now',
  },
  {
    title: 'Med Spa',
    path: '/reservation?type=med-spa',
  },
  {
    title: 'Mental Care',
    path: '/reservation?type=metal-care',
  },
  {
    title: 'Dental Care',
    path: '/reservation?type=dental-care',
  },
  {
    title: 'Women Care',
    path: '/reservation?type=women-care',
  },
  {
    title: 'Suggested for you',
    path: '/reservation?type=suggested-for-you',
  },
];

export default function HomePage() {
  const { isLoggedIn } = useAuthContext();

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

            <ReservationCard titleOrder={2} title="Parner 1" thumb_url="https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png" displayPromos={!isLoggedIn} />

            {
              isLoggedIn && <><Space h="md" /><Title order={2} mb="md">Promo & Deal</Title>
                <Group gap="sm" wrap="nowrap">
                  {
                    ['Free Trial', '10% for new customer'].map(item => <Pill size="md" key={item}>{item}</Pill>)
                  }
                </Group></>
            }
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
              <Link href="/order">  <Button bg="dark" w="50%">Confirm</Button></Link>
            </Stack>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>

  );
}
