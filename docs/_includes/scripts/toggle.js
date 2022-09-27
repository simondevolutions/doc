const dwdToggle = {
  init: function () {
    const elements = document.querySelectorAll('[data-dwd-toggle]');

    for (let element of elements) {
      element.addEventListener(
        'click',
        dwdToggle.toggle.bind({
          element: element,
        })
      );
    }
  },
  toggle: function () {
    const element = this.element;
    const id = element.getAttribute('data-dwd-toggle-target');
    const group = element.getAttribute('data-dwd-toggle-group');
    const targets = document.querySelectorAll(
      '[data-dwd-toggle-group="' + group + '"]'
    );

    for (let target of targets) {
      let targetId = target.getAttribute('data-dwd-toggle-target');

      if (targetId === id) {
        target.classList.toggle('active');
      } else {
        target.classList.remove('active');
      }
    }
  },
};

(function () {
  dwdToggle.init();
})();