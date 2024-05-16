import { Box, Button, Grid, Group, Image, Pill, ScrollArea, Space, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Search } from '@/components/layout/search';
import { BottomBar } from '@/components/layout/bottom-bar';
import { useAuthContext } from '../../components/_context';

const sideMenu = [
	{
		title: 'Post',
		path: '/blog',
	},
	{
		title: 'Booking / orders',
		path: '/order',
	},
	{
		title: 'Payment',
		path: '/profile',
	},
	{
		title: 'FAQ',
		path: '/profile',
	},
	{
		title: 'Feedback',
		path: '/profile',
	},
];

export default function HomePage() {
	const { isLoggedIn, userInfo, logout } = useAuthContext();
	const { push } = useRouter();

	useEffect(() => {
		if (!isLoggedIn) {
			push('/login');
		}
	}, []);
	if (!isLoggedIn) {
		return null;
	}
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
									<Text mb="xl">
										{item.title}
									</Text>
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
							<Box>
								<Group justify="space-between" mb="sm">
									<Title order={2}>Hong Over</Title>
								</Group>
								<Group wrap="nowrap" align="start">
									<Image
										src={userInfo.avatarUrl}
										w={120}
										h={120}
										alt="Norway"
										object-fit="cover"
										radius="md"
									/>
									<Stack gap={10}>
										<Text size="sm">
											User name: {userInfo.displayName}
										</Text>
										<Text size="sm">
											Tag line: “newbie but passionate about self care”
										</Text>
									</Stack>
								</Group>
								<Stack gap={10} mt="md">
									<Text size="sm">
										Email: hongoverflower@gmail.com
									</Text>
									<Text size="sm">
										Phone: 012121212
									</Text>
									<Text size="sm">
										Address: Washington DC
									</Text>
								</Stack>
							</Box>

							<Space h="md" />
							<Title order={2} mb="md">Perferences</Title>
							<ScrollArea
								w="100%"
								h={40}
								scrollbars="x"
							>
								<Group gap="sm" wrap="nowrap">
									{
										['Services', 'Products', 'Needs', 'Areas', 'Body'].map(item => <Pill size="lg" key={item}>{item}</Pill>)
									}
								</Group>
							</ScrollArea>

						</Grid.Col>
						<Grid.Col span={4}>
							<Title order={2} mb="md">Settings</Title>

							<Grid>
								<Grid.Col span={6}>
									<Button fullWidth bg="#EEEEEE" style={{ color: 'black' }}>Privacy</Button>
								</Grid.Col>
								<Grid.Col span={6}>
									<Button fullWidth bg="#EEEEEE" style={{ color: 'black' }}>Support</Button>
								</Grid.Col>
								<Grid.Col span={6}>
									<Button onClick={logout} fullWidth bg="#EEEEEE" style={{ color: 'black' }}>Log out</Button>
								</Grid.Col>
							</Grid>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>

		</div>
	);
}
