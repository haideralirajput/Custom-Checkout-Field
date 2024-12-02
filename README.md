# Delivery Instruction Validator - Shopify App Extension

A Shopify app extension that validates delivery instructions during checkout, ensuring that customers provide clear and actionable delivery details.

## Overview

Delivery Instruction Validator is a **Shopify app extension** designed to improve the checkout process by ensuring customers submit valid delivery instructions. This app extension integrates seamlessly with Shopify's checkout page, helping merchants reduce delivery errors and improve customer satisfaction.

## Features

- **Custom Validation Rules**: Set specific criteria for delivery instructions (e.g., minimum character count, prohibited words, etc.).
- **Real-Time Feedback**: Validates inputs instantly and provides user-friendly error messages.
- **Seamless Shopify Integration**: Works as a checkout extension for Shopify stores.
- **Localization Support**: Supports multiple languages for error messages.

## Installation

Follow these steps to set up the Delivery Instruction Validator:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/delivery-instruction-validator.git
   cd delivery-instruction-validator
   ```

2. **Install Dependencies**:
   Make sure you have Node.js and npm installed. Then, run:
   ```bash
   npm install
   ```

3. **Configure Shopify App**:
   - Create a Shopify partner account and register your app.
   - Set up the app's credentials (API key and secret) in a `.env` file:
     ```
     SHOPIFY_API_KEY=your_api_key
     SHOPIFY_API_SECRET=your_api_secret
     APP_URL=https://your-app-url.com
     ```

4. **Start the Development Server**:
   Run the following command to start the app:
   ```bash
   npm run dev
   ```

5. **Deploy the App Extension**:
   - Use Shopify CLI to link and deploy the app extension.
   ```bash
   shopify app deploy
   ```

6. **Enable the Extension in Shopify Admin**:
   Log in to your Shopify admin panel and enable the app in the checkout settings.

## Usage

1. **Access the App**:
   After installation, navigate to your Shopify store’s admin panel and open the app.

2. **Set Validation Rules**:
   - Define the criteria for delivery instructions, such as a minimum character limit or specific prohibited phrases.
   - Save your settings.

3. **Customer Interaction**:
   - During checkout, customers will see a delivery instruction field.
   - Invalid inputs will trigger an error message until the instructions meet the set criteria.

4. **Monitor Performance**:
   View validation statistics and adjust rules as needed from the app's dashboard.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
