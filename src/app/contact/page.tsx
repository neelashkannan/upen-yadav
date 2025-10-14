import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Upen Yadav - BJP Candidate | Shahpura Assembly",
  description:
    "Get in touch with Upen Yadav, BJP Candidate for Shahpura Assembly Constituency. Send your message, questions, or suggestions.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
