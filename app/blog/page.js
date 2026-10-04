'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
ArrowRight,
ArrowUpRight,
BookOpen,
CalendarDays,
ChevronDown,
Clock3,
Search,
Sparkles,
TrendingUp,
UserRound,
X,
} from 'lucide-react';

import './blog.css';

const posts = [
{
slug: 'how-much-does-a-business-website-cost-in-india',
title: 'How much does a business website cost in India?',
excerpt:
'Understand website pricing, development costs, hosting, maintenance and the factors that actually affect your final budget.',
category: 'Business',
tag: 'Guide',
date: 'October 4, 2026',
readingTime: '7 min read',
featured: true,
number: '01',
author: 'Parth Tech Solution',
},
{
slug: 'website-vs-web-application',
title: 'Website vs web application: what does your business need?',
excerpt:
'A simple comparison to help you understand when a normal website is enough and when your business needs a complete web application.',
category: 'Technology',
tag: 'Technology',
date: 'October 2, 2026',
readingTime: '6 min read',
featured: false,
number: '02',
author: 'Parth Tech Solution',
},
{
slug: '5-things-before-launching-website',
title: '5 things to check before launching your website',
excerpt:
'Use this practical pre-launch checklist to avoid common SEO, performance, security, mobile and usability problems.',
category: 'Business',
tag: 'Checklist',
date: 'September 28, 2026',
readingTime: '5 min read',
featured: false,
number: '03',
author: 'Parth Tech Solution',
},
{
slug: 'how-to-choose-right-technology',
title: 'How to choose the right technology for your project',
excerpt:
'Learn how to select frontend, backend, database and hosting technologies without overcomplicating your project.',
category: 'Development',
tag: 'Development',
date: 'September 22, 2026',
readingTime: '8 min read',
featured: false,
number: '04',
author: 'Parth Tech Solution',
},
{
slug: 'website-seo-basics-for-business',
title: 'Website SEO basics every business owner should know',
excerpt:
'A beginner-friendly guide to technical SEO, content, page speed, keywords and local search visibility.',
category: 'Marketing',
tag: 'SEO',
date: 'September 18, 2026',
readingTime: '7 min read',
featured: false,
number: '05',
author: 'Parth Tech Solution',
},
{
slug: 'how-much-does-custom-software-cost',
title: 'How much does custom business software cost?',
excerpt:
'Understand the major cost components behind dashboards, CRM, ERP, APIs, authentication and custom software platforms.',
category: 'Business',
tag: 'Guide',
date: 'September 12, 2026',
readingTime: '9 min read',
featured: false,
number: '06',
author: 'Parth Tech Solution',
},
];

const categories = [
'All',
'Business',
'Technology',
'Development',
'Marketing',
];

const faqs = [
{
q: 'Who is this blog for?',
a: 'Our articles are written mainly for business owners, startups, students and teams planning websites, web applications, e-commerce platforms or custom software.',
},
{
q: 'Are the articles beginner friendly?',
a: 'Yes. We focus on practical explanations instead of unnecessary technical terminology, so non-technical business owners can understand the important decisions.',
},
{
q: 'Can I request a topic?',
a: 'Yes. If you have a question about websites, software, SEO, APIs or digital business, you can send us your requirement through the contact page.',
},
{
q: 'Can Parth Tech Solution help implement the ideas?',
a: 'Yes. If an article helps you identify a requirement, you can contact us to discuss the project, scope, technology and implementation approach.',
},
];

export default function Blog() {
const [category, setCategory] = useState('All');
const [search, setSearch] = useState('');
const [openFaq, setOpenFaq] = useState(0);

const filteredPosts = useMemo(() => {
const value = search.trim().toLowerCase();


return posts.filter((post) => {
  const categoryMatch =
    category === 'All' || post.category === category;

  const searchMatch =
    !value ||
    post.title.toLowerCase().includes(value) ||
    post.excerpt.toLowerCase().includes(value) ||
    post.category.toLowerCase().includes(value);

  return categoryMatch && searchMatch;
});

}, [category, search]);

const featuredPost = posts.find((post) => post.featured);

return ( <main className="blog-page">
{/* HERO */} <section className="blog-hero page-hero"> <div className="blog-hero-glow blog-glow-one" /> <div className="blog-hero-glow blog-glow-two" />


    <div className="container blog-hero-grid">
      <div className="blog-hero-content">
        <span className="eyebrow">
          <Sparkles size={15} />
          Insights & Resources
        </span>

        <h1 className="title">
          Practical knowledge for your{' '}
          <span className="blog-gradient-text">
            digital journey.
          </span>
        </h1>

        <p className="subtitle">
          Simple, practical and actionable guides about websites,
          web applications, software development, SEO and digital
          growth.
        </p>

        <div className="blog-hero-actions">
          <a href="#articles" className="btn btn-gradient">
            Explore Articles
            <ArrowRight size={17} />
          </a>

          <Link href="/contact" className="btn btn-light">
            Discuss Your Project
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="blog-trust-row">
          <div>
            <strong>25+</strong>
            <span>Topics planned</span>
          </div>

          <div>
            <strong>Practical</strong>
            <span>Real-world guidance</span>
          </div>

          <div>
            <strong>Free</strong>
            <span>Useful resources</span>
          </div>
        </div>
      </div>

      <div className="blog-hero-visual">
        <div className="blog-orbit orbit-one" />
        <div className="blog-orbit orbit-two" />

        <div className="blog-book-card">
          <div className="blog-book-top">
            <span className="blog-mini-pill">LATEST</span>
            <BookOpen size={20} />
          </div>

          <div className="blog-book-number">01</div>

          <h3>
            Build better digital products with practical
            knowledge.
          </h3>

          <div className="blog-book-lines">
            <span />
            <span />
            <span />
          </div>

          <div className="blog-book-footer">
            <span>Parth Tech Solution</span>
            <ArrowUpRight size={17} />
          </div>
        </div>

        <div className="blog-floating-card blog-floating-top">
          <TrendingUp size={18} />
          <div>
            <strong>Business Growth</strong>
            <span>Digital strategy</span>
          </div>
        </div>

        <div className="blog-floating-card blog-floating-bottom">
          <Clock3 size={18} />
          <div>
            <strong>5–10 min</strong>
            <span>Average reading</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FEATURED */}
  {featuredPost && (
    <section className="section featured-section">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">Featured article</span>
            <h2 className="section-title">
              Start with our most useful guide.
            </h2>
          </div>

          <span className="featured-label">
            Editor&apos;s Pick
          </span>
        </div>

        <Link
          href={`/blog/${featuredPost.slug}`}
          className="featured-blog-card"
        >
          <div className="featured-blog-visual">
            <span className="featured-number">
              {featuredPost.number}
            </span>

            <div className="featured-visual-window">
              <div className="featured-window-header">
                <i />
                <i />
                <i />
              </div>

              <div className="featured-window-content">
                <div className="featured-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="featured-content-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="featured-blog-content">
            <div className="blog-meta">
              <span>{featuredPost.tag}</span>
              <span>•</span>
              <span>{featuredPost.readingTime}</span>
            </div>

            <h3>{featuredPost.title}</h3>

            <p>{featuredPost.excerpt}</p>

            <div className="featured-blog-bottom">
              <div className="author-mini">
                <span className="author-avatar">
                  P
                </span>

                <span>
                  <strong>{featuredPost.author}</strong>
                  <small>{featuredPost.date}</small>
                </span>
              </div>

              <span className="read-arrow">
                Read article <ArrowRight size={17} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )}

  {/* ARTICLES */}
  <section className="section articles-section" id="articles">
    <div className="container">
      <div className="section-heading-row articles-heading">
        <div>
          <span className="eyebrow">Latest articles</span>
          <h2 className="section-title">
            Explore practical insights.
          </h2>
          <p className="section-description">
            Browse our latest guides and find answers to common
            digital business questions.
          </p>
        </div>
      </div>

      {/* SEARCH + FILTER */}
      <div className="blog-toolbar">
        <div className="blog-search">
          <Search size={19} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              <X size={17} />
            </button>
          )}
        </div>

        <div className="blog-filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item
                  ? 'blog-filter active'
                  : 'blog-filter'
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-result-info">
        <span>
          Showing <strong>{filteredPosts.length}</strong>{' '}
          articles
        </span>

        {(search || category !== 'All') && (
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setCategory('All');
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {/* GRID */}
      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="blog-card-image"
              >
                <span className="blog-card-number">
                  {post.number}
                </span>

                <div className="blog-card-pattern">
                  <div className="pattern-window">
                    <div className="pattern-dots">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="pattern-body">
                      <span />
                      <span />
                      <span />
                      <div className="pattern-boxes">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>

                <span className="blog-card-category">
                  {post.category}
                </span>
              </Link>

              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>
                    <CalendarDays size={14} />
                    {post.date}
                  </span>

                  <span>
                    <Clock3 size={14} />
                    {post.readingTime}
                  </span>
                </div>

                <h3>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p>{post.excerpt}</p>

                <div className="blog-card-footer">
                  <span className="blog-author">
                    <UserRound size={15} />
                    Parth Tech Solution
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-read-link"
                  >
                    Read <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="blog-empty">
          <Search size={32} />
          <h3>No articles found</h3>
          <p>
            Try another search term or select a different
            category.
          </p>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setSearch('');
              setCategory('All');
            }}
          >
            View all articles
          </button>
        </div>
      )}
    </div>
  </section>

  {/* TOPICS */}
  <section className="section topic-section">
    <div className="container">
      <div className="topic-panel">
        <div>
          <span className="eyebrow">What we write about</span>
          <h2>
            Learn. Plan. Build. <span>Grow.</span>
          </h2>
          <p>
            We focus on topics that help businesses make better
            technology decisions.
          </p>
        </div>

        <div className="topic-list">
          <span>Web Development</span>
          <span>Business Websites</span>
          <span>SEO</span>
          <span>E-Commerce</span>
          <span>Custom Software</span>
          <span>APIs</span>
          <span>Cloud</span>
          <span>Digital Growth</span>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section className="section blog-faq-section">
    <div className="container blog-faq-grid">
      <div>
        <span className="eyebrow">FAQ</span>
        <h2 className="section-title">
          Questions about our insights?
        </h2>

        <p className="section-description">
          Here are some common questions about the Parth Tech
          Solution blog.
        </p>

        <Link href="/contact" className="btn btn-outline">
          Ask a question
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="blog-faq-list">
        {faqs.map((faq, index) => (
          <div
            className={
              openFaq === index
                ? 'blog-faq active'
                : 'blog-faq'
            }
            key={faq.q}
          >
            <button
              type="button"
              onClick={() =>
                setOpenFaq(
                  openFaq === index ? -1 : index
                )
              }
              aria-expanded={openFaq === index}
            >
              <span>{faq.q}</span>
              <ChevronDown size={19} />
            </button>

            {openFaq === index && (
              <div className="blog-faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="section blog-cta-section">
    <div className="container">
      <div className="blog-cta">
        <div className="blog-cta-glow" />

        <div className="blog-cta-content">
          <span className="eyebrow">Have a project?</span>

          <h2>
            Turn what you learned into something{' '}
            <span>real.</span>
          </h2>

          <p>
            Have an idea after reading our articles? Let&apos;s
            discuss your requirements and find the right
            solution.
          </p>

          <div className="blog-cta-actions">
            <Link
              href="/contact"
              className="btn btn-gradient"
            >
              Start a Project
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/portfolio"
              className="btn btn-light"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

);
}
