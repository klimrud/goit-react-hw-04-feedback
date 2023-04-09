import toast from 'react-hot-toast';

export const Notification = ({ message = 'There is no feedback' }) => {
  return toast(message, {
    icon: '👏',
  });
};
