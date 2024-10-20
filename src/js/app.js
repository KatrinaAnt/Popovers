import { Popover } from './Popover/popover';

export const button = document.querySelector('.btn-popover');
const popover = new Popover();

button.addEventListener('click', () => {
    popover.showPopover();
});