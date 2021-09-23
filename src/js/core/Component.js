import { observe } from './observer';

export default class Component {
  target;
  constructor(target) {
    this.target = target;
    this.setup();
    this.setEvent();
  }

  setup() {
    observe(() => { // state가 변경될 경우, 실행
      this.render();
    })
  }
  template() { return ""; }
  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }
  initState() { return {} }
  setEvent() {}
  addEvent (eventType, selector, callback) {
    const isTarget = (target) => target.closest(selector);
    this.target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    })
  }
  mounted() {}
}