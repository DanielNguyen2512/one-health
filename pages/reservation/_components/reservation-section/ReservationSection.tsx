import { Card, Image } from '@mantine/core';
import Link from 'next/link';
import { Section } from '@/components/section';
import { Reservation } from '../../../../components/types';

export interface ReservationSection {
  title: string;
  items: Reservation[];
}

const ReservationSection: React.FC<ReservationSection> = ({ title, items }) => (
  <Section
    title={title}
    titleUrl="/reservation/list"
    items={items}
    renderItem={(item) => <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Link href="/reservation/detail">
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

export { ReservationSection };
export default ReservationSection;
