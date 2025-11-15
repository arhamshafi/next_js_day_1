export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-10">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore the wide range of services we provide to help you grow and succeed.
        </p>
      </div>

      {/* Services List */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
          <p className="text-gray-300">
            Build responsive and modern websites with the latest technologies.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">UI/UX Design</h2>
          <p className="text-gray-300">
            Create intuitive and engaging interfaces for the best user experience.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Digital Marketing</h2>
          <p className="text-gray-300">
            Increase your online presence and reach with our marketing strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
