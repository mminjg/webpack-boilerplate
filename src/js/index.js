import { router } from "./router";

(function () {
  window.addEventListener("popstate", router);
  document.addEventListener("DOMContentLoaded", router);
})();