import React from 'react';
import { SOCIAL_LINKS } from '@/app/socialConfig';

export const metadata = {
  title: "InShot Troubleshooting: How to Fix Common Installation & Export Errors",
  description: "Fix common InShot APK errors. Step-by-step solutions for 'App Not Installed', 'Parse Error', export freeze at 95%, video preview lag, and sound synchronization glitches.",
  keywords: [
    "inshot app not installed",
    "inshot export freezing",
    "inshot parse error",
    "inshot lag fix"
  ],
  alternates: {
    canonical: "https://inshotpromodapk.org/troubleshooting"
  }
};

export default function Troubleshooting() {
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
              <li><a href="/troubleshooting" className="nav-link" style={{ color: 'var(--primary-coral)' }}>Troubleshooting</a></li>
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
              <span className="badge">🔧 Troubleshooting Hub</span>
              <h1 className="hero-title">
                How to Fix Common <span className="gradient-text">InShot Errors</span>
              </h1>
              <p className="hero-desc">
                Encountering compilation freezes, setup failures, or audio desync? Our comprehensive technical guide provides simple, step-by-step diagnostic fixes to restore your editing workflow.
              </p>
              <div className="hero-buttons">
                <a href="#error-index" className="btn btn-primary">
                  <span>Browse Fixes</span>
                  <span className="btn-icon">🔍</span>
                </a>
                <a href="/" className="btn btn-secondary">
                  Back to Homepage
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img 
                src="/trouble.png" 
                alt="InShot Troubleshooting Diagnostic Illustration" 
                width="450" 
                height="450" 
                className="hero-image"
                style={{ width: '100%', height: 'auto', maxWidth: '450px' }}
              />
            </div>
          </div>
        </section>

        {/* Error Fixes Directory */}
        <section id="error-index" className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="text-center">
              <span className="badge">Diagnostic Center</span>
              <h2 className="section-title">Common Installation & Export Glitches</h2>
              <p className="section-desc">
                Even with an excellent video editor app, you can occasionally run into a system error or processing crash due to storage space conflicts or old software versions.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
              {/* Error 1 */}
              <div className="card" style={{ borderLeft: '5px solid var(--accent-red)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.35rem' }}>1. The "Parse Error / App Not Installed" Notification</h3>
                  <span className="badge" style={{ margin: 0, background: 'rgba(255, 23, 68, 0.1)', color: 'var(--accent-red)', borderColor: 'rgba(255, 23, 68, 0.2)' }}>Installation Error</span>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong>Why it happens:</strong> This message typically shows up if your mobile operating system is outdated, or if the background installation file became corrupted during the download phase.
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid var(--accent-green)' }}>
                  <strong style={{ color: 'var(--accent-green)' }}>🔧 The Resolution:</strong> Ensure your smartphone is upgraded to at least Android 6.0 or higher. Completely uninstall any existing old versions of the app from your device first. Clear out your browser download data folder, refresh your internet connection, and re-download the installation package.
                </div>
              </div>

              {/* Error 2 */}
              <div className="card" style={{ borderLeft: '5px solid var(--accent-red)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.35rem' }}>2. Video Export Freezes at 95% or Fails Completely</h3>
                  <span className="badge" style={{ margin: 0, background: 'rgba(255, 23, 68, 0.1)', color: 'var(--accent-red)', borderColor: 'rgba(255, 23, 68, 0.2)' }}>Rendering Error</span>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong>Why it happens:</strong> Timeline rendering is a process that can easily overload your system memory or clip when local system hardware space runs too low.
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid var(--accent-green)' }}>
                  <strong style={{ color: 'var(--accent-green)' }}>🔧 The Resolution:</strong> Check that you have at least 5GB to 10GB of clear, uncompressed free space available on your smartphone storage drive. Close down all other heavy background mobile apps before hitting export to free up your processing cores. If it stalls again, lower your destination settings from an ultra 4K video export profile down to a standardized <strong>1080p resolution at 30fps</strong>.
                </div>
              </div>

              {/* Error 3 */}
              <div className="card" style={{ borderLeft: '5px solid var(--accent-red)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.35rem' }}>3. Choppy Video Previews & Interface Lag</h3>
                  <span className="badge" style={{ margin: 0, background: 'rgba(255, 23, 68, 0.1)', color: 'var(--accent-red)', borderColor: 'rgba(255, 23, 68, 0.2)' }}>Performance Error</span>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong>Why it happens:</strong> Stacking multiple complex picture-in-picture (PiP) tracks, chroma key paths, and dynamic neon tracking animations simultaneously can stretch your phone's processor thin.
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid var(--accent-green)' }}>
                  <strong style={{ color: 'var(--accent-green)' }}>🔧 The Resolution:</strong> Restart your smartphone to clear out stuck system processes. Avoid using massive uncompressed clip lengths; split and trim long raw files into brief sections before applying high-end filters or speed ramps.
                </div>
              </div>

              {/* Error 4 */}
              <div className="card" style={{ borderLeft: '5px solid var(--accent-red)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.35rem' }}>4. Audio Desynchronization or Muted Voice-Overs</h3>
                  <span className="badge" style={{ margin: 0, background: 'rgba(255, 23, 68, 0.1)', color: 'var(--accent-red)', borderColor: 'rgba(255, 23, 68, 0.2)' }}>Audio Error</span>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong>Why it happens:</strong> This glitch appears when your project's timeline frame rate doesn't match up cleanly with your source files, or when background processes interrupt rendering.
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: '8px', borderLeft: '3px solid var(--accent-green)' }}>
                  <strong style={{ color: 'var(--accent-green)' }}>🔧 The Resolution:</strong> Check the clip parameters using the built-in volume icon to make sure your tracks aren't accidentally muted. Convert complex external sounds into standardized <strong>MP3</strong> or <strong>AAC</strong> formats before dropping them onto the timeline.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* General Prevention Tips */}
        <section className="section-padding">
          <div className="container text-center" style={{ maxWidth: '700px' }}>
            <span className="badge">Best Practices</span>
            <h2 className="section-title">Maintain a Crash-Free Workspace</h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Following basic system maintenance keeps your rendering speeds fast and blocks timeline freezes.
            </p>
            <div className="grid-2" style={{ textAlign: 'left', gap: '24px' }}>
              <div className="card" style={{ padding: '24px' }}>
                <h4 style={{ marginBottom: '8px' }}>🔄 Keep Cache Clean</h4>
                <p style={{ color: '#B0A8B0', fontSize: '0.9rem' }}>Go to Settings &gt; Apps &gt; InShot and clear local temporary files to resolve minor loading bugs.</p>
              </div>
              <div className="card" style={{ padding: '24px' }}>
                <h4 style={{ marginBottom: '8px' }}>🔋 Disable Battery Saver</h4>
                <p style={{ color: '#B0A8B0', fontSize: '0.9rem' }}>Disable power-saving mode when exporting to give Next-Gen AI features full CPU power.</p>
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
