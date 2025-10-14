import { Metadata } from "next";
import PoliticoPageContent from "./PoliticoPageContent";

export const metadata: Metadata = {
  title: "Politico - Upen Yadav | BJP Candidate Shahpura",
  description:
    "Learn about Upen Yadav's political journey and dedication to serving Shahpura Assembly Constituency.",
};

export default function PoliticoPage() {
  return <PoliticoPageContent />;
}
