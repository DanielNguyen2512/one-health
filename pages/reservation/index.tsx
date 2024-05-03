import { Space } from '@mantine/core';
import { Search } from '@/components/layout/search';
import { ReservationSection } from './_components/reservation-section';

export default function HomePage() {
	return (
		<>
			<Search />
			<Space h="md" />
			<ReservationSection
				title="Suggestion for you"
				items={[
					{
						title: 'Shop 1',
						thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
					},
					{
						title: 'Shop 1',
						thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
					},
				]}
			/>
			<Space h="md" />

			<ReservationSection
				title="Trending Now"
				items={[
					{
						title: 'Shop 1',
						thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
					},
					{
						title: 'Shop 1',
						thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
					},
				]}
			/>
			<Space h="md" />
			<ReservationSection
				title="Mental Care"
				items={[
					{
						title: 'Shop 1',
						thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
					},
					{
						title: 'Shop 1',
						thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
					},
				]}
			/>
		</>
	);
}
