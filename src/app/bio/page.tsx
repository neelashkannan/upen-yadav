import { Metadata } from "next";
import BioPageContent from "./BioPageContent";

export const metadata: Metadata = {
  title: "About Upen Yadav - BJP Candidate | Shahpura Assembly",
  description:
    "Learn about Upen Yadav's background, political journey, and commitment to public service in Shahpura Assembly Constituency.",
};

export default function BioPage() {
  return <BioPageContent />;
}
