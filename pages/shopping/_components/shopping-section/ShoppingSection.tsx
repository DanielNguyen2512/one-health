import Link from 'next/link';
import { Section } from '@/components/section';
import { Shopping } from '@/components/types';
import { ShoppingCard } from '../shopping-card';
import { useAuthContext } from '@/components/_context';

export interface ShoppingSectionProps {
  title: string;
  items: Shopping[];
}

const ShoppingSection: React.FC<ShoppingSectionProps> = ({ items }) => {
  const { isLoggedIn } = useAuthContext();

  return (
    <Section
      title=""
      items={items}
      titleUrl="/shopping/list"
      renderItem={(item) => <Link href="/shopping/detail">
        <ShoppingCard {...item} displayPromos={!isLoggedIn} />
      </Link>} />
  );
};
export { ShoppingSection };
export default ShoppingSection;
