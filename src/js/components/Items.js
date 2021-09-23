import Component from "../core/Component.js";
import { ItemStore } from '../stores/ItemStore.js';

export default class Items extends Component {

  template() {
    const { filteredItems } = ItemStore;
    return `
      <ul>
        ${filteredItems.map(({contents, active, seq}) => `
          <li data-seq="${seq}">
            ${contents}
            <button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
              ${active ? '활성' : '비활성'}
            </button>
            <button class="deleteBtn">삭제</button>
          </li>
        `).join('')}
      </ul>
    `
  }

  setEvent() {
    this.addEvent('click', '.deleteBtn', ({target}) => {
      this.deleteItem(Number(target.closest('[data-seq]').dataset.seq));
    });
    this.addEvent('click', '.toggleBtn', ({target}) => {
      this.toggleItem(Number(target.closest('[data-seq]').dataset.seq));
    });
  }

  deleteItem (seq) {
    const { items } = ItemStore.state;
    items.splice(items.findIndex(v => v.seq === seq), 1);
    ItemStore.setState({ items });
  }

  toggleItem (seq) {
    const { items } = ItemStore.state;
    const index = items.findIndex(v => v.seq === seq);
    items[index].active = !items[index].active;
    ItemStore.setState({ items });
  }

}