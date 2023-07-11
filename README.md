# Wealthsimple Dashboard Customizer

The Wealthsimple Dashboard Customizer is a browser extension that enhances the Wealthsimple dashboard experience by providing options to hide and show specific content elements.

## Features

- Hide or show specific content elements on the Wealthsimple dashboard.
- Customize your dashboard view based on your preferences.
- Improved user experience by focusing on the information that matters most to you.

## Installation

To manually install the Wealthsimple Dashboard Customizer extension, follow these steps:

1. Clone or download this repository to your local machine.
2. Open your preferred web browser (Chrome, Firefox, etc.).
3. Navigate to the browser's extension management page:
   - **Chrome**: Open `chrome://extensions/`.
   - **Firefox**: Open `about:addons`.
   - **Edge**: Open `edge://extensions/`.
4. Enable "Developer mode" or a similar option.
5. Click on "Load unpacked" or "Load extension" (depending on the browser) and select the directory where you cloned or downloaded this repository.
6. The Wealthsimple Dashboard Customizer extension will be installed and ready to use.

Note: Ensure that your browser is up to date and compatible with the extension.

## Usage

Once the Wealthsimple Dashboard Customizer extension is installed, follow these steps to customize your Wealthsimple dashboard:

1. Open the Wealthsimple dashboard website.
2. Click on the extension icon in your browser toolbar to access the options.
3. In the options, enter the specific lines or elements you want to hide or show in the provided input field.
4. Save your changes.
5. Refresh the Wealthsimple dashboard page to see the updated view according to your preferences.

## Support

If you encounter any issues, have suggestions, or need assistance, please feel free to [open an issue](https://https://github.com/stevedya/wealthsimple-dashboard-customizer/issues). We appreciate your feedback and will do our best to address it.

## Development

To compile the styles while working on the project please use this command: `npx tailwindcss -i ./css/input.css -o ./main.css --watch`

For production releases please compile with: `npx tailwindcss -i ./css/input.css -o ./main.css --minify`

## License

This extension is released under the [MIT License](https://opensource.org/licenses/MIT).