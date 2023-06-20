function fastselectPlugin(pluginConfig) {
  return function (fp) {
    const today = new Date(new Date().setHours(0, 0, 0, 0));

    const add = (num) => {
      const _today = new Date(today);
      const result = _today.setDate(_today.getDate() + num);
      return new Date(result);
    };

    const defaultConfig = {
      shortcut: [
        { text: 'Today', value: new Date(Date.now()) },
        { text: 'Tomorrow', value: add(1) },
        { text: 'Next week', value: add(7) },
        { text: 'Next month', value: add(30) },
        { text: 'Next year', value: add(365) }
      ],
      onChange: (selectedDates, fp) => {}
    };

    const config = Object.assign({}, defaultConfig, pluginConfig);

    config.shortcut = config.shortcut.map((c) => ({ value: [c.value], ...c }));

    let listContainer;
    const itemsContainer = [];

    const hooks = {
      onReady: () => {
        if (!fp.calendarContainer) return;

        fp.calendarContainer.classList.add('with-shortcut');
        fp.shortcutPickRangePanelContainer = fp._createElement('div', 'flatpickr-shortcutPickRangePanel');
        fp.calendarContainer.append(fp.shortcutPickRangePanelContainer);

        fp.monthNav.remove();
        fp.rContainer.append(fp.monthNav);

        listContainer = fp._createElement('ul', 'flatpickr-shortcut-list');
        config.shortcut.forEach((item) => {
          const itemContainer = fp._createElement('li', `flatpickr-shortcut-list-item`, item.text);
          itemContainer.addEventListener('click', (e) => {
            const date = new Date(item.value);
            fp.setDate(date);
            fp.close();
          });
          listContainer.appendChild(itemContainer);
          itemsContainer.push(itemContainer);
        });
        fp.shortcutPickRangePanelContainer.appendChild(listContainer);
      },
      onChange: () => {
        if (fp.selectedDates.length < 1) return;
        config.onChange(fp.selectedDates, fp);
      },
    };

    return hooks;
  };
}

if (typeof module !== 'undefined') {
  module.exports = fastselectPlugin;
}
