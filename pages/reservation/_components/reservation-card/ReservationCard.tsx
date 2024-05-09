import { Box, Group, Image, Pill, Stack, Text, Title, TitleOrder } from '@mantine/core';

export interface ReservationCard {
  title: string;
  thumb_url: string;
  titleOrder?: TitleOrder;
  isConfirm?: boolean
}

const ReservationCard: React.FC<ReservationCard> = ({ title, thumb_url, titleOrder = 4, isConfirm }) => (
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

      </Stack>
    </Group>
  </Box>
);
export { ReservationCard };
export default ReservationCard;
