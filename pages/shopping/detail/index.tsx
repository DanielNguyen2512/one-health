import { Box, Button, Group, List, ListItem, NumberInput, Pill, ScrollArea, Select, Space, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { Search } from '@/components/layout/search';
import { ShoppingCard } from '../_components/shopping-card';

export default function HomePage() {
  return (
    <div>
      <Box mb="md">
        <Group align="flex-start">
          <Link href="/shopping/list">
            <Text mt="sm">Back</Text>
          </Link>
          <Box flex={1}>
            <Search />
          </Box>
        </Group>
      </Box>
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

      <Space h="md" />
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
        <Button bg="dark">Checkout</Button>
      </Stack>
    </div>
  );
}
