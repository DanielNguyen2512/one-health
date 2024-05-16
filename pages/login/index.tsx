import { TextInput, Button, Group, Box, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../components/_context';

export default () => {
  const { login } = useAuthContext();
  const { replace } = useRouter();
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Stack h="80vh" justify="center" align="center">
      <Box maw={340} mx="auto">
        <form onSubmit={form.onSubmit(() => {
          login();
          replace('/reservation');
        })}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />

          <TextInput
            withAsterisk
            label="Passworld"
            type="password"
            placeholder="passworld"
            key={form.key('passworld')}
            {...form.getInputProps('passworld')}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit" bg="#FF9800">Login</Button>
          </Group>
        </form>
      </Box>
    </Stack>

  );
};
