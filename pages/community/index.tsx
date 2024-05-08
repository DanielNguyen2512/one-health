import { Button, Grid, Group, List, Select, Space, Stack, Textarea, Title } from '@mantine/core';
import Link from 'next/link';
import { Topic, TopicCard } from './_components/topic';
import { Search } from '@/components/layout/search';
import { BottomBar } from '@/components/layout/bottom-bar';

const sideMenu = [
	{
		title: 'Trending Now',
		path: '/community?type=trending-now',
	},
	{
		title: 'Med Spa',
		path: '/community?type=med-spa',
	},
	{
		title: 'Mental Care',
		path: '/community?type=metal-care',
	},
];

const communityData: Topic[] = [
	{
		category: 'Body care',
		type: 'Review',
		main: {
			author: 'anonymous 1',
			author_type: 'Newbie',
			like: 1200,
			dislike: 700,
			comments: 200,
			content: 'i need to boost up my appearance for my wedding!!!',
		},
		bestComment: {
			like: 500,
			dislike: 10,
			content: 'i went to xyz in downtown before...',
		},
	},
	{
		category: 'Advice',
		type: 'Mental care',
		main: {
			author: 'anonymous 1',
			author_type: 'Newbie',
			like: 1200,
			dislike: 700,
			comments: 200,
			content: 'i need help to have a better sleep',
		},
		bestComment: {
			like: 500,
			dislike: 10,
			content: 'hey i use this nutrition and it helps',
		},
	},
	{
		category: 'Question',
		type: 'General',
		main: {
			author: 'anonymous 1',
			author_type: 'Newbie',
			like: 1200,
			dislike: 700,
			comments: 200,
			content: 'Hey guys, can you share your fav spa?',
		},
		bestComment: {
			like: 500,
			dislike: 10,
			content: 'my fav place is abc in upper east',
		},
	},
];

export default function HomePage() {
	return (
		<div>
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
					<Grid>
						<Grid.Col span={8}>
							<List listStyleType="none">
								{
									communityData?.map((item, index) => (
										<List.Item key={index} mb="lg">
											<TopicCard topic={item} />
										</List.Item>
									))
								}
							</List>

						</Grid.Col>
						<Grid.Col span={4}>
							<Title order={2} mb="md">Share your thought</Title>

							<Stack>
								<Group>
									<Select
										label="Type"
										placeholder="Select product type"
										data={['Review', 'Advice', 'Question']}
									/>
									<Select
										label="Topic"
										placeholder="Input quantity"
										data={['Body care', 'Mental care', 'General']}
									/>
								</Group>
								<Textarea label="Content" />
								<Button bg="dark">Write now</Button>
							</Stack>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>

		</div>
	);
}
