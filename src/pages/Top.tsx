import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import { TextInput } from '@/components/ui/TextInput/TextInput';
import { SomeFeature } from '@/features/SomeFeature'; // `SomeFeature` をエントリーポイント `index.ts` からインポート
import { FC, memo } from 'react';

const Top: FC = memo(() => {
  return (
    <>
      <div className="flex items-center justify-center w-full py-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo w-48 h-48" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react w-48 h-48"
            alt="React logo"
          />
        </a>
      </div>
      <h2>Vite + React18.3 base</h2>
      <div className="card">
        <div className="flex items-center justify-center p-4">
          <TextInput />
        </div>
      </div>
      <SomeFeature />
    </>
  );
});
Top.displayName = 'Top';

export { Top };
