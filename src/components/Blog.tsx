import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      title: 'How Digital Stamps Are Revolutionizing Document Management',
      excerpt: 'Learn how businesses are saving time and reducing costs by switching to digital stamp solutions.',
      date: 'November 28, 2025',
      image: 'https://images.unsplash.com/photo-1758519288480-1489c17b1519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkb2N1bWVudCUyMHNpZ25pbmd8ZW58MXx8fHwxNzY0NzIxNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Industry Insights',
    },
    {
      title: 'Legal Compliance: What You Need to Know About E-Stamps',
      excerpt: 'A comprehensive guide to electronic stamp regulations and compliance requirements across different regions.',
      date: 'November 25, 2025',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDY5MTY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Legal',
    },
    {
      title: '5 Ways to Streamline Your Approval Process with Digital Stamps',
      excerpt: 'Discover practical tips and best practices for implementing digital stamps in your organization.',
      date: 'November 22, 2025',
      image: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ2NTM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Productivity',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600">
              Tips, insights, and news about digital stamp solutions
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
            View All Posts
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm text-orange-600">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-orange-600 hover:text-orange-700 flex items-center gap-2">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors mx-auto">
            View All Posts
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}