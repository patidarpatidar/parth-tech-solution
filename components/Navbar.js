'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
Menu,
X,
ArrowUpRight,
Sparkles,
ChevronRight,
} from 'lucide-react';

import './Navbar.css';

const links = [
['Home', '/'],
['About', '/about'],
['Services', '/services'],
['Portfolio', '/portfolio'],
['Pricing', '/pricing'],
['Blog', '/blog'],
['Contact', '/contact'],
];

export default function Navbar() {
const pathname = usePathname();

const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 20);
};

handleScroll();

window.addEventListener('scroll', handleScroll);

return () => {
  window.removeEventListener('scroll', handleScroll);
};


}, []);

useEffect(() => {
setOpen(false);
}, [pathname]);

useEffect(() => {
const handleKeyDown = (event) => {
if (event.key === 'Escape') {
setOpen(false);
}
};


window.addEventListener('keydown', handleKeyDown);

return () => {
  window.removeEventListener('keydown', handleKeyDown);
};


}, []);

const isActive = (href) => {
if (href === '/') {
return pathname === '/';
}

return pathname === href || pathname.startsWith(`${href}/`);


};

return (
<>
<header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}> <div className="container navbar-inner">

```
      {/* Logo */}
      <Link href="/" className="navbar-logo" aria-label="Parth Tech Solution home">
        <span className="logo-mark">
          <Sparkles size={17} strokeWidth={2.5} />
        </span>

        <span className="logo-text">
          Parth <strong>Tech</strong>
          <small>Solution</small>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="navbar-desktop" aria-label="Main navigation">
        <div className="navbar-links">
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className={`navbar-link ${isActive(href) ? 'active' : ''}`}
              aria-current={isActive(href) ? 'page' : undefined}
            >
              <span>{name}</span>

              {isActive(href) && (
                <span className="active-dot" />
              )}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="navbar-cta">
          <span>Start a Project</span>
          <ArrowUpRight size={16} />
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className={`navbar-menu-button ${open ? 'open' : ''}`}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    <div
      id="mobile-navigation"
      className={`navbar-mobile ${open ? 'navbar-mobile-open' : ''}`}
    >
      <div className="navbar-mobile-inner">

        <div className="mobile-menu-label">
          <span>Navigation</span>
          <span className="mobile-menu-line" />
        </div>

        <nav aria-label="Mobile navigation">
          {links.map(([name, href], index) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                className={`mobile-nav-link ${active ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="mobile-nav-name">
                  {name}
                </span>

                <ChevronRight
                  size={18}
                  className="mobile-nav-arrow"
                />
              </Link>
            );
          })}
        </nav>

        <div className="mobile-menu-cta">
          <div>
            <span>Have a project in mind?</span>
            <strong>Let's build it together.</strong>
          </div>

          <Link
            href="/contact"
            className="mobile-cta-button"
            onClick={() => setOpen(false)}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </div>
  </header>

  {/* Mobile backdrop */}
  {open && (
    <button
      className="navbar-backdrop"
      aria-label="Close menu"
      onClick={() => setOpen(false)}
    />
  )}
</>

);
}
