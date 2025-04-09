import React from "react";
import "../assets/css/privacy.css";

const policyItems = [
  {
    title: "Legal basis",
    text: "We process your data based on legal grounds such as your consent, contractual necessity, and compliance with legal obligations.",
  },
  {
    title: "What is it all about?",
    text: "This policy explains how we handle your personal information and what rights you have regarding your data.",
  },
  {
    title: "Data we collect",
    text: "We collect your name, email, usage activity, device information, and other relevant data to improve your experience.",
  },
  {
    title: "How we use your data",
    text: "Your data is used to provide services, personalize content, analyze usage, and ensure security across our platform.",
  },
  {
    title: "Sharing your information",
    text: "We do not sell your data. We may share it with trusted partners for service delivery and legal compliance.",
  },
  {
    title: "Data retention",
    text: "We retain your data only as long as necessary for legal, business, or security purposes, then securely delete it.",
  },
  {
    title: "Security measures",
    text: "We use encryption, firewalls, and access controls to protect your information from unauthorized access and breaches.",
  },
  {
    title: "Your rights",
    text: "You have the right to access, correct, delete your data, or withdraw consent at any time without affecting legality.",
  },
  {
    title: "Cookies",
    text: "We use cookies to enhance user experience, analyze traffic, and offer personalized services based on your preferences.",
  },
  {
    title: "Third-party links",
    text: "Our site may include links to external sites. We are not responsible for their privacy practices or content.",
  },
  {
    title: "Policy updates",
    text: "We may update this policy occasionally. Changes will be posted here and take effect upon publication on this page.",
  },
];

const Privacy = () => {
  return (
    <div className="privacy-section">
      <h1 className="privacy-title">PRIVACY POLICY</h1>
      <p className="privacy-intro">
        Your privacy is important to us. This policy outlines how we handle your
        data and protect your information.
      </p>

      <div className="privacy-list">
        {policyItems.map((item, index) => (
          <div key={index} className="privacy-item">
            <h3>
              {index + 1}. {item.title}
            </h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
