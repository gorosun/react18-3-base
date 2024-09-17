import { FC, memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuIconButton } from '../MenuIconButton/MenuIconButton';
import { TopMenuDrawer } from '../TopMenuDrawer/TopMenuDrawer';

const TopHeader: FC = memo(() => {
  // `useState`を使って開閉状態を管理
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const navigate = useNavigate();

  const onClickTop = useCallback(() => navigate('/'), []);
  const onClickLogin = useCallback(() => navigate('/login'), []);

  return (
    <>
      <nav className="flex items-center justify-between bg-purple-500 text-gray-50 p-2 md:p-2">
        <a
          id="header-element"
          className="flex items-center mr-8 cursor-pointer"
          onClick={onClickTop}
        >
          <h1 className="text-md md:text-lg">TOP</h1>
        </a>
        <div className="hidden md:flex items-center text-sm flex-grow">
          <div className="pr-4">
            <a
              href="#"
              onClick={() => {
                alert('Company');
              }}
            >
              Company
            </a>
          </div>
          <div className="pr-4">
            <a href="#" onClick={onClickLogin}>
              Login
            </a>
          </div>
        </div>
        <MenuIconButton onOpen={onOpen} />
      </nav>
      <TopMenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickTop={onClickTop}
        onClickLogin={onClickLogin}
      />
    </>
  );
});

TopHeader.displayName = 'TopHeader';
export { TopHeader };
