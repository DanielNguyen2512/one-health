import { Box, Button, Group, List, Select, Space, Stack, Textarea, Title } from '@mantine/core';
import { Topic, TopicCard } from './_components/topic';
import { Search } from '@/components/layout/search';

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
			<Box mb="md">
				<Search />
			</Box>
			<List listStyleType="none">
				{
					communityData?.map((item, index) => (
						<List.Item key={index} mb="lg">
							<TopicCard topic={item} />
						</List.Item>
					))
				}
			</List>
			<Space h="md" />
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
		</div>
	);
}
