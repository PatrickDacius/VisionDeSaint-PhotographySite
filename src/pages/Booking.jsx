import React from "react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      {/* PAGE HEADER */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black">Book a Photoshoot</h1>
        <p className="text-gray-600 mt-2">
          Select a date and time that works best for you.
        </p>
      </header>

      {/* CALENDLY INLINE EMBED */}
      <div className="w-full max-w-3xl border border-black rounded-2xl shadow-lg p-4">
        <iframe
          src="https://calendly.com/visiondesaintbookings/photoshoot-booking"
          width="100%"
          height="700"
          frameBorder="0"
          className="rounded-xl"
          title="Book a Photoshoot"
        ></iframe>
      </div>
    </div>
  );
};

export default Booking;
