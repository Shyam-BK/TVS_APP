import { View, Text, ScrollView } from "react-native";
import React from "react";

const Policy = () => {
  return (
    <View style={{ flex: 13, paddingHorizontal: 20 }}>

        <Text style={{ fontSize: 17, marginBottom: 10, fontWeight: "bold" }}>
          Privacy Policy for Location Locator App
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10, fontWeight: "bold" }}>
          Last Updated: 17.06.24
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          Welcome to the Location Locator App. Your privacy is important to us,
          and this Privacy Policy explains how we collect, use, disclose, and
          protect your information when you use our app.
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          We collect personal information such as your contact information
          (email address, phone number, and name) and real-time GPS location
          data to provide location-based services. Additionally, we gather usage
          data, including information about how you use the app, features
          accessed, time spent, device type, operating system, and unique device
          identifiers.
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          We use the information we collect to provide and improve our services,
          enhance app functionality, communicate with you, and analyze usage
          patterns. Your location data is essential for delivering accurate
          location-based services, and we may send you updates, security alerts,
          and support messages based on your contact information.
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          We do not share your personal information with third parties, except
          when you give explicit consent, when required by law, or to protect
          the rights, property, or safety of our users or the public. We
          implement appropriate technical and organizational measures to
          safeguard your data from unauthorized access, alteration, disclosure,
          or destruction. However, no internet or app transmission is completely
          secure, and we cannot guarantee absolute security.
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          We retain your personal information only as long as necessary to
          provide our services and fulfill the purposes outlined in this policy.
          After that, we securely delete or anonymize your data. You have the
          right to request a copy of the data we hold about you, correct
          inaccurate or incomplete data, request deletion of your personal data,
          and object to processing your data in certain circumstances.
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the "Last Updated" date. We encourage you to review this policy
          periodically.
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          - <Text style={{ fontWeight: "bold" }}>Email:</Text>{" "}
          [your-email@example.com]
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          - <Text style={{ fontWeight: "bold" }}>Address:</Text> [Your Address]
        </Text>
        <Text style={{ fontSize: 15
            , marginBottom: 10 }}>
          By using the Location Locator App, you consent to this Privacy Policy.
        </Text>
    </View>
  );
};

export default Policy;
