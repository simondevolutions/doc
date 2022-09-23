const dwdTab = {
  init: function () {
    const elements = document.querySelectorAll('[data-dwd-tab]');

    for (let element of elements) {
      if (element.closest('.tab-body-content') != null) {
        if (element.classList.contains('active')) {
          element.closest('.tab-body-content').style.height =
            element.clientHeight + 'px';
        }
      }
      element.addEventListener(
        'click',
        dwdTab.toggle.bind({
          element: element,
        })
      );
    }
  },
  toggle: function () {
    const element = this.element;
    const id = element.getAttribute('data-dwd-tab-target');
    const group = element.getAttribute('data-dwd-tab-group');
    const targets = document.querySelectorAll(
      '[data-dwd-tab-group="' + group + '"]'
    );
    for (let target of targets) {
      let targetId = target.getAttribute('data-dwd-tab-target');

      if (targetId === id) {
        target.style.height = target.scrollHeight + 'px';
        target.classList.toggle('active');

        if (!target.hasAttribute('data-dwd-tab')) {
          if (target.classList.contains('active')) {
            setTimeout(function() {
              target.style.height = 'auto';
            }, 250);
          } else {
            setTimeout(function() {
              target.style.height = 0;
            }, 100);
          }
        }
      }
    }
  },
};

(function () {
  dwdTab.init();
})();