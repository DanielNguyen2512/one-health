import { Alert, Box, Group, Image, Pill, Stack, Text, Title, TitleOrder } from '@mantine/core';
import { IconInfoCircleFilled } from '@tabler/icons-react';
import Link from 'next/link';

export interface ReservationCard {
  title: string;
  thumb_url: string;
  titleOrder?: TitleOrder;
  isConfirm?: boolean;
  displayPromos?: boolean;
}

const ReservationCard: React.FC<ReservationCard> = ({ title, thumb_url, titleOrder = 4, isConfirm, displayPromos = false }) => (
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
          Med Spa
        </Text>
        <Text size="sm">
          4/5 (220)
        </Text>
        {
          isConfirm ? <Text size="sm">
            Confirmed
          </Text> : <>
            <Text size="sm">
              #suggested
            </Text>
            <Group gap={5}>
              <Pill radius="sm">9:00 am</Pill>
              <Pill radius="sm">10:00 am</Pill>
              <Pill radius="sm">11:00 am</Pill>
            </Group></>
        }
        {displayPromos && <Link href="/login"><Alert variant="transparent" color="red" radius="xs" p={0} title="Login to see available promos and exclusive deals" icon={<IconInfoCircleFilled />} /></Link>}
      </Stack>

    </Group>
  </Box>
);
export { ReservationCard };
export default ReservationCard;
