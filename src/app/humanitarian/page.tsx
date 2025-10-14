import { Metadata } from "next";
import HumanitarianPageContent from "./HumanitarianPageContent";

export const metadata: Metadata = {
  title: "Humanitarian Work - Upen Yadav | BJP Candidate Shahpura",
  description:
    "Discover Upen Yadav's humanitarian initiatives and community development work in Shahpura Assembly Constituency.",
};

export default function HumanitarianPage() {
  return <HumanitarianPageContent />;
}
