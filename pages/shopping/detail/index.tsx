import { Button, Grid, Group, List, ListItem, NumberInput, Pill, ScrollArea, Select, Space, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { Search } from '@/components/layout/search';
import { ShoppingCard } from '../_components/shopping-card';
import { BottomBar } from '@/components/layout/bottom-bar';

const sideMenu = [
  {
    title: 'Trending Now',
    path: '/shopping?type=trending-now',
  },
  {
    title: 'Med Spa',
    path: '/shopping?type=med-spa',
  },
  {
    title: 'Mental Care',
    path: '/shopping?type=metal-care',
  },
];

export default function HomePage() {
  return (
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
            <ShoppingCard titleOrder={2} title="Product 1" thumb_url="https://www.innisfree.com/my/en/resources/upload/product/36499_l.png" />
            <Space h="md" />
            <Title order={2} mb="md">Help</Title>
            <ScrollArea
              w="100%"
              h={40}
              scrollbars="x"
            >
              <Group gap="sm" wrap="nowrap">
                {
                  ['Clean', 'Relax', 'Remove', 'Smell', 'Ache'].map(item => <Pill size="md" key={item}>{item}</Pill>)
                }
              </Group>
            </ScrollArea>

            <Space h="md" />
            <Title order={2} mb="md">Review</Title>

            <List listStyleType="none">
              <ListItem mb="md">
                <Group>
                  <Text fw={300}>Anonymous 1</Text>
                  <Text fw={300}>Passionate about body care</Text>
                </Group>
                <Text fw={500}>
                  “the best product... highly recommend”
                </Text>
              </ListItem>

              <ListItem>
                <Group>
                  <Text fw={300}>Anonymous 2</Text>
                  <Text fw={300}>Newly arising voice</Text>
                </Group>
                <Text fw={500}>
                  “love it but to expensive imo...”
                </Text>
              </ListItem>
            </List>
          </Grid.Col>
          <Grid.Col span={4}>
            <Title order={2} mb="md">Buy Now</Title>

            <Stack>
              <Select
                label="Type"
                placeholder="Select product type"
                data={['Premium', 'Regular', 'Mini']}
              />
              <NumberInput
                label="Quantity"
                placeholder="Input quantity"
              />
              <Link href="/order"><Button bg="dark" w="50%">Checkout</Button></Link>
            </Stack>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>

  );
}
