export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover amazing content, services, and blogs designed to help you grow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Explore Services</h2>
          <p className="text-gray-300">Check out our professional services to boost your business.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Read Blogs</h2>
          <p className="text-gray-300">Stay updated with our latest articles and insights.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Join Community</h2>
          <p className="text-gray-300">Connect with like-minded people and grow together.</p>
        </div>
      </div>
    </div>
  );
}
