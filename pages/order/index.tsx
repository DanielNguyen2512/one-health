import { Grid, Group, Space, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { Search } from '@/components/layout/search';
import { BottomBar } from '@/components/layout/bottom-bar';
import { ReservationCard } from '../reservation/_components/reservation-card/ReservationCard';
import { ShoppingCard } from '../shopping/_components/shopping-card';

const sideMenu = [
  {
    title: 'Profile',
    path: '/profile',
  },
  {
    title: 'Post',
    path: '/blog',
  },
  {
    title: 'Payment',
    path: '/order',
  },
  {
    title: 'FAQ',
    path: '/order',
  },
  {
    title: 'Feedback',
    path: '/order',
  },
];

export default function HomePage() {
  return (
    <div>
      <Grid>
        <Grid.Col span={4}>
          <Space h={150} />
          <Group align="start">
            <BottomBar />
            <Stack ml="xl">
              {
                sideMenu.map(item => <Link key={item.title} href={item.path}>
                  <Text mb="xl">
                    {item.title}
                  </Text>
                </Link>)
              }
            </Stack>
          </Group>
        </Grid.Col>
        <Grid.Col span={8}>
          <Search />
          <Space h="md" />

          <Group justify="space-between" mb="sm">
            <Title order={3}>Upcoming Bookings / Orders</Title>
          </Group>

          <Space h="md" />

          <ReservationCard
            isConfirm
            title="Partner 1"
            thumb_url="https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png" />
          <Space h="md" />
          <ShoppingCard
            title="Mask"
            isConfirm
            thumb_url="https://www.innisfree.com/my/en/resources/upload/product/36499_l.png"
          />
          <Space h="md" />
          <Title order={3}>Upcoming Bookings / Orders</Title>
        </Grid.Col>
      </Grid>

    </div>
  );
}
