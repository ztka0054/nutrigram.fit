import { toast } from 'react-toastify';

export let message_1 = (message) => {
    toast(message, {
        className: 'toast-container',
        closeButton: false,
        autoClose: 5000
    });
}