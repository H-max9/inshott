import React from 'react';
import { SOCIAL_LINKS } from '@/app/socialConfig';

export const metadata = {
  title: "InShot Old Versions vs Latest 2026 Edition - Feature Archive",
  description: "Download InShot old versions (v1.95, v1.65) and compare features with the latest 2026 AI framework. Find stable legacy builds for older and mid-range devices.",
  keywords: [
    "inshot old versions",
    "inshot pro apk download old version",
    "inshot legacy version",
    "inshot older builds"
  ],
  alternates: {
    canonical: "https://inshotpromodapk.org/old-versions"
  }
};

export default function OldVersions() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <div className="logo-wrapper">
            <a href="/" className="logo-wrapper">
              <img 
                src="/logo.webp" 
                alt="InShot Premium Logo" 
                width="40" 
                height="40" 
                style={{ borderRadius: '10px' }} 
              />
              <span className="logo-text">InShot<span className="gradient-text">Pro</span></span>
            </a>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/pc" className="nav-link">PC Guide</a></li>
              <li><a href="/troubleshooting" className="nav-link">Troubleshooting</a></li>
              <li><a href="/old-versions" className="nav-link" style={{ color: 'var(--primary-coral)' }}>Old Versions</a></li>
            </ul>
          </nav>
          <div>
            <a href="/#download" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
              Download APK
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container grid-2">
            <div className="hero-content">
              <span className="badge">📁 Version Registry</span>
              <h1 className="hero-title">
                InShot Old Versions & <span className="gradient-text">Feature Archive</span>
              </h1>
              <p className="hero-desc">
                Intermediate video editors often seek older software builds to maintain stable performance on older or mid-range devices. Explore our historical archive and choose the best build for your workflow.
              </p>
              <div className="hero-buttons">
                <a href="#feature-index" className="btn btn-primary">
                  <span>Browse Versions</span>
                  <span className="btn-icon">📋</span>
                </a>
                <a href="/" className="btn btn-secondary">
                  Back to Homepage
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img 
                src="/archive.png" 
                alt="InShot Old Versions Archive Grid" 
                width="450" 
                height="450" 
                className="hero-image"
                style={{ width: '100%', height: 'auto', maxWidth: '450px' }}
              />
            </div>
          </div>
        </section>

        {/* Comparison Matrix Section */}
        <section id="feature-index" className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">Version Matrix</span>
              <h2 className="section-title">Chronological Feature Tracking Index</h2>
              <p className="section-desc">
                Review the target system requirements and capabilities for stable legacy builds compared to the current release.
              </p>
            </div>

            <div className="table-wrapper" style={{ maxWidth: '900px', margin: '40px auto 0' }}>
              <table>
                <thead>
                  <tr>
                    <th>Release Version</th>
                    <th>Target System Baseline</th>
                    <th>Standout Key Capabilities</th>
                    <th>Download Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="pro-row">
                    <td><strong>Current v2.219 (Latest)</strong></td>
                    <td>Optimized for Android 8.0+</td>
                    <td>Auto captions, AI speech synthesis, and smart tracking motion vectors</td>
                    <td>~120 MB</td>
                  </tr>
                  <tr>
                    <td><strong>Stable v1.95</strong></td>
                    <td>Great for mid-range hardware</td>
                    <td>Multi-track layer layouts, advanced chroma key, and speed curves</td>
                    <td>~85 MB</td>
                  </tr>
                  <tr>
                    <td><strong>Legacy v1.65 (Old)</strong></td>
                    <td>Ultra-light on basic processors</td>
                    <td>Classic trimming tool, basic filters, and simple slide transitions</td>
                    <td>~55 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Old Versions Section */}
        <section className="section-padding">
          <div className="container">
            <div className="grid-2">
              <div className="card">
                <h2 className="gradient-text" style={{ fontSize: '1.6rem', marginBottom: '20px' }}>Why Search for an Old Version?</h2>
                <p style={{ color: '#B0A8B0', marginBottom: '20px' }}>
                  While updates bring cutting-edge features, many creators prefer historic builds for the following specific operational reasons:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>🖥️ Hardware Compatibility:</strong> Modern AI tools place heavy demand on CPU/GPU hardware. Older versions run smoothly without overheating or thermal throttling.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>⚡ Familiar Workflow:</strong> Reorganized button layouts or menus in newer versions can slow down experienced editors. Legacy versions preserve a fast, familiar setup.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>💾 Smaller Storage footprint:</strong> Older builds occupy under 60MB of local memory, leaving more space for project video caches.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2 className="gradient-text" style={{ fontSize: '1.6rem', marginBottom: '20px' }}>Upgrade to the 2026 AI Framework?</h2>
                <p style={{ color: '#B0A8B0', marginBottom: '20px' }}>
                  If your mobile hardware is capable of running the latest version, upgrading unlocks incredible time-saving capabilities:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>🗣️ Auto Captions Integration:</strong> Automatically convert dialog tracks into perfectly styled text subtitle layers.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>🎯 Smart Motion Vectors:</strong> Pin stickers or text cards directly to moving objects in your clip automatically.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>🎨 Auto Color Corrector:</strong> Align color grading parameters across separate files with a single tap to keep lighting uniform.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Download Archive */}
        <section className="section-padding text-center" style={{ background: '#0c080b' }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <span className="badge">📁 Archive Access</span>
            <h2 className="section-title">Get Historical Builds</h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Choose and secure the perfect build variant for your specific editing device.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Latest */}
              <div className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ margin: 0 }}>v2.219 (Latest 2026 AI Build)</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>File Size: ~120MB | Recommends Android 8.0+</span>
                </div>
                <a href="https://f005.backblazeb2.com/file/inshotmod/Inshotmod.apk" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                  Get Latest APK
                </a>
              </div>
              {/* Legacy v1.95 */}
              <div className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ margin: 0 }}>v1.95 (Mid-Range Stable Build)</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>File Size: ~85MB | Recommends Android 6.0+</span>
                </div>
                <a href="https://f005.backblazeb2.com/file/inshotmod/Inshotmod.apk" className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                  Get Stable APK
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="footer-logo">InShot<span className="gradient-text">Pro</span></div>
              <p style={{ maxWidth: '400px' }}>
                The comprehensive tutorial resource and unlocked setup guide for mobile and desktop video editing. Download the 2026 Mod APK and edit without limits.
              </p>
              <div className="footer-socials">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter" aria-label="Twitter">
                  <svg viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href={SOCIAL_LINKS.pinterest} target="_blank" rel="noopener noreferrer" className="social-icon pinterest" aria-label="Pinterest">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.339 1.382a.282.282 0 0 1-.397.166C5.074 18.067 4 15.969 4 13.413c0-4.3 3.125-8.249 9.01-8.249 4.73 0 8.406 3.371 8.406 7.874 0 4.7-2.962 8.479-7.074 8.479-1.382 0-2.682-.718-3.127-1.572 0 0-.683 2.602-.85 3.239-.307 1.173-1.137 2.641-1.694 3.535C9.841 23.86 10.905 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <ul className="footer-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/pc">PC Guide</a></li>
                <li><a href="/troubleshooting">Troubleshooting</a></li>
                <li><a href="/old-versions">Old Versions</a></li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                &copy; {new Date().getFullYear()} InShot Pro Mod APK. All rights reserved.
              </p>
            </div>
          </div>
          <div className="disclaimer">
            <strong>Disclaimer:</strong> This website is an educational fan portal, guide, and compilation resource. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with InShot Inc., or any of its subsidiaries or its affiliates. The official InShot brand name, trademark, and logo are copyright of their respective owners. We strongly advise users to download the original app from the official Google Play Store and subscribe to the official premium subscription package to support the development team.
          </div>
        </div>
      </footer>
    </>
  );
}
