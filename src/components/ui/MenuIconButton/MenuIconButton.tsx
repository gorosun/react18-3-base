import { FC, memo } from 'react';

type Props = {
  onOpen: () => void;
};

const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <button
      aria-label="メニューボタン"
      className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 block md:hidden"
      onClick={onOpen}
    >
      {/* SVGによるハンバーガーアイコン */}
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
});
MenuIconButton.displayName = 'MenuIconButton';
export { MenuIconButton };
