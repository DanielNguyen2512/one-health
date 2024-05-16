import { Alert, Box, Group, Image, Stack, Text, Title, TitleOrder } from '@mantine/core';
import { IconInfoCircleFilled } from '@tabler/icons-react';
import Link from 'next/link';

export interface ShoppingCardProps {
  title: string;
  thumb_url: string;
  titleOrder?: TitleOrder;
  isConfirm?: boolean;
  displayPromos?: boolean;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ title, thumb_url, titleOrder = 4, isConfirm, displayPromos }) => (
  <Box>
    <Group justify="space-between" mb="sm">
      <Title order={titleOrder}>{title}</Title>
    </Group>
    <Group wrap="nowrap" align="start">
      <Image
        src={thumb_url}
        w={120}
        h={120}
        width={120}
        height={120}
        alt="Norway"
        object-fit="cover"
        radius="md"
      />
      <Stack gap={10}>
        <Text size="sm">
          Body Care
        </Text>
        <Text size="sm">
          4/5 (220)
        </Text>
        <Text size="sm">
          $100
        </Text>
        {
          isConfirm ? <Text size="sm">
            Confirmed
          </Text> : <Text size="sm">
            #suggested, #available promo & deal
          </Text>
        }
        {displayPromos && <Link href="/login"><Alert variant="transparent" color="red" radius="xs" p={0} title="Login to see available promos and exclusive deals" icon={<IconInfoCircleFilled />} /></Link>}
      </Stack>
    </Group>
  </Box>
);

export { ShoppingCard };
export default ShoppingCard;
