import { Grid, Group, Space, Stack } from '@mantine/core';
import Link from 'next/link';
import { Search } from '@/components/layout/search';
import { ReservationSection } from './_components/reservation-section';
import { BottomBar } from '@/components/layout/bottom-bar';

const sideMenu = [
	{
		title: 'Trending Now',
		path: '/reservation/trending-now',
	},
	{
		title: 'Med Spa',
		path: '/reservation/med-spa',
	},
	{
		title: 'Mental Care',
		path: '/reservation/metal-care',
	},
];
export default function HomePage() {
	return (
		<>
			<Grid>
				<Grid.Col span={4}>
					<Space h={150} />
					<Group align="start">
						<BottomBar />
						<Stack ml="xl">
							{
								sideMenu.map(item => <Link key={item.title} href={item.path}>
									{item.title}
								</Link>)
							}
						</Stack>
					</Group>
				</Grid.Col>
				<Grid.Col span={8}>
					<Search />
					<Space h="md" />
					<ReservationSection
						title=""
						items={[
							{
								title: 'Shop 1',
								thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
							},
							{
								title: 'Shop 2',
								thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
							},
							{
								title: 'Shop 3',
								thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
							},
							{
								title: 'Shop 4',
								thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
							},
							{
								title: 'Shop 5',
								thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
							},
							{
								title: 'Shop 6',
								thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
							},
							{
								title: 'Shop 7',
								thumb_url: 'https://antdisplay.com/pub/media/magefan_blog/beauty_salon_4_.png',
							},
						]}
					/>
				</Grid.Col>
			</Grid>
		</>
	);
}
