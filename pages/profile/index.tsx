import { Box, Group, Image, NavLink, Pill, ScrollArea, Space, Stack, Text, Title } from '@mantine/core';
import { IconChevronRight, IconHelp, IconLockSquare, IconLogout } from '@tabler/icons-react';
import { Search } from '@/components/layout/search';

export default function HomePage() {
	return (
		<div>
			<Box mb="md">
				<Search />
			</Box>

			<Box>
				<Group justify="space-between" mb="sm">
					<Title order={2}>Hong Over</Title>
				</Group>
				<Group wrap="nowrap" align="start">
					<Image
						src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
						w={120}
						h={120}
						alt="Norway"
						object-fit="cover"
						radius="md"
					/>
					<Stack gap={10}>
						<Text size="sm">
							User name: hongoverflower
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
						['Services', 'Products', 'Needs', 'Areas', 'Body'].map(item => <Pill size="md" key={item}>{item}</Pill>)
					}
				</Group>
			</ScrollArea>

			<Space h="md" />
			<Title order={2} mb="md">Settings</Title>

			<Stack>
				<NavLink
					href="#required-for-focus"
					label="Privacy"
					leftSection={<IconLockSquare size="1rem" stroke={1.5} />}
					rightSection={
						<IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
					}
					active
				/>
				<NavLink
					href="#required-for-focus"
					label="Support"
					leftSection={<IconHelp size="1rem" stroke={1.5} />}
					rightSection={
						<IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
					}
					active
				/>
				<NavLink
					href="#required-for-focus"
					label="Logout"
					leftSection={<IconLogout size="1rem" stroke={1.5} />}
					rightSection={
						<IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
					}
					active
				/>

			</Stack>
		</div>
	);
}
