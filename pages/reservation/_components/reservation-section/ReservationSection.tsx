import Link from 'next/link';
import { Section } from '@/components/section';
import { Reservation } from '../../../../components/types';
import { ReservationCard } from '../reservation-card/ReservationCard';

export interface ReservationSection {
  title: string;
  items: Reservation[];
}

const ReservationSection: React.FC<ReservationSection> = ({ title, items }) => (
  <Section
    title={title}
    titleUrl="/reservation/list"
    items={items}
    renderItem={(item) => <Link href="/reservation/detail"><ReservationCard {...item} /></Link>} />
);

export { ReservationSection };
export default ReservationSection;
