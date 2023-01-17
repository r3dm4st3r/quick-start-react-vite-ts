import { Icon } from '@iconify/react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { TRIGGER_DARK_MODE } from '../../redux/actions/config/config.actions';
import { DARK_MODE } from '../../redux/reducers/config/app/app.slice';
import { useEffectOnce, useUpdateEffect } from 'react-use';

const DarkModeToggle = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(DARK_MODE);
  const htmlEl = document.querySelector('html');
  const isLocal = localStorage.getItem('darkMode');

  const handleDarkMode = () => {
    dispatch(TRIGGER_DARK_MODE(!darkMode));
    localStorage.setItem('darkMode', `${!darkMode}`);
  };

  useUpdateEffect(() => {
    if (darkMode) {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }
  }, [darkMode]);

  useEffectOnce(() => {
    dispatch(TRIGGER_DARK_MODE(isLocal === 'true'));
  });

  return (
    <button
      className="bg-theme/10 rounded-full p-2 shadow-md flex items-center justify-center"
      onClick={() => handleDarkMode()}
    >
      <Icon width={20} icon={darkMode ? 'ph:sun-duotone' : 'ph:sun-dim-fill'} />
    </button>
  );
};

export default DarkModeToggle;
