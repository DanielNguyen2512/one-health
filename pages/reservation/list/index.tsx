import { Box, Group, List, Text } from '@mantine/core';
import Link from 'next/link';
import { ReservationCard } from '../_components/reservation-card';
import { Reservation } from '../../../components/types';
import { Search } from '@/components/layout/search';
import { useAuthContext } from '@/components/_context';

const mock: Reservation[] = [{
  title: 'Parner 1',
  thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
}, {
  title: 'Parner 2',
  thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
}, {
  title: 'Parner 3',
  thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
}, {
  title: 'Parner 4',
  thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
}, {
  title: 'Parner 5',
  thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
}];

export default function HomePage() {
  const { isLoggedIn } = useAuthContext();
  return (
    <div>
      <Group mb="md" align="flex-start">
        <Link href="/reservation">
          <Text mt="sm">Back</Text>
        </Link>
        <Box flex={1}>
          <Search />
        </Box>
      </Group>
      <List listStyleType="none">
        {
          mock.map(item => (
            <List.Item mb="md" key={item.title}><ReservationCard {...item} displayPromos={!isLoggedIn} /></List.Item>))
        }
      </List>
    </div>
  );
}
