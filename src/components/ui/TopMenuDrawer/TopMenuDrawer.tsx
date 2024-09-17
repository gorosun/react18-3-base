import { FC, memo } from 'react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickTop: () => void;
  onClickLogin: () => void;
};

const TopMenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickTop, onClickLogin } = props;

  return (
    <>
      {/* モーダルのオーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
      {/* ドロワーコンテンツ */}
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-100 p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button className="w-full mb-2 py-2 text-left" onClick={onClickTop}>
          TOP
        </button>
        <button className="w-full mb-2 py-2 text-left" onClick={() => {}}>
          Company
        </button>
        <button className="w-full py-2 text-left" onClick={onClickLogin}>
          Login
        </button>
      </div>
    </>
  );
});

TopMenuDrawer.displayName = 'TopMenuDrawer';
export { TopMenuDrawer };
