import { Metadata } from "next";
import VisionPageContent from "./VisionPageContent";

export const metadata: Metadata = {
  title: "Vision - Upen Yadav | BJP Candidate Shahpura",
  description:
    "Discover Upen Yadav's vision for progressive governance and community development in Shahpura Assembly Constituency.",
};

export default function VisionPage() {
  return <VisionPageContent />;
}
