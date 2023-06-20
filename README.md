# Flatpickr Fast Select Plugin

The Flatpickr Fast Select plugin extends the functionality of Flatpickr by allowing quick selection of a single date using predefined shortcuts.

## Installation

To use the Fast Select plugin, you need to include both Flatpickr and the plugin file in your project. You can install them using npm, jsdelivr or include the files manually in your project.

### NPM
You can install the Fast Select plugin through NPM

```bash
npm install flatpickr
npm install flatpickr-fast-select-plugin
```

### jsDelivr
You can nclude flatpickr and flatpickr-fastselect files from jsdelivr.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.css">
<link href="https://cdn.jsdelivr.net/npm/flatpickr-fastselect@1/flatpickr-fastselect.min.css" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr-fastselect@1/flatpickr-fastselect.min.js"></script>
```

### Manual Installation
Or you can download the flatpickr.js and flatpickr-fast-select-plugin.js files from this repository and include them in your project.

```
<link rel="stylesheet" href="path/to/flatpickr.css">
<link rel="stylesheet" href="path/to/flatpickr-fastselect.css">

<script src="path/to/flatpickr.js"></script>
<script src="path/to/flatpickr-fastselect.js"></script>
```

## Usage
Once the plugin is installed, you can use it by configuring Flatpickr with the plugin options.

```
var fp = flatpickr("#myDatePicker", {
  // other Flatpickr options
  plugins: [fastselectPlugin()],
});
```
The predefined shortcuts allow quick selection of common dates like "Today", "Tomorrow", "Next week", "Next month" and "Next year". When a shortcut is clicked, the corresponding date will be selected.
You can also customize the shortcuts and their actions by passing a configuration object to the plugin.

```
var fp = flatpickr("#myDatePicker", {
  // other Flatpickr options
  plugins: [new fastselectPlugin({
    shortcut: [
      { text: 'Last year', value: [ new Date(new Date().getTime() - 365 * 24 * 60 * 60 * 1000) ] },
      { text: 'Last month', value: [ new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000) ] },
      { text: 'Last week', value: [ new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000) ] },
      { text: 'Yesterday', value: [ new Date(new Date().getTime() - 24 * 60 * 60 * 1000) ] },
      { text: 'Today', value: [ new Date(new Date()) ] },
    ],
  })],
});

```
## Plugin Options
The Fast Select plugin only accepts the shortcut array, with the values mentioned above. You can customize those values according to your needs though.

## License
This plugin is distributed under the MIT license.