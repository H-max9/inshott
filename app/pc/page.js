import React from 'react';
import { SOCIAL_LINKS } from '@/app/socialConfig';

export const metadata = {
  title: "InShot Video Editor for PC (Windows 10/11 & Mac) - Download & Setup",
  description: "Learn how to download and install InShot for PC (Windows & Mac). Step-by-step sideloading guides using BlueStacks, LDPlayer, and NoxPlayer for optimal 4K desktop editing.",
  keywords: [
    "inshot video editor for pc",
    "inshot for pc windows 10/11",
    "inshot pc download",
    "inshot for mac"
  ],
  alternates: {
    canonical: "https://inshotpromodapk.org/pc"
  }
};

export default function PcGuide() {
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
              <li><a href="/pc" className="nav-link" style={{ color: 'var(--primary-coral)' }}>PC Guide</a></li>
              <li><a href="/troubleshooting" className="nav-link">Troubleshooting</a></li>
              <li><a href="/old-versions" className="nav-link">Old Versions</a></li>
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
              <span className="badge">🖥️ Desktop Sideloading</span>
              <h1 className="hero-title">
                InShot Video Editor for <span className="gradient-text">PC (Windows & Mac)</span>
              </h1>
              <p className="hero-desc">
                Unleash the precision of a mouse, keyboard shortcuts, and a spacious display. Sideload InShot Mod APK on your desktop computer or laptop to experience professional-grade video timeline control without device limits.
              </p>
              <div className="hero-buttons">
                <a href="#install-methods" className="btn btn-primary">
                  <span>Start Installation</span>
                  <span className="btn-icon">👇</span>
                </a>
                <a href="/" className="btn btn-secondary">
                  Back to Homepage
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img 
                src="/pc-guide.png" 
                alt="InShot Mod APK Running on PC Emulator Mockup" 
                width="450" 
                height="450" 
                className="hero-image"
                style={{ width: '100%', height: 'auto', maxWidth: '450px' }}
              />
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="card" style={{ padding: '40px' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }} className="gradient-text">Why Edit InShot Projects on PC?</h2>
              <p style={{ color: '#B0A8B0', marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.7' }}>
                The precision of a mouse, access to keyboard shortcuts, and a spacious display make editing on a computer far more practical for complex, professional video setups. While InShot is natively built for mobile operating systems, you can seamlessly run the fully unlocked interface on your computer today.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary-coral)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <strong>No Storage Limits:</strong> Moving onto a hard drive resolves smartphone storage issues permanently, enabling large project caches.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary-coral)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <strong>Precise Timeline Controls:</strong> Dragging keyframes, cropping clips, and balancing audio layers is infinitely faster when using a mouse.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary-coral)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <strong>Better Multitasking:</strong> Export huge timelines into full HD or 4K streams while keeping your smartphone free for phone calls or text messaging.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <span className="badge">Hardware Baseline</span>
              <h2 className="section-title">System Requirements for Desktop Rendering</h2>
              <p className="section-desc">
                Before installing, ensure your desktop computer or laptop matches these core hardware specifications for optimal 4K rendering performance.
              </p>
            </div>

            <div className="table-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Minimum Setup</th>
                    <th>Recommended Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Operating System</strong></td>
                    <td>Windows 10 / macOS Mojave</td>
                    <td>Windows 11 / macOS Sonoma</td>
                  </tr>
                  <tr>
                    <td><strong>Processor</strong></td>
                    <td>Intel Core i3 / AMD Ryzen 3</td>
                    <td>Intel Core i5 / AMD Ryzen 5 (or higher)</td>
                  </tr>
                  <tr>
                    <td><strong>RAM Space</strong></td>
                    <td>4 GB memory capacity</td>
                    <td>8 GB to 16 GB to prevent timeline lag</td>
                  </tr>
                  <tr>
                    <td><strong>Storage Space</strong></td>
                    <td>2 GB free hard drive space</td>
                    <td>50 GB+ SSD for caching 4K source video files</td>
                  </tr>
                  <tr>
                    <td><strong>Graphics</strong></td>
                    <td>Intel HD Graphics 4000</td>
                    <td>NVIDIA GeForce / AMD Radeon Dedicated GPU</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Step-by-Step Installation Section */}
        <section id="install-methods" className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">Installation Protocols</span>
              <h2 className="section-title">Step-by-Step Emulator Setup Guides</h2>
              <p className="section-desc">
                Because there is no official native <code>.exe</code> or <code>.dmg</code> installer, using a trusted Android emulator is the most stable path.
              </p>
            </div>

            <div className="grid-2">
              {/* Method 1 */}
              <div className="card">
                <div className="badge" style={{ marginBottom: '20px' }}>Method 1: BlueStacks Client</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>High-Performance Configuration</h3>
                <ol style={{ paddingLeft: '20px', color: '#B0A8B0' }}>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Download the Software:</strong> Visit the official BlueStacks desktop domain to download the latest safe version of the software.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Execute Setup:</strong> Launch the installer file, click install, and allow it to configure the runtime environment on your hard drive.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Log Into Google:</strong> Open the emulator app, navigate to the built-in Play Store, and complete the authentication process.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Install InShot:</strong> Search for <strong>inshot video editor for pc</strong>. Click download, and let the virtual smartphone screen install it.
                  </li>
                </ol>
              </div>

              {/* Method 2 */}
              <div className="card">
                <div className="badge" style={{ marginBottom: '20px' }}>Method 2: LDPlayer / NoxPlayer</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>For Older or Low-RAM Computers</h3>
                <ol style={{ paddingLeft: '20px', color: '#B0A8B0' }}>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Get Lightweight Client:</strong> Download LDPlayer or NoxPlayer straight from its official developer page.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Optimize Settings:</strong> Open the program settings dashboard and assign at least 2 CPU cores and 2GB of system RAM to the virtual engine.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Fetch Mod APK:</strong> Skip the mobile store login by downloading the <strong>inshot mod apk latest version</strong> package on your PC.
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Drag and Install:</strong> Drag and drop the downloaded <code>.apk</code> file directly into the emulator window to trigger installation.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Direct Download Link */}
        <section className="section-padding text-center">
          <div className="container" style={{ maxWidth: '600px' }}>
            <span className="badge">⚡ Sideloading Source</span>
            <h2 className="section-title">Ready to Install on PC?</h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Grab the latest watermark-free, ad-free InShot Pro APK package to sideload directly into your chosen desktop emulator.
            </p>
            <div className="card" style={{ padding: '40px', background: '#1c1319', border: '1px solid rgba(255, 56, 92, 0.4)' }}>
              <a 
                href="https://f005.backblazeb2.com/file/inshotmod/Inshotmod.apk" 
                className="btn btn-primary"
                style={{ width: '100%', padding: '18px 24px', fontSize: '1.15rem' }}
              >
                📥 Download Mod APK for Emulator
              </a>
              <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                v1.2026 | ~120MB | Checked and verified safe
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
