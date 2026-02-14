import Section from "@/components/layout/Section";

export default function PrivacyPolicy() {
  return (
    <main className="pt-20 bg-brand-offWhite">
      <Section className="bg-white shadow-xl my-10 max-w-4xl mx-auto border-t-8 border-brand-red">
        <h1 className="text-4xl font-black uppercase mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-8 italic">Last Updated: February 2026</p>
        
        <div className="prose prose-slate max-w-none space-y-6 text-gray-700">
          <h2 className="text-xl font-bold uppercase text-brand-black">1. Information We Collect</h2>
          <p>
            Rammed Earth Construction Co. Ltd (RECL) collects information you provide directly to us via our contact forms, including your name, email address, phone number, and project details in Juba and surrounding regions.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-black">2. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide architectural and construction consultations.</li>
            <li>To send project updates and site visit schedules.</li>
            <li>To comply with South Sudanese construction regulations and tax requirements.</li>
          </ul>

          <h2 className="text-xl font-bold uppercase text-brand-black">3. Data Security</h2>
          <p>
            We implement industry-standard encryption to protect your project blueprints and personal data. Your information is stored securely and accessed only by authorized engineering and administrative personnel.
          </p>
        </div>
      </Section>
    </main>
  );
}