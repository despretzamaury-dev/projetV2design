"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsAnalyzing(true);
    setHasResults(false);

    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResults(true);
    }, 2000);
  };

  const MOCK_CREATORS = [
    {
      name: "Alex Design",
      handle: "@alexdesign",
      niche: "UI/UX & Web Design",
      followers: "120K",
      engagement: "4.5%",
      badge: "blue"
    },
    {
      name: "Sarah Tech",
      handle: "@sarahtech",
      niche: "Frontend Dev",
      followers: "85K",
      engagement: "6.2%",
      badge: "violet"
    },
    {
      name: "Marcus Build",
      handle: "@marcusbuild",
      niche: "Startups & SaaS",
      followers: "210K",
      engagement: "3.8%",
      badge: "red"
    }
  ];

  return (
    <div>
      <div className="container">
        <header className="header">
          <div className="logo">Collab<span style={{ color: "var(--color-m-blue)" }}>Match</span></div>
          <div>
            <button className="btn btn--ghost">Sign In</button>
          </div>
        </header>

        <main className="section">
          <div className="accent-line" style={{ width: "60px", margin: "0 auto var(--space-6)" }}></div>
          
          <div className="hero-section">
            <h1 className="text-hero">
              Find Your Perfect <br />
              <span style={{ color: "var(--color-m-blue)" }}>Collaboration</span>
            </h1>
            <p className="text-body" style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-lg)" }}>
              Enter the URL of your site or social account. Our engine will analyze your niche and find the most relevant content creators to amplify your brand.
            </p>

            <form className="search-container" onSubmit={handleAnalyze}>
              <input
                type="text"
                placeholder="https://yourwebsite.com"
                className="input search-input"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button 
                type="submit" 
                className="btn btn--primary"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? "Analyzing..." : "Analyze"}
              </button>
            </form>
          </div>

          <div className="divider">
            <span className="text-label" style={{ color: "var(--color-text-muted)" }}>Results</span>
          </div>

          {isAnalyzing && (
            <div className="text-center" style={{ textAlign: "center", padding: "var(--space-8)" }}>
              <div className="text-title fade-in">Scanning networks...</div>
              <p className="text-body" style={{ color: "var(--color-text-muted)", marginTop: "var(--space-3)" }}>
                Extracting niche data, finding related profiles, and calculating match scores.
              </p>
            </div>
          )}

          {hasResults && !isAnalyzing && (
            <div className="grid fade-in">
              {MOCK_CREATORS.map((creator, index) => (
                <div key={index} className="card card--featured transition-base">
                  <div className="creator-header">
                    <div className="creator-avatar" />
                    <div className="creator-info">
                      <span className="text-body" style={{ fontWeight: "var(--weight-semi)" }}>{creator.name}</span>
                      <span className="text-caption">{creator.handle}</span>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: "var(--space-4)" }}>
                    <span className={`badge badge--${creator.badge}`}>{creator.niche}</span>
                  </div>

                  <div className="creator-stats">
                    <div className="stat-item">
                      <span className="stat-value">{creator.followers}</span>
                      <span className="text-caption">Followers</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">{creator.engagement}</span>
                      <span className="text-caption">Engagement</span>
                    </div>
                  </div>

                  <div className="action-row">
                    <button className="btn btn--ghost" style={{ fontSize: "var(--text-xs)", padding: "var(--space-2) var(--space-3)" }}>View Profile</button>
                    <button className="btn btn--primary" style={{ fontSize: "var(--text-xs)", padding: "var(--space-2) var(--space-3)" }}>Connect</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
