import { Box, Flex, Group, Text, Title } from '@mantine/core';
import { IconCaretDownFilled, IconCaretUpFilled, IconDotsVertical, IconMessageCircle2Filled } from '@tabler/icons-react';

export type Topic = {
  type: string;
  category: string;
  main: {
    author: string;
    author_type: string;
    content: string;
    like: number;
    dislike: number;
    comments: number;
  }
  bestComment?: {
    content: string;
    like: number;
    dislike: number;
  }
};

export type TopicProps = {
  topic: Topic
};

const TopicCard: React.FC<TopicProps> = ({ topic }) => {
  const { category, type, main, bestComment } = topic ?? {};
  return <Box>
    <Title order={2} mb="sm">
      {type} / {category}
    </Title>
    <Group gap="lg" mb="sm">
      <Text c="dimmed">
        {main?.author}
      </Text>
      <Text c="dimmed">
        {main?.author_type}
      </Text>
    </Group>
    <Text mb="sm">
      {main?.content}
    </Text>
    <Group gap="md" mb="sm">
      <Group gap="sm" align="center">
        <IconCaretUpFilled style={{ width: 15, height: 15 }} />
        <Text>{Intl.NumberFormat('en-US', {
          notation: 'compact',
          maximumFractionDigits: 1,
        }).format(main?.like)}</Text>
      </Group>
      <Group gap="sm" align="center">
        <IconCaretDownFilled style={{ width: 15, height: 15 }} />
        <Text>{Intl.NumberFormat('en-US', {
          notation: 'compact',
          maximumFractionDigits: 1,
        }).format(main?.dislike)}</Text>
      </Group>
      <Group gap="sm" align="center">
        <IconMessageCircle2Filled style={{ width: 15, height: 15 }} />
        <Text>{Intl.NumberFormat('en-US', {
          notation: 'compact',
          maximumFractionDigits: 1,
        }).format(main?.dislike)}</Text>
      </Group>

    </Group>
    {
      !!bestComment && (
        <Flex justify="start" align="center" wrap="nowrap">
          <IconDotsVertical color="#9E9E9E" />
          <Group wrap="nowrap" flex={1} bg="#EEEEEE" p="xs" style={{ borderRadius: 10 }}>
            <Box>
              <Text truncate="end">
                {bestComment.content}
              </Text>
            </Box>
            <Group wrap="nowrap" gap="xs">
              <Group wrap="nowrap" gap="xs">
                <IconCaretUpFilled style={{ width: 15, height: 15 }} />
                <Text>{Intl.NumberFormat('en-US', {
                  notation: 'compact',
                  maximumFractionDigits: 1,
                }).format(bestComment.like)}</Text>
              </Group>
              <Group wrap="nowrap" gap="xs">
                <IconCaretDownFilled style={{ width: 15, height: 15 }} />
                <Text>{Intl.NumberFormat('en-US', {
                  notation: 'compact',
                  maximumFractionDigits: 1,
                }).format(bestComment.dislike)}</Text>
              </Group>
            </Group>
          </Group>
        </Flex>
      )
    }

  </Box>;
};
export { TopicCard };
export default TopicCard;
