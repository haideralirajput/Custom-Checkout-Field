# Delivery Instruction Validator - Shopify App Extension

A Shopify app extension that validates delivery instructions during checkout, ensuring that customers provide clear and actionable delivery details.

## Overview

Delivery Instruction Validator is a **Shopify app extension** designed to improve the checkout process by ensuring customers submit valid delivery instructions. This app extension integrates seamlessly with Shopify's checkout page, helping merchants reduce delivery errors and improve customer satisfaction.

## Features

- **Delivery Checkbox Validation**: Ensures that customers select the delivery instruction checkbox before completing their checkout.  
- **Error Prompt**: Displays a clear error message, *"Delivery field is not checked"*, if the checkbox is not selected.  
- **Easy Integration**: Seamlessly integrates with the Shopify checkout process with minimal setup.  

## Installation

Follow these steps to set up the Delivery Instruction Validator:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/haideralirajput/Custom-Checkout-Field.git
 cd custom-checkout-field
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
