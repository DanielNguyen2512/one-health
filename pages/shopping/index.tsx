import { Grid, Group, Space, Stack } from '@mantine/core';
import Link from 'next/link';
import { Search } from '@/components/layout/search';
import { ShoppingSection } from './_components/shopping-section';
import { BottomBar } from '@/components/layout/bottom-bar';

const sideMenu = [
  {
    title: 'Trending Now',
    path: '/shopping?type=trending-now',
  },
  {
    title: 'Med Spa',
    path: '/shopping?type=med-spa',
  },
  {
    title: 'Mental Care',
    path: '/shopping?type=metal-care',
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
                title: 'Mask Cream',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Mask Cream',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Mask Cream',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Mask Cream',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Mask Cream',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
              {
                title: 'Mask Cream',
                thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
              },
            ]}
          />
        </Grid.Col>
      </Grid>

    </>
  );
}
