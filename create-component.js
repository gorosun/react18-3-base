import fs from 'fs';
import path from 'path';

// コマンドライン引数からコンポーネント名を取得
const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

// コンポーネントディレクトリを設定
const componentDir = path.resolve('src/components/ui', componentName);

if (fs.existsSync(componentDir)) {
  console.error(`Component directory ${componentDir} already exists.`);
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

// コンポーネントのテンプレート
const componentTemplate = `import * as React from 'react';

import { cn } from '@/lib/utils';

export type ${componentName}Props = React.InputHTMLAttributes<HTMLInputElement>;

const ${componentName} = React.forwardRef<HTMLInputElement, ${componentName}Props>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
${componentName}.displayName = '${componentName}';

export { ${componentName} };
`;

// Storybook のテンプレート
const storyTemplate = `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
};

// インタラクションテストを追加する例
export const Focused: Story = {
  args: {
    autoFocus: true,
  },
};
`;

// コンポーネントファイルを作成
fs.writeFileSync(
  path.join(componentDir, `${componentName}.tsx`),
  componentTemplate
);

// Storybook ファイルを作成
fs.writeFileSync(
  path.join(componentDir, `${componentName}.stories.tsx`),
  storyTemplate
);

console.log(
  `Component ${componentName} created successfully in ${componentDir}`
);
