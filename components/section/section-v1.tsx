import { Space, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export interface SectionProps<ItemType extends Record<string, any>> {
  title: string;
  items: ItemType[];
  titleUrl: string;
  renderItem: (item: ItemType, index: number) => React.ReactElement
}

// eslint-disable-next-line max-len
export const Section = <ItemType extends Record<string, any>>({ title, titleUrl, items = [], renderItem }: SectionProps<ItemType>) => <section>
  <Title order={2} size="20">
    <Link href={titleUrl}>
      {title}
    </Link>
  </Title>
  <Space h="md" />
  <Carousel
    slideSize="50%"
    slideGap="md"
    align="start"
    nextControlIcon={<IconArrowRight style={{ width: 20, height: 20 }} />}
    previousControlIcon={<IconArrowLeft style={{ width: 20, height: 20 }} />}
  >
    {
      items.map((item, index) => <Carousel.Slide key={index}>
        {
          renderItem(item, index)
        }
      </Carousel.Slide>)
    }

  </Carousel>
</section>;
