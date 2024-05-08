import { Box, Grid, List, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

const sideMenu = [
  {
    title: 'All',
    path: '/blog',
  },
  {
    title: 'Health',
    path: '/blog/health',
  },
  {
    title: 'Fitness',
    path: '/blog/fitness',
  },
  {
    title: 'Nutrition',
    path: '/blog/nutrition',
  },
  {
    title: 'Appearance',
    path: '/blog/appearance',
  },
  {
    title: 'Mental Care',
    path: '/blog/mental-care',
  },
];

const communityData: any[] = [
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
          <Stack ml="xl" align="flex-start">
            {
              sideMenu.map(item => <Link key={item.title} href={item.path}>
                <Text mb="md" mt="md">{item.title}</Text>
              </Link>)
            }
          </Stack>
        </Grid.Col>
        <Grid.Col span={8}>
          <List listStyleType="none">
            {
              communityData?.map((item, index) => (
                <List.Item m="lg" key={index} mb="lg">
                  <Box>
                    <Title order={3}>Artical #1</Title>
                    <Text mb="sm" mt="sm">#health #dental care</Text>
                    <Text>teasing: etc. ...</Text>
                  </Box>
                </List.Item>
              ))
            }
          </List>
        </Grid.Col>
      </Grid>

    </div>
  );
}
