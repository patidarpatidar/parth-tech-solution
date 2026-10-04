
import Link from 'next/link';
import {
ArrowLeft,
ArrowRight,
CalendarDays,
CheckCircle2,
Clock3,
Code2,
Lightbulb,
Share2,
ShieldCheck,
Sparkles,
} from 'lucide-react';

import './detail.css';
import BlogShare from '@/components/BlogShare';
const articles = {
'how-much-does-a-business-website-cost-in-india': {
title: 'How much does a business website cost in India?',
category: 'Business',
date: 'October 4, 2026',
readingTime: '7 min read',
intro:
'Website cost in India can range from a few thousand rupees to several lakhs. The right budget depends on what your business actually needs—not simply the number of pages.',
sections: [
{
heading: 'What determines website cost?',
text: 'The cost of a website depends on design complexity, number of pages, functionality, integrations, content requirements, SEO, hosting and ongoing maintenance.',
},
{
heading: '1. Basic business website',
text: 'A small business that needs Home, About, Services, Portfolio and Contact pages can start with a simple responsive website. This is suitable for businesses that mainly need an online presence and enquiry generation.',
bullets: [
'Responsive design',
'5–10 pages',
'Contact and WhatsApp integration',
'Basic SEO',
'Deployment and hosting setup',
],
},
{
heading: '2. Professional business website',
text: 'A professional website usually requires custom UI design, stronger SEO foundations, analytics, enquiry forms, galleries, dynamic content and better conversion-focused experiences.',
bullets: [
'Custom UI/UX',
'Advanced responsive design',
'SEO-friendly structure',
'Analytics',
'Lead/enquiry forms',
'Performance optimization',
],
},
{
heading: '3. Custom web application',
text: 'If your project includes login, dashboards, databases, roles, APIs, payments or complex workflows, it is no longer just a normal website. It becomes a web application or software platform.',
bullets: [
'Frontend application',
'Backend APIs',
'Database',
'Authentication',
'Role-based access',
'Admin dashboard',
'Cloud deployment',
],
},
{
heading: 'Do not choose only by price',
text: 'A low initial price can become expensive if the code is difficult to maintain, the website is slow, security is weak or future changes require rebuilding everything. Focus on value, scalability and the quality of implementation.',
},
{
heading: 'What should you ask a developer?',
text: 'Before starting, ask what is included in the quote. Clarify hosting, domain, source code, responsive design, SEO, maintenance, revisions, integrations and deployment responsibilities.',
bullets: [
'Is hosting included?',
'Who owns the source code?',
'Is SEO included?',
'How many revisions are included?',
'What happens after launch?',
'What is the maintenance cost?',
],
},
],
},

'website-vs-web-application': {
title: 'Website vs web application: what does your business need?',
category: 'Technology',
date: 'October 2, 2026',
readingTime: '6 min read',
intro:
'A website and a web application may look similar from the outside, but their purpose and technical requirements can be very different.',
sections: [
{
heading: 'What is a website?',
text: 'A website primarily presents information to visitors. Business websites commonly include company information, services, products, portfolio, blog and contact details.',
bullets: [
'Mostly public content',
'SEO focused',
'Simple navigation',
'Lead generation',
'Lower development complexity',
],
},
{
heading: 'What is a web application?',
text: 'A web application allows users to perform actions and interact with data. Examples include CRM systems, dashboards, booking systems, marketplaces and management platforms.',
bullets: [
'User login',
'Dashboards',
'Database operations',
'APIs',
'Roles and permissions',
'Business workflows',
],
},
{
heading: 'Which one should you choose?',
text: 'If your primary goal is to explain your business and generate enquiries, start with a website. If customers, employees or administrators need to log in and perform business operations, a web application is usually the better choice.',
},
],
},

'5-things-before-launching-website': {
title: '5 things to check before launching your website',
category: 'Business',
date: 'September 28, 2026',
readingTime: '5 min read',
intro:
'Launching a website is more than publishing code. A proper pre-launch check can prevent broken links, poor mobile experiences, SEO problems and security issues.',
sections: [
{
heading: '1. Test every important page',
text: 'Check navigation, buttons, forms, links, images and important user journeys on both desktop and mobile.',
},
{
heading: '2. Check mobile responsiveness',
text: 'Most users access websites through mobile devices. Verify menus, forms, typography, spacing and buttons on smaller screens.',
},
{
heading: '3. Check SEO basics',
text: 'Every important page should have a useful title, meta description, proper headings, readable URLs and relevant content.',
},
{
heading: '4. Check performance',
text: 'Compress images, remove unnecessary scripts and make sure the website loads quickly. Performance directly affects user experience.',
},
{
heading: '5. Check security and forms',
text: 'Make sure forms are protected, environment variables are not exposed and production credentials are handled securely.',
},
],
},

'how-to-choose-right-technology': {
title: 'How to choose the right technology for your project',
category: 'Development',
date: 'September 22, 2026',
readingTime: '8 min read',
intro:
'Technology should support your business requirements rather than become the requirement itself. Start with the problem, users and expected scale.',
sections: [
{
heading: 'Start with requirements',
text: 'Before selecting React, Next.js, Node.js, MongoDB or any other technology, define what users need to do and what the business needs to achieve.',
},
{
heading: 'Frontend',
text: 'For modern interactive web applications, React and Next.js can provide a strong foundation. The exact choice should depend on SEO, application complexity and team experience.',
},
{
heading: 'Backend',
text: 'A backend handles business logic, authentication, APIs and data processing. Node.js with Express or another suitable framework can work well for many JavaScript-based applications.',
},
{
heading: 'Database',
text: 'Choose the database according to the data model and workload. MongoDB can be useful for flexible document-oriented data, while relational databases are strong for structured relational data.',
},
],
},

'website-seo-basics-for-business': {
title: 'Website SEO basics every business owner should know',
category: 'Marketing',
date: 'September 18, 2026',
readingTime: '7 min read',
intro:
'SEO is not only about adding keywords. A strong SEO foundation combines useful content, technical quality, search intent and a good user experience.',
sections: [
{
heading: 'Create useful content',
text: 'Write content that answers the actual questions your customers search for. Avoid creating pages only to target keywords.',
},
{
heading: 'Optimize page structure',
text: 'Use descriptive titles, headings, URLs, internal links and relevant metadata. Make the content easy for both users and search engines to understand.',
},
{
heading: 'Improve performance',
text: 'Fast pages provide a better experience. Optimize images, reduce unnecessary JavaScript and use appropriate caching and hosting strategies.',
},
{
heading: 'Think locally',
text: 'Local businesses should make their location, services and contact information easy to understand. Consistent business information helps customers find and trust the business.',
},
],
},

'how-much-does-custom-software-cost': {
title: 'How much does custom business software cost?',
category: 'Business',
date: 'September 12, 2026',
readingTime: '9 min read',
intro:
'Custom software pricing depends on workflows, users, integrations, security, dashboards and long-term maintenance. There is no single price that fits every project.',
sections: [
{
heading: 'What makes custom software expensive?',
text: 'The biggest cost drivers are the number of workflows, user roles, integrations, data complexity, automation requirements and expected scale.',
bullets: [
'User authentication',
'Role-based permissions',
'Dashboards',
'Database design',
'Third-party APIs',
'Notifications',
'Reports',
'Cloud infrastructure',
],
},
{
heading: 'Start with an MVP',
text: 'Instead of building every feature at once, identify the most important workflow and launch an MVP. This reduces initial investment and allows real users to provide feedback.',
},
{
heading: 'Plan for maintenance',
text: 'Software is not finished forever after deployment. Budget for security updates, bug fixes, monitoring, backups and future improvements.',
},
],
},
};

const relatedArticles = [
{
slug: 'website-vs-web-application',
title: 'Website vs web application: what does your business need?',
},
{
slug: '5-things-before-launching-website',
title: '5 things to check before launching your website',
},
{
slug: 'how-much-does-custom-software-cost',
title: 'How much does custom business software cost?',
},
];

export async function generateStaticParams() {
return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
const { slug } = await params;
const article = articles[slug];

return {
title: article
? article.title
: 'Article',
description: article?.intro,
};
}

export default async function BlogDetail({ params }) {
const { slug } = await params;
const article = articles[slug];

if (!article) {
return ( <main className="detail-page"> <section className="section"> <div className="container detail-not-found"> <span className="eyebrow">404</span> <h1>Article not found</h1> <p>
The article you are looking for does not exist. </p> <Link href="/blog" className="btn btn-primary">
Back to Blog </Link> </div> </section> </main>
);
}

return ( <main className="detail-page">
{/* DETAIL HERO */} <section className="detail-hero"> <div className="container"> <Link href="/blog" className="back-blog"> <ArrowLeft size={16} />
Back to all articles </Link>

      <div className="detail-category">
        <Sparkles size={14} />
        {article.category}
      </div>

      <h1>{article.title}</h1>

      <p className="detail-intro">{article.intro}</p>

      <div className="detail-meta">
        <span>
          <CalendarDays size={16} />
          {article.date}
        </span>

        <span>
          <Clock3 size={16} />
          {article.readingTime}
        </span>

        <span>
          <Lightbulb size={16} />
          Practical guide
        </span>
      </div>
    </div>
  </section>

  {/* ARTICLE */}
  <section className="section detail-content-section">
    <div className="container detail-layout">
      <aside className="detail-sidebar">
        <div className="detail-sidebar-card">
          <span>On this page</span>

          <nav>
            {article.sections.map((section, index) => (
              <a
                href={`#section-${index}`}
                key={section.heading}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {section.heading}
              </a>
            ))}
          </nav>
        </div>

        <div className="detail-help-card">
          <Code2 size={22} />
          <h3>Need help implementing this?</h3>
          <p>
            We can turn your idea into a practical digital
            solution.
          </p>
          <Link href="/contact">
            Discuss project <ArrowRight size={15} />
          </Link>
        </div>
      </aside>

      <article className="detail-article">
        <div className="detail-cover">
          <div className="detail-cover-number">01</div>

          <div className="detail-cover-window">
            <div className="cover-header">
              <i />
              <i />
              <i />
            </div>

            <div className="cover-body">
              <div className="cover-main-line" />
              <div className="cover-line" />
              <div className="cover-line short" />

              <div className="cover-cards">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>

        <div className="article-body">
          {article.sections.map((section, index) => (
            <section
              className="article-section"
              id={`section-${index}`}
              key={section.heading}
            >
              <div className="article-section-number">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <h2>{section.heading}</h2>

                <p>{section.text}</p>

                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckCircle2 size={17} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <div className="article-tip">
            <Lightbulb size={22} />

            <div>
              <strong>Practical tip</strong>
              <p>
                Always define the business goal first. Then
                choose the technology, features and budget
                around that goal.
              </p>
            </div>
          </div>

          <div className="article-security">
            <ShieldCheck size={22} />

            <div>
              <strong>Build for the future</strong>
              <p>
                A good digital product should be maintainable,
                secure and flexible enough to evolve with the
                business.
              </p>
            </div>
          </div>

          <div className="article-share">
            <div>
              <strong>Found this useful?</strong>
              <span>Share the article with your network.</span>
            </div>

           <BlogShare title={article.title} />
          </div>
        </div>
      </article>
    </div>
  </section>

  {/* RELATED */}
  <section className="section related-section">
    <div className="container">
      <div className="related-heading">
        <div>
          <span className="eyebrow">Keep reading</span>
          <h2>Related articles</h2>
        </div>

        <Link href="/blog">
          View all <ArrowRight size={16} />
        </Link>
      </div>

      <div className="related-grid">
        {relatedArticles
          .filter((item) => item.slug !== slug)
          .slice(0, 3)
          .map((item, index) => (
            <Link
              href={`/blog/${item.slug}`}
              className="related-card"
              key={item.slug}
            >
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <div>
                Read article <ArrowRight size={15} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  </section>

 
</main>


);
}
