import { Box, Group, Image, Stack, Text, Title, TitleOrder } from '@mantine/core';

export interface ShoppingCardProps {
  title: string;
  thumb_url: string;
  titleOrder?: TitleOrder;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ title, thumb_url, titleOrder = 3 }) => (
  <Box>
    <Group justify="space-between" mb="sm">
      <Title order={titleOrder}>{title}</Title>
    </Group>
    <Group wrap="nowrap" align="start">
      <Image
        src={thumb_url}
        w={120}
        h={120}
        alt="Norway"
        object-fit="cover"
        radius="md"
      />
      <Stack gap={10}>
        <Text size="sm">
          Med Spa
        </Text>
        <Text size="sm">
          4/5 (220)
        </Text>
        <Text size="sm">
          #suggested
        </Text>
      </Stack>
    </Group>
  </Box>
);

export { ShoppingCard };
export default ShoppingCard;
