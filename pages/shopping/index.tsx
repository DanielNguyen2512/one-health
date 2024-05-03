import { Space } from '@mantine/core';
import { Search } from '@/components/layout/search';
import { ShoppingSection } from './_components/shopping-section';

export default function HomePage() {
  return (
    <>
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
            title: 'Shop 1',
            thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
          },
        ]}
      />
      <Space h="md" />

      <ShoppingSection
        title="Trending Now"
        items={[
          {
            title: 'Shop 1',
            thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
          },
          {
            title: 'Shop 1',
            thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
          },
        ]}
      />
      <Space h="md" />
      <ShoppingSection
        title="Body Care"
        items={[
          {
            title: 'Shop 1',
            thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
          },
          {
            title: 'Shop 1',
            thumb_url: 'https://www.innisfree.com/my/en/resources/upload/product/36499_l.png',
          },
        ]}
      />
    </>
  );
}
