import { AppShell, Space } from '@mantine/core';
import { BottomBar } from '@/components/layout/bottom-bar/BottomBar';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <AppShell
      padding="md"
    >

      <AppShell.Main>

        {children}
      </AppShell.Main>

      <Space h={66} />
      <AppShell.Footer>
        <BottomBar />
      </AppShell.Footer>
    </AppShell>
  </>
);
