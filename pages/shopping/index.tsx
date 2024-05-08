import { Grid, Group, Space, Stack } from '@mantine/core';
import Link from 'next/link';
import { Search } from '@/components/layout/search';
import { ShoppingSection } from './_components/shopping-section';
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
    <>
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
          <ShoppingSection
            title="Suggestion for you"
            items={[
              {
                title: 'Shop 1',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Shop 2',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Shop 3',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Shop 4',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Shop 5',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Shop 6',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
            ]}
          />
        </Grid.Col>
      </Grid>

    </>
  );
}
