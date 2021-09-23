import Component from '../core/Component';
import Items from '../components/Items';
import ItemAppender from '../components/ItemAppender';
import ItemFilter from '../components/ItemFilter';

export default class MainPage extends Component {

  template() {
    return `
      <header data-component="item-appender"></header>
      <main data-component="items"></main>
      <footer data-component="item-filter"></footer>
    `;
  }

  mounted () {
    const itemAppender = this.target.querySelector('[data-component="item-appender"]');
    const items = this.target.querySelector('[data-component="items"]');
    const itemFilter = this.target.querySelector('[data-component="item-filter"]');

    new ItemAppender(itemAppender);
    new Items(items);
    new ItemFilter(itemFilter);
  }
}