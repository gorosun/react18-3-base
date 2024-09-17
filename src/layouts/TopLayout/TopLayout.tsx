import { TopHeader } from '@/components/ui/TopHeader/TopHeader';
import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const TopLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <TopHeader />
      {children}
    </>
  );
});

TopLayout.displayName = 'TopLayout';
export { TopLayout };
