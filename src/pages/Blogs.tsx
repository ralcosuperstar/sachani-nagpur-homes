
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Set a Realistic Budget: A Smart Start for First-Time Buyers in Nagpur",
      excerpt: "Buying your first home is exciting, but it's easy to get carried away. Setting a realistic budget is the first step in making your dream home a reality.",
      content: "Your budget should include the cost of the home, registration charges, stamp duty, loan EMIs, interiors, and maintenance. First-time buyers often underestimate hidden expenses, which can strain finances later. Start by assessing your monthly income, savings, and current liabilities. Experts recommend that EMIs shouldn't exceed 40% of your monthly income.",
      author: "Sachani Team",
      date: "2024-03-15",
      category: "Home Buying Tips",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Explore Home Loan Options: Financing Your Dream Home Wisely",
      excerpt: "Navigating home loan options is crucial for first-time buyers. Compare interest rates, tenure, processing fees, and pre-payment charges wisely.",
      content: "A good credit score (750 or above) increases your chances of getting a loan approved with better interest rates. First-time homebuyers in India can also benefit from government-backed schemes like the Pradhan Mantri Awas Yojana (PMAY), which provides interest subsidies for eligible individuals.",
      author: "Sachani Team",
      date: "2024-03-10",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Location Matters: Why the Right Neighborhood in Nagpur Makes All the Difference",
      excerpt: "Where you live impacts your lifestyle, safety, and property value. For first-time buyers in Nagpur, location is key to long-term satisfaction.",
      content: "Proximity to schools, hospitals, transport hubs, markets, and your workplace should influence your decision. Neighborhoods like Jaripatka & Om Nagar are popular due to their connectivity, peaceful surroundings, and amenities. Consider future growth potential — areas with upcoming metro connectivity, road expansions, or new developments often see better property appreciation.",
      author: "Sachani Team",
      date: "2024-03-05",
      category: "Location Guide",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Verify Legal Documents: Protect Your Dream Home with Due Diligence",
      excerpt: "Before signing any agreement, verifying legal documents is a non-negotiable step in buying a home. Protect your investment with proper due diligence.",
      content: "Start by checking the title deed – it should clearly state the seller's ownership and right to sell the property. Ensure the land is non-agricultural (NA) and approved for residential construction. For under-construction projects, verify the building plan approval from the municipal authority, commencement certificate, and RERA registration number.",
      author: "Sachani Team",
      date: "2024-02-28",
      category: "Legal Advice",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Choose the Right Builder: The Foundation of Your Home Buying Journey",
      excerpt: "The builder you choose shapes your entire home-buying experience. Look beyond the price tag and evaluate reputation, quality, and delivery record.",
      content: "Research the builder's history. Have they completed projects on time? Do they have RERA-registered properties? Read online reviews, visit previous sites, and talk to past customers to understand the quality and service. Transparency is a key indicator. A good builder offers clear communication, proper documentation, and honest timelines.",
      author: "Sachani Team",
      date: "2024-02-20",
      category: "Builder Selection",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Plan for the Future: Buy a Home That Grows with You",
      excerpt: "A smart homebuyer doesn't just buy for today—they plan for the future. Think beyond current needs and consider long-term value.",
      content: "Think beyond current needs: Will your family grow? Will remote work continue? Is the area poised for development? Look for homes with extra space, future-proof layouts, and access to evolving infrastructure. Buying a 2 or 3 BHK in a well-connected area of Nagpur like Om Nagar or Jaripatka can provide space to grow and strong resale or rental value later.",
      author: "Sachani Team",
      date: "2024-02-15",
      category: "Investment Tips",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Home Buying Tips", "Finance", "Location Guide", "Legal Advice", "Builder Selection", "Investment Tips"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Real Estate Insights</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Expert advice and insights for home buyers in Nagpur. Learn from our 25+ years of experience 
              in real estate development and help make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 text-sm sm:text-base whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#684a47] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      {filteredPosts.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 sm:h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#684a47] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-[#684a47]/10 text-[#684a47] px-3 py-1 rounded-full text-sm font-semibold">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{filteredPosts[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <User size={16} />
                        <span className="text-sm">{filteredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span className="text-sm">{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${filteredPosts[0].id}`}
                      className="bg-[#684a47] text-white px-6 py-3 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg sm:text-xl text-gray-600">Stay updated with the latest trends and tips in real estate</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[#684a47] text-xs font-semibold">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#684a47] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <User size={14} />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-[#684a47] hover:text-[#5a3e3b] font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 sm:p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#684a47] rounded-full mb-6">
              <BookOpen className="text-white" size={24} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Real Estate Insights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Get expert tips, market updates, and exclusive insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#684a47] focus:border-transparent"
              />
              <button className="bg-[#684a47] text-white px-6 py-3 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
