import { observable } from '../core/observer';

export const ItemStore = {
  state: observable({
    isFilter: 0,
    items: [
      {
        seq: 1,
        contents: 'item1',
        active: false,
      },
      {
        seq: 2,
        contents: 'item2',
        active: true,
      }
    ]
  }),

  setState (newState) {
    for (const [key, value] of Object.entries(newState)) {
      if (this.state[key] === undefined) continue;
      this.state[key] = value;
    }
  },

  get filteredItems () {
    const { isFilter, items } = this.state;
    return items.filter(({ active }) => (isFilter === 1 && active) ||
      (isFilter === 2 && !active) || isFilter === 0);
  }
}