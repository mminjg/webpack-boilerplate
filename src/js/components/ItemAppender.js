import Component from "../core/Component.js";
import { ItemStore } from '../stores/ItemStore.js';

export default class ItemAppender extends Component {

  template() {
    return `<input type="text" class="appender" placeholder="아이템 내용 입력" />`;
  }

  setEvent() {
    this.addEvent('keyup', '.appender', ({ key, target }) => {
      if (key !== 'Enter') return;
      this.addItem(target.value);
    });
  }

  addItem (contents) {
    const { items } = ItemStore.state;
    const seq = Math.max(0, ...items.map(v => v.seq)) + 1;
    const active = false;
    ItemStore.setState({
      items: [...items, { seq, contents, active }]
    });
  }
}