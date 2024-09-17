import { cn } from '@/lib/utils';
import { ChangeEvent, FC, memo, useState } from 'react';

const TextInput: FC = memo(() => {
  const [text, setText] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        aria-label="Text Input"
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
        )}
      />
      <p>Entered Textb: {text}</p>
    </div>
  );
});

TextInput.displayName = 'TextInput'; // Display nameを明示的に設定
export { TextInput };
