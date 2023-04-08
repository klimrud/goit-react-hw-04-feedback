import toast from 'react-hot-toast';

export const Notification = ({ message = 'There is no feedback'}) => {
   console.log('hy');
 
  return  toast(message, {
    icon: '👏',
  })
 
};
