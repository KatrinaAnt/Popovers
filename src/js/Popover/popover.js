export class Popover {
    constuctor() {
        this._element = null;
        this._popover = null;
    }

    creatingPopover() {
        this._element = document.querySelector('.btn-popover');
        const popoverElement = document.createElement('div');
        popoverElement.classList.add('popover');

        const popoverArrow = document.createElement('div');
        popoverArrow.classList.add('arrow');

        const popoverTitle = document.createElement('h3');
        popoverTitle.classList.add('popover-title');
        popoverTitle.textContent = this._element.getAttribute('title');

        const popoverBody = document.createElement('div');
        popoverBody.classList.add('popover-body');
        popoverBody.textContent = this._element.dataset.content;

        popoverElement.appendChild(popoverArrow);
        popoverElement.appendChild(popoverTitle);
        popoverElement.appendChild(popoverBody);
        this._popover = popoverElement;

        document.body.appendChild(popoverElement);

        const { left, top, right } = this._element.getBoundingClientRect();
        console.log(this._element.getBoundingClientRect());
        popoverElement.style.left = left - 7 + 'px';
        popoverElement.style.top = top - this._element.offsetHeight * 3.10 + 'px';
        popoverArrow.style.right = right - this._element.offsetWidth / 1.75 + 'px';
    }

    showPopover() {
        if(!this._popover) {
            this.creatingPopover();
        } else {
            this.removePopover();
        }
    }

    removePopover() {
        this._popover.remove();
        this._popover = null;
    }
}