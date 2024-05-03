import { Card, Image } from '@mantine/core';
import Link from 'next/link';
import { Section } from '@/components/section';
import { Shopping } from '@/components/types';

export interface ShoppingSectionProps {
  title: string;
  items: Shopping[];
}

const ShoppingSection: React.FC<ShoppingSectionProps> = ({ title, items }) => (
  <Section
    title={title}
    items={items}
    titleUrl="/shopping/list"
    renderItem={(item) => <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Link href="/shopping/detail">
        <Card.Section>
          <Image
            src={item.thumb_url}
            height={160}
            width={160}
            alt="Norway"
          />
        </Card.Section>
      </Link>
    </Card>} />
);
export { ShoppingSection };
export default ShoppingSection;
