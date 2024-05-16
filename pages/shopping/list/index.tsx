import { Box, Group, List, Text } from '@mantine/core';
import Link from 'next/link';
import { ShoppingCard } from '../_components/shopping-card';
import { Search } from '@/components/layout/search';
import { Shopping } from '@/components/types';
import { useAuthContext } from '@/components/_context';

const mock: Shopping[] = [{
  title: 'Product 1',
  thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
}, {
  title: 'Product 2',
  thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
}, {
  title: 'Product 3',
  thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
}, {
  title: 'Product 4',
  thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
}, {
  title: 'Product 5',
  thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
}];

export default function HomePage() {
  const { isLoggedIn } = useAuthContext();

  return (
    <div>
      <Group align="flex-start">
        <Link href="/shopping">
          <Text mt="sm">Back</Text>
        </Link>
        <Box flex={1}>
          <Search />
        </Box>
      </Group>
      <List listStyleType="none">
        {
          mock.map(item => (
            <List.Item mb="md" key={item.title}>
              <Link href="/shopping/detail"><ShoppingCard {...item} displayPromos={!isLoggedIn} /></Link></List.Item>))
        }
      </List>
    </div>
  );
}
