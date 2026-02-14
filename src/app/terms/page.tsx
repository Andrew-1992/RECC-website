import Section from "@/components/layout/Section";

export default function TermsOfService() {
  return (
    <main className="pt-20 bg-brand-offWhite">
      <Section className="bg-white shadow-xl my-10 max-w-4xl mx-auto border-t-8 border-brand-black">
        <h1 className="text-4xl font-black uppercase mb-8">Terms of Service</h1>
        <p className="text-gray-500 mb-8 italic">Effective Date: February 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-gray-700">
          <h2 className="text-xl font-bold uppercase text-brand-black">1. Scope of Work</h2>
          <p>
            All construction services provided by RECL are subject to a formal signed contract. The information on this website is for inquiry purposes and does not constitute a binding construction agreement.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-black">2. Site Access in South Sudan</h2>
          <p>
            Clients are responsible for ensuring legal access to project sites. RECL reserves the right to pause operations if site safety or security conditions in any region pose a risk to our staff or equipment.
          </p>

          

          <h2 className="text-xl font-bold uppercase text-brand-black">3. Intellectual Property</h2>
          <p>
            The custom Rammed Earth mix designs and architectural blueprints created by RECL remain the intellectual property of Rammed Earth Construction Co. Ltd unless otherwise specified in the project contract.
          </p>

          <h2 className="text-xl font-bold uppercase text-brand-black">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the Republic of South Sudan.
          </p>
        </div>
      </Section>
    </main>
  );
}