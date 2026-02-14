export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-black uppercase mb-8">Let's build South Sudan.</h2>
          <p className="text-gray-600 mb-12 max-w-md text-lg">
            Ready to start your sustainable construction journey? Visit our headquarters or send us a message.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="h-12 w-12 bg-brand-black flex items-center justify-center text-white shrink-0">📍</div>
              <div>
                <h4 className="font-bold uppercase">Headquarters</h4>
                <p className="text-gray-500">Cyierdit Building Juba town, South Sudan</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="h-12 w-12 bg-brand-black flex items-center justify-center text-white shrink-0">📞</div>
              <div>
                <h4 className="font-bold uppercase">Phone</h4>
                <p className="text-gray-500">+211 923 228 220</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-brand-offWhite p-10 space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-transparent border-b border-black/20 focus:border-brand-red outline-none transition-all" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-transparent border-b border-black/20 focus:border-brand-red outline-none transition-all" />
          <select className="w-full p-4 bg-transparent border-b border-black/20 focus:border-brand-red outline-none transition-all">
            <option>Select Service</option>
            <option>Rammed Earth</option>
            <option>Architectural Design</option>
          </select>
          <textarea placeholder="Message" rows={4} className="w-full p-4 bg-transparent border-b border-black/20 focus:border-brand-red outline-none transition-all" />
          <button className="w-full bg-brand-black text-white py-5 font-bold uppercase hover:bg-brand-red transition-all">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}