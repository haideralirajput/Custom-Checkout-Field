import React, { useState } from "react";
import {
  reactExtension,
  TextField,
  BlockStack,
  useApplyMetafieldsChange, // Shopify hook to update metafields
  useMetafield, // Shopify hook to access metafields
  Checkbox,
  useExtensionCapability, // Shopify hook to declare app capabilities (like validation)
  useBuyerJourneyIntercept, // Shopify hook to control user flow during checkout
} from "@shopify/ui-extensions-react/checkout";
import { useDeliveryGroupListTarget } from "@shopify/ui-extensions-react/checkout"; // Shopify hook to target specific delivery groups

// Set the entry point for the extension
export default reactExtension("purchase.checkout.shipping-option-list.render-after", () => <App />);

function App() {
  // React states to manage checkbox status and error message
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(null);

  // Define the metafield namespace and key
  const metafieldNamespace = "custom";
  const metafieldKey = "custom_field";

  // Shopify hook: Fetch an existing metafield (if it exists)
  const deliveryInstructions = useMetafield({
    namespace: metafieldNamespace,
    key: metafieldKey,
  });

  // Shopify hook: Apply changes to a metafield
  const applyMetafieldsChange = useApplyMetafieldsChange();

  // Shopify hook: Declare that this app supports the "validate" capability
  useExtensionCapability("validate");

  // Shopify hook: Intercept the buyer journey and enforce validation
  useBuyerJourneyIntercept((intercept) => {
    if (checked && !deliveryInstructions?.value?.trim()) {
      // If the checkbox is checked but the text field is empty, reject the flow
      setError("Delivery instructions are required.");
      intercept.reject(); // Stop the user from continuing checkout
    } else {
      // If validation passes, clear any error and allow the user to proceed
      setError(null);
      intercept.allow(); // Let the user continue
    }
  });

  // Shopify hook: Get information about the current delivery group
  const deliveryGroupList = useDeliveryGroupListTarget();
  if (!deliveryGroupList || deliveryGroupList.groupType !== "oneTimePurchase") {
    // Ensure the app only runs for "one-time purchase" groups
    return null;
  }

  // Handle changes to the checkbox
  const handleChange = () => {
    setChecked(!checked); // Toggle the checkbox state
  };

  // Render the UI
  return (
    <BlockStack>
      <Checkbox checked={checked} onChange={handleChange}>
        Provide delivery instructions
      </Checkbox>
      {checked && (
        <TextField
          label="Delivery instructions"
          multiline={3}
          error={error} // Show error message if validation fails
          onChange={(value) => {
            // Clear error if the input is valid
            if (value.trim()) {
              setError(null);
            }
            // Shopify hook: Update the metafield value when the user types
            applyMetafieldsChange({
              type: "updateMetafield",
              namespace: metafieldNamespace,
              key: metafieldKey,
              valueType: "string",
              value,
            });
          }}
          value={deliveryInstructions?.value} // Show the current metafield value
        />
      )}
    </BlockStack>
  );
}
