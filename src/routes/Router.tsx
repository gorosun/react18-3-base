import { TopLayout } from '@/layouts/TopLayout/TopLayout';
import { Top } from '@/pages/Top';
import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

const Router: FC = memo(() => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TopLayout>
            <Top />
          </TopLayout>
        }
      ></Route>
    </Routes>
  );
});

Router.displayName = 'Router';

export { Router };
