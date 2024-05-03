import { Flex, Input, Pill, Space } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export const Search = () => <div>
  <Input placeholder="Search" radius="xl" size="md" leftSection={<IconSearch />} />
  <Space h="md" />
  <Flex gap="md">
    <Pill size="lg">
      Date
    </Pill>
    <Pill size="lg">
      Location
    </Pill>
    <Pill size="lg">
      Sort
    </Pill>
  </Flex>
</div>;
