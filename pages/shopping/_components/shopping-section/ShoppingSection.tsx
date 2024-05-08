import Link from 'next/link';
import { Section } from '@/components/section';
import { Shopping } from '@/components/types';
import { ShoppingCard } from '../shopping-card';

export interface ShoppingSectionProps {
  title: string;
  items: Shopping[];
}

const ShoppingSection: React.FC<ShoppingSectionProps> = ({ items }) => (
  <Section
    title=""
    items={items}
    titleUrl="/shopping/list"
    renderItem={(item) => <Link href="/shopping/detail">
      <ShoppingCard {...item} />
    </Link>} />
);
export { ShoppingSection };
export default ShoppingSection;
