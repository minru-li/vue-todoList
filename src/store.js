const STORAHE_KEY = 'todo-list';
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(
      STORAHE_KEY
    ) || '[]')
  },
  save: function (items) {
    window.localStorage.setItem(STORAHE_KEY,JSON.stringify(items))
  }
}
