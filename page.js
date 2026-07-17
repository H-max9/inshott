'use client';

import React, { useState } from 'react';

export default function Home() {
  // Tabs State for Sideloading Guides
  const [activeTab, setActiveTab] = useState('android');

  // Accordion State for FAQs (key-value pair of index: boolean)
  const [openFaqs, setOpenFaqs] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleDownload = (e) => {
    e.preventDefault();
    window.location.href = 'https://f005.backblazeb2.com/file/inshotmod/Inshotmod.apk';
  };

  return (
    <>
      {/* Floating CTA Widget */}
      <a href="#download" className="floating-cta" onClick={(e) => {
        e.preventDefault();
        document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
      }}>
        <span>📥 Download Mod APK (2026)</span>
      </a>

      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <div className="logo-wrapper">
            <img 
              src="/logo.webp" 
              alt="InShot Premium Logo" 
              width="40" 
              height="40" 
              style={{ borderRadius: '10px' }} 
            />
            <span className="logo-text">InShot<span className="gradient-text">Pro</span></span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="/pc" className="nav-link">PC Setup</a></li>
              <li><a href="/troubleshooting" className="nav-link">Troubleshoot</a></li>
              <li><a href="/old-versions" className="nav-link">Old Versions</a></li>
              <li><a href="#faq" className="nav-link">FAQ</a></li>
            </ul>
          </nav>
          <div>
            <a href="#download" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
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
              <span className="badge">🚀 2026 Edition Unlocked</span>
              <h1 className="hero-title">
                The Ultimate Guide to <span className="gradient-text">InShot Mod APK</span>
              </h1>
              <p className="hero-desc">
                Elevate your mobile content creation. Access all premium tools, advanced AI features, 4K rendering at 60fps, 100% watermark-free exports, and a completely ad-free editing ecosystem without subscriptions.
              </p>
              <div className="hero-buttons">
                <a href="#download" className="btn btn-primary">
                  <span>Get Premium Unlocked</span>
                  <span className="btn-icon">⚡</span>
                </a>
                <a href="#features" className="btn btn-secondary">
                  Explore Pro Tools
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img 
                src="/44.webp" 
                alt="InShot Premium Dashboard Interface Mockup" 
                width="450" 
                height="450" 
                className="hero-image"
                style={{ width: '100%', height: 'auto', maxWidth: '420px' }}
              />
            </div>
          </div>
        </section>

        {/* What is InShot Mod APK */}
        <section id="about" className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">Unrestricted Control</span>
              <h2 className="section-title">What is InShot Mod APK?</h2>
              <p className="section-desc">
                InShot Mod APK is a modified and fully unlocked variant of the popular mobile photo and video editor, tailored for digital creators demanding professional workflows without paywall interruptions.
              </p>
            </div>

            <div className="grid-2" style={{ alignItems: 'stretch', gap: '32px' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }} className="gradient-text">Break Free from Creative Limits</h3>
                <p style={{ color: '#B0A8B0', marginBottom: '16px' }}>
                  Mobile phones have transformed how we capture life. But transforming raw footage into compelling social stories (like Instagram Reels, YouTube Shorts, or business ads) requires elite tools. 
                </p>
                <p style={{ color: '#B0A8B0' }}>
                  Standard versions enforce restrictive filters, watermark stampings, and noisy advertisement prompts. The InShot Premium Mod APK strips these boundaries, enabling ultra-smooth timelines, multi-track audio blending, 3D motions, and elite AI features on a unified mobile canvas.
                </p>
              </div>

              <div className="card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', textAlign: 'center' }}>Core Ecosystem Comparison</h3>
                <div className="table-wrapper" style={{ marginBottom: 0 }}>
                  <table>
                    <thead>
                      <tr>
                        <th>Standard Free</th>
                        <th>Unlocked Mod APK</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span className="cross-icon">✗</span> Logo watermark on export</td>
                        <td><span className="check-icon">✓</span> 100% Watermark-free</td>
                      </tr>
                      <tr>
                        <td><span className="cross-icon">✗</span> Intrusive pop-up video ads</td>
                        <td><span className="check-icon">✓</span> Pure ad-free workspace</td>
                      </tr>
                      <tr>
                        <td><span className="cross-icon">✗</span> Locked AI tools & assets</td>
                        <td><span className="check-icon">✓</span> Every pro asset open</td>
                      </tr>
                      <tr>
                        <td><span className="cross-icon">✗</span> Resolution capped at 1080p</td>
                        <td><span className="check-icon">✓</span> UHD 4K at 60fps export</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="section-padding">
          <div className="container">
            <div className="text-center">
              <span className="badge">Professional Toolset</span>
              <h2 className="section-title">Core Features of InShot Mod APK</h2>
              <p className="section-desc">
                Discover the professional-grade utilities that make InShot Mod APK the dominant mobile editing software on the market today.
              </p>
            </div>

            <div className="grid-3" style={{ marginBottom: '40px' }}>
              <div className="card">
                <div className="card-icon-wrapper">🚫</div>
                <h3 className="card-title">No Watermark & No Ads</h3>
                <p className="card-desc">
                  Maintain absolute brand integrity with watermark-free renders, and edit in a quiet, hyper-focused creative zone with zero banner or video interruptions.
                </p>
              </div>

              <div className="card">
                <div className="card-icon-wrapper">🧠</div>
                <h3 className="card-title">Advanced AI-Powered Tools</h3>
                <p className="card-desc">
                  Generate synced multi-language Auto Captions (with deep Hindi/Urdu styling support), remove backgrounds in seconds with smart cutout masking, and apply real-time face/body contour trackers.
                </p>
              </div>

              <div className="card">
                <div className="card-icon-wrapper">🔀</div>
                <h3 className="card-title">Transitions & Special Effects</h3>
                <p className="card-desc">
                  Seamlessly bridge split clips with over 100+ exclusive motion formulas (Glitch, Zoom, Ghost, Slice) and apply premium cinematic grading filters like Fresh and Moody.
                </p>
              </div>
            </div>

            <div className="grid-2" style={{ alignItems: 'stretch' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '16px' }} className="gradient-text">Advanced Multi-Layer Editing</h3>
                <p style={{ color: '#B0A8B0', marginBottom: '12px' }}>
                  <strong>Picture-in-Picture (PiP):</strong> Overlay secondary video tracks or png logos dynamically.
                </p>
                <p style={{ color: '#B0A8B0', marginBottom: '12px' }}>
                  <strong>Keyframe Animation:</strong> Define precise starting/ending points to create smooth movement paths for titles and vector decals.
                </p>
                <p style={{ color: '#B0A8B0', marginBottom: '12px' }}>
                  <strong>Speed Curves & Ramping:</strong> Create cinematic action curves by slowing down frames at crucial action beats before returning to standard pace.
                </p>
                <p style={{ color: '#B0A8B0' }}>
                  <strong>Robust Audio Engine:</strong> Duck music beneath speech tracks automatically, apply voice modulators, and use copyright-free audio suites.
                </p>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', textAlign: 'center' }}>Multi-Layer Timeline Visualization</h3>
                <div className="timeline-visualizer">
                  <div className="timeline-header">🎬 Inshot Editor Timeline View</div>
                  <div className="timeline-layer">
                    <span className="layer-tag">[ LAYER 4: STICKER ]</span>
                    <span className="layer-desc">✨ Sparkles (Keyframed Opacity & Path)</span>
                  </div>
                  <div className="timeline-layer">
                    <span className="layer-tag">[ LAYER 3: TEXT ]</span>
                    <span className="layer-desc">🗣️ Auto-Captions (Hindi & Urdu Unlocked)</span>
                  </div>
                  <div className="timeline-layer">
                    <span className="layer-tag">[ LAYER 2: PiP TRACK ]</span>
                    <span className="layer-desc">📹 Reaction Clip Overlay (Background Masked)</span>
                  </div>
                  <div className="timeline-layer">
                    <span className="layer-tag">[ LAYER 1: BASE ]</span>
                    <span className="layer-desc">🎥 Core Vlog Footage (Speed Curved Ramps)</span>
                  </div>
                  <div className="timeline-layer" style={{ borderLeftColor: '#00E676' }}>
                    <span className="layer-tag">[ AUDIO TRACK ]</span>
                    <span className="layer-desc">🎵 BG Beat + Auto-Ducked Voice Over</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Showcase */}
        <section className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">App Gallery</span>
              <h2 className="section-title">Visual Showcase & Features Preview</h2>
              <p className="section-desc">
                Take a closer look at the unlocked editing layouts, tools panels, and features embedded in the 2026 premium suite.
              </p>
            </div>

            <div className="showcase-slider">
              <div className="showcase-slide">
                <img src="/in 1.webp" alt="InShot Premium Main Screen Layout" className="showcase-img" />
                <h4 className="showcase-title">Fluid Editing Workspace</h4>
                <p className="showcase-desc">Highly optimized viewport for timeline adjustments and real-time previews.</p>
              </div>
              <div className="showcase-slide">
                <img src="/in 2.webp" alt="InShot Color Grading and Curve Editors" className="showcase-img" />
                <h4 className="showcase-title">Cinematic Grading Curvature</h4>
                <p className="showcase-desc">Unlock advanced HSL channels, photographic curves, and custom tones.</p>
              </div>
              <div className="showcase-slide">
                <img src="/in 3.webp" alt="InShot Text Styles and Font Settings" className="showcase-img" />
                <h4 className="showcase-title">Creative Typography</h4>
                <p className="showcase-desc">Import customized regional types (Nastaliq, Arabic, etc.) effortlessly.</p>
              </div>
              <div className="showcase-slide">
                <img src="/in 5.webp" alt="InShot Export Options Resolution & Framerate" className="showcase-img" />
                <h4 className="showcase-title">Ultra HD 4K Render Panel</h4>
                <p className="showcase-desc">Save projects up to fluid 60fps frame profiles with H.265 compressions.</p>
              </div>
              <div className="showcase-slide">
                <img src="/in 6.webp" alt="InShot Transitions and Filters Library" className="showcase-img" />
                <h4 className="showcase-title">Transition Motion Library</h4>
                <p className="showcase-desc">Connect split scenes with over 100+ dynamic premium motions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Head-to-Head Comparison */}
        <section id="comparison" className="section-padding">
          <div className="container">
            <div className="text-center">
              <span className="badge">Platform Matrix</span>
              <h2 className="section-title">InShot Free vs. InShot Pro Mod APK</h2>
              <p className="section-desc">
                See exactly which features unlock when you transition from the basic app store variant to the premium unlocked build.
              </p>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Feature Attribute</th>
                    <th>Standard Free Version</th>
                    <th>Unlocked Premium Mod</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Watermark logo stamping</strong></td>
                    <td><span className="cross-icon">Yes</span> (Stamped in export corner)</td>
                    <td className="pro-row"><span className="check-icon">No</span> (100% Watermark-Free)</td>
                  </tr>
                  <tr>
                    <td><strong>Workspace advertisements</strong></td>
                    <td><span className="cross-icon">Yes</span> (Frequent banner & video ads)</td>
                    <td className="pro-row"><span className="check-icon">No</span> (Completely Ads-Removed)</td>
                  </tr>
                  <tr>
                    <td><strong>AI automated utilities</strong></td>
                    <td>Very limited access</td>
                    <td className="pro-row"><span className="check-icon">Fully Unlocked</span> (Cutout, Auto-Subtitles)</td>
                  </tr>
                  <tr>
                    <td><strong>Chroma Key & Caption generation</strong></td>
                    <td>Requires watching commercial video ads</td>
                    <td className="pro-row"><span className="check-icon">Free</span> (Unrestricted instant access)</td>
                  </tr>
                  <tr>
                    <td><strong>Timeline multi-track limit</strong></td>
                    <td>Limited single-track overlays only</td>
                    <td className="pro-row"><span className="check-icon">Advanced Multi-track</span> overlays active</td>
                  </tr>
                  <tr>
                    <td><strong>Maximum export qualities</strong></td>
                    <td>Capped at standard 1080p</td>
                    <td className="pro-row"><span className="check-icon">Supports Ultra HD 4K</span> renders</td>
                  </tr>
                  <tr>
                    <td><strong>Audio layers & voice filters</strong></td>
                    <td>Basic music selections</td>
                    <td className="pro-row"><span className="check-icon">Comprehensive Store</span> & ducking unlocked</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section id="specs" className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">Hardware baseline</span>
              <h2 className="section-title">Technical Specifications & Requirements</h2>
              <p className="section-desc">
                Ensure your Android system satisfies the parameters below to experience stutter-free timeline operations and fast rendering.
              </p>
            </div>

            <div className="table-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Metric Attribute</th>
                    <th>Minimum Setup</th>
                    <th>Ideal Recommended Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Android Version</strong></td>
                    <td>Android 5.0 (Lollipop)</td>
                    <td>Android 8.0 (Oreo) to latest 2026 builds</td>
                  </tr>
                  <tr>
                    <td><strong>RAM Space</strong></td>
                    <td>2 GB minimum capacity</td>
                    <td>4 GB to 8 GB for multi-track 4K handling</td>
                  </tr>
                  <tr>
                    <td><strong>Storage Space</strong></td>
                    <td>200 MB for basic package install</td>
                    <td>5 GB to 10 GB free space for 4K video cache</td>
                  </tr>
                  <tr>
                    <td><strong>Processor</strong></td>
                    <td>Basic Dual-Core chip structure</td>
                    <td>Snapdragon 600 Series / Tensor / MediaTek equivalents</td>
                  </tr>
                  <tr>
                    <td><strong>Supported Formats</strong></td>
                    <td>MP4, MOV, JPEG, PNG, GIF</td>
                    <td>HEVC / H.265 high-efficiency systems</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Step-by-Step Installation Guides */}
        <section id="install" className="section-padding">
          <div className="container">
            <div className="text-center">
              <span className="badge">Sideloading Guide</span>
              <h2 className="section-title">Step-by-Step Installation Guide</h2>
              <p className="section-desc">
                Since modified configurations bypass official markets, follow the setup instructions below tailored for your specific operating system.
              </p>
            </div>

            <div className="tabs-container">
              <div className="tabs-nav">
                <button 
                  className={`tab-btn ${activeTab === 'android' ? 'active' : ''}`}
                  onClick={() => setActiveTab('android')}
                >
                  🤖 Android Installation
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'pc' ? 'active' : ''}`}
                  onClick={() => setActiveTab('pc')}
                >
                  💻 PC / Laptop Setup
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'ios' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ios')}
                >
                  🍎 iOS Devices
                </button>
              </div>

              {/* Android Pane */}
              <div className={`tab-pane ${activeTab === 'android' ? 'active' : ''}`}>
                <h3 className="tab-title">Android Sideloading Setup</h3>
                <ul className="tab-list">
                  <li className="tab-list-item">
                    <strong>Grant Sideloading Authorization:</strong> Go to device <strong>Settings</strong> &gt; <strong>Security / Privacy</strong>, and toggle <strong>Install Unknown Sources</strong> on. (Or grant permission to your web browser / file manager app when prompted).
                  </li>
                  <li className="tab-list-item">
                    <strong>Download the APK File:</strong> Tap the download button below to secure the official InShot Mod APK file to your local Downloads directory.
                  </li>
                  <li className="tab-list-item">
                    <strong>Launch Installer:</strong> Access your local <strong>File Manager</strong>, locate the downloaded file, and tap it to boot the Android package installer.
                  </li>
                  <li className="tab-list-item">
                    <strong>Verify Setup:</strong> Confirm the <strong>Install</strong> triggers, allow the package files to unpack, then click <strong>Open</strong> to start editing in your premium workspace.
                  </li>
                </ul>
              </div>

              {/* PC Pane */}
              <div className={`tab-pane ${activeTab === 'pc' ? 'active' : ''}`}>
                <h3 className="tab-title">Running on PC & Laptops</h3>
                <p style={{ color: '#B0A8B0', marginBottom: '24px' }}>
                  Since InShot is custom-engineered for mobile viewports, running it on desktop environments requires an Android desktop emulator. This allows you to edit on larger monitors with keyboard shortcuts and mouse control.
                </p>
                <ul className="tab-list">
                  <li className="tab-list-item">
                    <strong>Deploy Emulator:</strong> Download a reliable simulator (e.g. <strong>BlueStacks</strong>, <strong>NoxPlayer</strong>, <strong>MEmu</strong>) directly from their authorized portals.
                  </li>
                  <li className="tab-list-item">
                    <strong>Link Google Profile:</strong> Launch the emulator and log in with your Google Play credentials to configure your environment.
                  </li>
                  <li className="tab-list-item">
                    <strong>Deploy InShot:</strong> Drag and drop your downloaded InShot Mod APK directly into the emulator viewport, or use the emulator's built-in browser to fetch it.
                  </li>
                  <li className="tab-list-item">
                    <strong>Windows 11 alternative:</strong> If your PC runs a modern Windows 11 desktop, you can bypass emulators by deploying Android apps through native subsystem frameworks.
                  </li>
                </ul>
              </div>

              {/* iOS Pane */}
              <div className={`tab-pane ${activeTab === 'ios' ? 'active' : ''}`}>
                <h3 className="tab-title">Setting Up on iOS (iPhone / iPad)</h3>
                <div style={{ background: 'rgba(255, 56, 92, 0.05)', borderLeft: '4px solid var(--primary-coral)', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                  <p style={{ color: '#B0A8B0', fontSize: '0.95rem' }}>
                    <strong>Crucial Technical Clarification:</strong> Apple's iOS framework does not natively read Android <code>.apk</code> packages, nor do emulators boot inside iOS. Sideloading modded apps on iPhone requires standard official procedures:
                  </p>
                </div>
                <ul className="tab-list">
                  <li className="tab-list-item">
                    <strong>Visit App Store:</strong> Open the official <strong>App Store</strong> on your iOS device.
                  </li>
                  <li className="tab-list-item">
                    <strong>Search & Fetch:</strong> Search for "InShot" and click the <strong>Get</strong> button to install the original version.
                  </li>
                  <li className="tab-list-item">
                    <strong>Go Pro:</strong> Launch the application, click on the Settings gear in the corner, choose the <strong>Go Pro</strong> subscription, and activate the official premium trial.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Tutorial */}
        <section id="workflow" className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">Creator Handbook</span>
              <h2 className="section-title">How to Edit Like a Pro: 3-Step Workflow</h2>
              <p className="section-desc">
                Follow this simple, professional workflow to transform raw timeline clips into social-media-ready masterpieces.
              </p>
            </div>

            <div className="grid-3">
              <div className="card workflow-step">
                <div className="step-num">1</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Initialize the Canvas</h3>
                <p className="card-desc">
                  Import files via <strong>Video &gt; New +</strong>. Select the <strong>Canvas</strong> tool and select your aspect preset: <strong>9:16</strong> for Reels/TikTok, <strong>16:9</strong> for YouTube, or <strong>1:1</strong> for grids.
                </p>
              </div>

              <div className="card workflow-step">
                <div className="step-num">2</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Layer & Grade Assets</h3>
                <p className="card-desc">
                  Trim clips using the <strong>Split</strong> key. Tap <strong>PiP</strong> to layer react files or watermarks. Insert audio via <strong>Music</strong>, apply speed curves, and apply cinematic grading filters.
                </p>
              </div>

              <div className="card workflow-step">
                <div className="step-num">3</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>High-Res Compilation</h3>
                <p className="card-desc">
                  Tap <strong>Save</strong> in the upper right. Select your rendering properties (for social feeds, export at <strong>1080p</strong> or full <strong>4K at 60fps</strong>) and compile with zero watermarks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Video Editors */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <span className="badge">Market Alternatives</span>
              <h2 className="section-title">Alternative Mobile Video Editors</h2>
              <p className="section-desc">
                If you wish to compare InShot against other market leaders, check out these highly recommended alternatives:
              </p>
            </div>

            <div className="grid-4">
              <div className="card">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>1. CapCut</h3>
                <p className="card-desc" style={{ fontSize: '0.88rem' }}>
                  Developed by ByteDance, offering powerful automated body tracking, 3D zooms, and a standalone desktop layout.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>2. VN Video Editor</h3>
                <p className="card-desc" style={{ fontSize: '0.88rem' }}>
                  A fantastic official store alternative providing multi-layer tracks and speed curves with zero export watermark fees.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>3. Alight Motion</h3>
                <p className="card-desc" style={{ fontSize: '0.88rem' }}>
                  The premier choice for vector graphic styling and complex keyframe animations on mobile screens.
                </p>
              </div>
              <div className="card">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>4. KineMaster</h3>
                <p className="card-desc" style={{ fontSize: '0.88rem' }}>
                  Mimics desktop timelines with a horizontal editor workspace and professional chroma key green screen isolation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Creator Tips */}
        <section className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">Industry Best Practices</span>
              <h2 className="section-title">Pro Tips for Mobile Creators</h2>
              <p className="section-desc">
                Maximize the efficiency of your device hardware and elevate the quality of your social exports.
              </p>
            </div>

            <div className="protips-banner">
              <ul className="protips-list">
                <li className="protip-item">
                  <strong>Device Storage Buffers:</strong> 4K video exports take massive caching spaces. Always keep at least 5GB of free space on your phone to prevent export freezing at 95%.
                </li>
                <li className="protip-item">
                  <strong>Optimize Thermals:</strong> Close secondary background apps before running export loops. This prevents processor thermal throttling and limits render lag.
                </li>
                <li className="protip-item">
                  <strong>Soundless Scroller Optimization:</strong> Since over 70% of viewers scroll feeds with muted audio, utilize the AI Auto Captions tool to lock engagement.
                </li>
                <li className="protip-item">
                  <strong>Smooth Motion Easing:</strong> When utilizing keyframe coordinate tracks, apply soft easing values (0.3s to 0.5s) to animate titles smoothly.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Creator Resources Section */}
        <section id="resources" className="section-padding" style={{ background: '#090608', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">💡 Creator Handbook</span>
              <h2 className="section-title">Essential Creator Guides & Diagnostics</h2>
              <p className="section-desc">
                Expand your editing workflow with our deep-dive resources. Learn to configure desktop rendering platforms, fix app glitches, or explore archive features.
              </p>
            </div>

            <div className="grid-3" style={{ marginTop: '40px' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="card-icon-wrapper">💻</div>
                <h3 className="card-title">InShot for PC Setup Guide</h3>
                <p className="card-desc" style={{ flexGrow: 1, marginBottom: '24px' }}>
                  Complete tutorial for running InShot on Windows 10/11 & Mac. Includes optimization guidelines for BlueStacks, LDPlayer, and NoxPlayer.
                </p>
                <a href="/pc" className="btn btn-secondary" style={{ width: '100%' }}>
                  View PC Guide →
                </a>
              </div>

              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="card-icon-wrapper">🔧</div>
                <h3 className="card-title">Troubleshooting & Error Fixes</h3>
                <p className="card-desc" style={{ flexGrow: 1, marginBottom: '24px' }}>
                  Step-by-step diagnostic checklists for fixing 'App Not Installed' errors, export freezes, choppy playback, and timeline audio lag.
                </p>
                <a href="/troubleshooting" className="btn btn-secondary" style={{ width: '100%' }}>
                  Diagnose Errors →
                </a>
              </div>

              <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="card-icon-wrapper">📁</div>
                <h3 className="card-title">Old Versions & AI Archive</h3>
                <p className="card-desc" style={{ flexGrow: 1, marginBottom: '24px' }}>
                  Historic build tracking matrix comparing features across v1.65, v1.95, and the latest 2026 AI framework. Find stable legacy packages.
                </p>
                <a href="/old-versions" className="btn btn-secondary" style={{ width: '100%' }}>
                  Browse Versions →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Download Section */}
        <section id="download" className="section-padding text-center" style={{ position: 'relative' }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <span className="badge">⚡ Direct Secure Download</span>
            <h2 className="section-title">Get InShot Pro Mod APK</h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Download the fully unlocked, watermark-free InShot Pro APK. Safe, verified, and ready to install on your Android device or emulator.
            </p>
            <div className="card" style={{ padding: '40px', background: '#1c1319', border: '1px solid rgba(255, 56, 92, 0.4)', boxShadow: '0 8px 32px rgba(255, 56, 92, 0.15)' }}>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--primary-coral)', fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: '12px' }}>
                Verified APK Package
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>InShot Pro v1.2026 (Premium Unlocked)</h3>
              <a 
                href="https://f005.backblazeb2.com/file/inshotmod/Inshotmod.apk" 
                className="btn btn-primary"
                style={{ width: '100%', padding: '18px 24px', fontSize: '1.15rem' }}
                onClick={handleDownload}
              >
                📥 Download Mod APK (v1.2026)
              </a>
              <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                File Size: ~120MB | Secure Cloud Link | Checked via VirusTotal
              </div>
            </div>
          </div>
        </section>

        {/* FAQs and Troubleshooting */}
        <section id="faq" className="section-padding" style={{ background: '#0c080b' }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">Resolve Issues</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-desc">
                Find answers to common operational issues, safety concerns, and timeline troubleshooting queries.
              </p>
            </div>

            <div className="accordion">
              {/* FAQ 1 */}
              <div className="accordion-item">
                <button className="accordion-trigger" onClick={() => toggleFaq(0)}>
                  <span>Is using a modified application secure?</span>
                  <span className={`accordion-icon ${openFaqs[0] ? 'open' : ''}`}>+</span>
                </button>
                {openFaqs[0] && (
                  <div className="accordion-content">
                    While modified files provide free access to premium utilities, they operate in a legal gray area and do not receive automatic updates from official app stores. For maximum device security and stability, the safest method is to download the standard application directly from the Play Store and subscribe to the official Pro version.
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="accordion-item">
                <button className="accordion-trigger" onClick={() => toggleFaq(1)}>
                  <span>Can I edit and export 4K video clips at 60fps?</span>
                  <span className={`accordion-icon ${openFaqs[1] ? 'open' : ''}`}>+</span>
                </button>
                {openFaqs[1] && (
                  <div className="accordion-content">
                    Yes! The premium configuration unlocks full 4K ultra-high-definition exports. However, rendering speeds depend on your smartphone's processing power. Modern smartphones will render these files smoothly, while older devices may experience performance lag.
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="accordion-item">
                <button className="accordion-trigger" onClick={() => toggleFaq(2)}>
                  <span>Can I run one single subscription across Android and Apple simultaneously?</span>
                  <span className={`accordion-icon ${openFaqs[2] ? 'open' : ''}`}>+</span>
                </button>
                {openFaqs[2] && (
                  <div className="accordion-content">
                    No. Official in-app purchases are tied directly to your specific App Store or Google Play account ecosystem, meaning individual platform subscriptions do not cross over.
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="accordion-item">
                <button className="accordion-trigger" onClick={() => toggleFaq(3)}>
                  <span>Does InShot support the use of custom localized regional fonts?</span>
                  <span className={`accordion-icon ${openFaqs[3] ? 'open' : ''}`}>+</span>
                </button>
                {openFaqs[3] && (
                  <div className="accordion-content">
                    Yes! You can manually import external typography types—including customized Urdu or Arabic Nastaliq font packages—directly into the editor font panel.
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="accordion-item">
                <button className="accordion-trigger" onClick={() => toggleFaq(4)}>
                  <span>How to fix export freezing or application crashing?</span>
                  <span className={`accordion-icon ${openFaqs[4] ? 'open' : ''}`}>+</span>
                </button>
                {openFaqs[4] && (
                  <div className="accordion-content">
                    This usually happens when processing large video files on older mobile devices with low storage or RAM. Try clearing your app's local cache data, closing other background apps to free up memory, or lowering your export profile settings to a standard 1080p resolution at 30fps.
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="accordion-item">
                <button className="accordion-trigger" onClick={() => toggleFaq(5)}>
                  <span>How to fix laggy real-time timeline previews?</span>
                  <span className={`accordion-icon ${openFaqs[5] ? 'open' : ''}`}>+</span>
                </button>
                {openFaqs[5] && (
                  <div className="accordion-content">
                    If playback stutters while editing, avoid stacking too many high-end filters or overlapping text blocks on top of each other early on. You can also pre-trim long raw video files before importing them into your timeline to keep playback running smoothly.
                  </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="accordion-item">
                <button className="accordion-trigger" onClick={() => toggleFaq(6)}>
                  <span>How to fix desynced audio layers or lost track layers?</span>
                  <span className={`accordion-icon ${openFaqs[6] ? 'open' : ''}`}>+</span>
                </button>
                {openFaqs[6] && (
                  <div className="accordion-content">
                    If background audio drops out mid-clip, open the Volume utility to verify that you didn't accidentally mute individual tracks. Make sure all external sound imports are converted into standard formatting types like MP3 or AAC formats before dropping them onto your timeline.
                  </div>
                )}
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
                The comprehensive tutorial resource and unlocked setup guide for mobile videographers and creators. Download the 2026 Mod APK and elevate your social edits today.
              </p>
            </div>
            <div>
              <ul className="footer-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/pc">PC Guide</a></li>
                <li><a href="/troubleshooting">Troubleshooting</a></li>
                <li><a href="/old-versions">Old Versions</a></li>
                <li><a href="#faq">FAQ</a></li>
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
