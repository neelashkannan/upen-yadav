import { Metadata } from "next";
import SpeechesPageContent from "./SpeechesPageContent";

export const metadata: Metadata = {
  title: "Speeches & Media - Upen Yadav | BJP Candidate Shahpura",
  description:
    "Watch and read Upen Yadav's speeches, interviews, and public addresses on important issues.",
};

export default function SpeechesPage() {
  return <SpeechesPageContent />;
}
