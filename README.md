# QR Code Generator

This is a simple QR Code Generator built using HTML, CSS, and JavaScript. It allows users to generate a QR code based on their input text.

## Features
- Takes user input and generates a QR code.
- Uses an external API to generate QR codes.
- Displays a loading message while fetching the QR code.
- Provides validation for empty input fields.

## Technologies Used
- HTML
- CSS
- JavaScript
- [QR Code API](https://goqr.me/api/)

## How to Use
1. Enter text in the input field.
2. Click the "Generate QR Code" button.
3. A QR code will be generated and displayed.

## Installation and Setup
1. Clone the repository or copy the source files.
2. Open `index.html` in your browser.
3. Ensure you have an internet connection to fetch the QR code from the API.

## Code Explanation
- The JavaScript fetches a QR code from an external API based on the user's input.
- A loading message is displayed while the QR code is being generated.
- If the input field is empty, an error message is shown.

## Example API Call
```
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YourTextHere
```

## Troubleshooting
- Ensure that the input field is not empty before clicking the button.
- If the QR code does not appear, check your internet connection.



