export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">Our Blog</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Read our latest articles, tips, and insights to stay ahead in your industry.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Tech Trends</h2>
          <p className="text-gray-300">Stay updated with the latest trends and technologies.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Design Tips</h2>
          <p className="text-gray-300">Improve your UI/UX design skills with practical tips.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-2">Marketing Advice</h2>
          <p className="text-gray-300">Learn strategies to grow your brand online.</p>
        </div>
      </div>
    </div>
  );
}
