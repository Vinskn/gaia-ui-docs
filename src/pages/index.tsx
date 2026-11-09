import React, { useState } from "react";
import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// Built-in component from @navatech/gaia-ui
import { Button } from "@navatech/gaia-ui";
import { AnimaButton, LicenseProvider } from "@navatech/gaia-ui/anima";
import key from "../../gaia-key.json";

// AnimaPopup component according to skills.md specification
import { AnimaPopup } from "@site/src/components/AnimaPopup";
import type {
  TAnimaPopupSeverity,
  TAnimaPopupVariant,
} from "@site/src/components/AnimaPopup";

import styles from "./index.module.css";
import { StandartVerTest } from "../components/Home/standartVerTest";
import { PremiumVerTest } from "../components/Home/premiumVerTest";

const GAIA_LOGO_URL = "https://be.navatech.me/assets/gaia.webp";
const NAVATECH_LOGO_URL = "https://be.navatech.me/assets/navatech.webp";

type PackageManager = "bun" | "npm" | "pnpm" | "yarn";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const [activeTab, setActiveTab] = useState<PackageManager>("bun");
  const [copied, setCopied] = useState(false);
  const [activeMode, setActiveMode] = useState<"standard" | "zenith">("zenith");

  // Standard Mode interactive states
  const [standardCount, setStandardCount] = useState<number>(0);
  const [standardLoading, setStandardLoading] = useState<boolean>(false);

  // Zenith Mode interactive states
  const [zenithPopupOpen, setZenithPopupOpen] = useState<boolean>(false);
  const [zenithSeverity, setZenithSeverity] =
    useState<TAnimaPopupSeverity>("standard");
  const [zenithVariant, setZenithVariant] =
    useState<TAnimaPopupVariant>("gradient-glass");

  const installCommands: Record<PackageManager, string> = {
    bun: "bun add @navatech/gaia-ui",
    npm: "npm install @navatech/gaia-ui",
    pnpm: "pnpm add @navatech/gaia-ui",
    yarn: "yarn add @navatech/gaia-ui",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const standardCodeSnippet = `import { Button } from "@navatech/gaia-ui"

export const StandartVersion = () => {
   return(
    <>
      <Button title="Ghost XL" variant="ghost" size="xl" />
      <Button title="Outline" variant="outline" size="md" />
      <Button title="Soft" variant="soft" size="md" />
      <Button title="Solid SM" variant="solid" size="sm" />
      <Button title="Descructive Full" variant="destructive" fullWidth/>
    </div>
   ) 
}`;

  const zenithCodeSnippet = `import { Button } from "@navatech/gaia-ui"
export const PremiumVersion = () => {
   return(
    <>
      <AnimaButton text="Primary LG" type="primary" size="lg"/>
      <AnimaButton text="Primary Gradient" gradient type="primary" size="lg"/>
      <AnimaButton text="Opposite" gradient type="opposite" size="lg"/>
      <AnimaButton text="Primary MD" type="primary" size="md"/>
      <AnimaButton text="Primary SM" gradient type="primary" size="sm"/>
      <AnimaButton text="Secondary SM" type="secondary" size="sm"/>
    </div>
   ) 
}`;

  return (
    <LicenseProvider token={key.key}>
      <Layout
        title={`${siteConfig.title} - Tailwind Library Components`}
        description="Ready-to-use UI components tailored for professional use, powered by anime-inspired aesthetics. Available in Standard & Zenith Editions. Created by Navatech."
      >
        <div className={styles.pageWrapper}>
          <div className={styles.ambientGlowTop} />
          <div className={styles.ambientGlowBottom} />
          <div className={styles.gridPattern} />

          {/* Hero Section */}
          <header className={styles.heroSection}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.pillBadge}>
                  <span className={styles.pillPulse} />
                  <span>🌸 Gaia UI • Library Components</span>
                </div>

                <h1 className={styles.heroTitle}>
                  My UI is an Isekai{" "}
                  <span className={styles.gradientText}>Cheat Code.</span>
                  <span className={styles.heroJapanese}>
                    ガイア UI - シュパーブ・ライブラリー
                  </span>
                </h1>

                <p className={styles.heroDescription}>
                  Gaia UI turns complex layouts and interactions into clean,
                  ready-to-use components with near-zero configuration. <br />{" "}
                </p>

                {/* Install Terminal */}
                <div className={styles.terminalBox}>
                  <div className={styles.terminalTabs}>
                    {(["bun", "npm", "pnpm", "yarn"] as PackageManager[]).map(
                      (pm) => (
                        <button
                          key={pm}
                          onClick={() => setActiveTab(pm)}
                          className={`${styles.terminalTab} ${
                            activeTab === pm ? styles.terminalTabActive : ""
                          }`}
                          type="button"
                        >
                          {pm}
                        </button>
                      ),
                    )}
                  </div>
                  <div className={styles.terminalContent}>
                    <div className={styles.terminalCode}>
                      <span className={styles.terminalPrefix}>$&nbsp;</span>
                      {installCommands[activeTab]}
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(installCommands[activeTab])
                      }
                      className={styles.copyButton}
                      type="button"
                      title="Copy command"
                    >
                      {copied ? "✓ Copied! 🌸" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Clean CTA Buttons */}
                <div className={styles.ctaRow}>
                  <Link
                    className={styles.primaryButton}
                    to="/docs/basicConfig/installation"
                  >
                    <span>Start (はじめましょう)</span>
                    <span>→</span>
                  </Link>
                  <Link
                    className={styles.secondaryButton}
                    href="https://www.npmjs.com/package/@navatech/gaia-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📦 View on NPM</span>
                  </Link>
                  <Link
                    className={styles.secondaryButton}
                    href="https://navatech.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>🏢 Navatech</span>
                  </Link>
                </div>
              </div>

              {/* Mascot Visual Artwork */}
              <div className={styles.heroVisualWrapper}>
                <div className={styles.mascotGlowRing}>
                  <div className={styles.mascotAuraHalo} />
                  <div className={styles.mascotImageCard}>
                    <img
                      src={GAIA_LOGO_URL}
                      alt="Gaia UI Anime Mascot Logo"
                      className={styles.mascotImage}
                    />
                  </div>

                  <div
                    className={`${styles.floatingTag} ${styles.floatingTagTop}`}
                  >
                    <span>👑</span>
                    <span>Easy to use</span>
                  </div>
                  <div
                    className={`${styles.floatingTag} ${styles.floatingTagBottom}`}
                  >
                    <span>⚡</span>
                    <span>React 19 & Bun Native</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Dual Mode Switcher Section: Standard vs Zenith */}
          <section className={styles.dualSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>
                COMPONENT SHOWCASE
              </span>
              <h2 className={styles.sectionTitle}>
                Standard vs Premium
              </h2>
              <p className={styles.sectionDesc}>
                Try two version of Gaia UI. <strong>Choose Your Fit</strong>
              </p>
            </div>

            {/* Mode Switcher Toggle */}
            <div className={styles.modeSwitcherContainer}>
              <div className={styles.modeToggleBar}>
                <button
                  type="button"
                  onClick={() => setActiveMode("standard")}
                  className={`${styles.modeToggleButton} ${
                    activeMode === "standard"
                      ? styles.modeToggleButtonStandardActive
                      : ""
                  }`}
                >
                  ⚙️ Standard Mode
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMode("zenith")}
                  className={`${styles.modeToggleButton} ${
                    activeMode === "zenith"
                      ? styles.modeToggleButtonZenithActive
                      : ""
                  }`}
                >
                  👑 Premium Mode
                </button>
              </div>
            </div>

            {/* Interactive Showcase Frame */}
            <div className={styles.dualShowcaseFrame}>
              {/* Live Component Preview Side */}
              <div className={styles.previewSide}>
                <div className={styles.previewBanner}>
                  <span>●</span> Live UI Simulation
                </div>

                {activeMode === "standard" ? (
                  <StandartVerTest />
                ) : (
                  <PremiumVerTest />
                )}
              </div>

              {/* Code Snippet Box */}
              <div className={styles.codeSide}>
                <div className={styles.codeWindowHeader}>
                  <div className={styles.windowDots}>
                    <span className={`${styles.dot} ${styles.dotRed}`} />
                    <span className={`${styles.dot} ${styles.dotYellow}`} />
                    <span className={`${styles.dot} ${styles.dotGreen}`} />
                  </div>
                  <span className={styles.fileName}>
                    {activeMode === "standard"
                      ? "StandardButtonShowcase.tsx"
                      : "ZenithPopupShowcase.tsx"}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#64748b" }}>
                    TypeScript
                  </span>
                </div>
                <pre className={styles.codeBody}>
                  <code>
                    {activeMode === "standard"
                      ? standardCodeSnippet
                      : zenithCodeSnippet}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          {/* Bento Features Section */}
          <section className={styles.bentoSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Library Highlights</span>
              <h2 className={styles.sectionTitle}>
                Built for Devs Who Love Aesthetic & Speed
              </h2>
              <p className={styles.sectionDesc}>
                Pick the right tier for your workflow and ship delightful web
                interfaces in minutes.
              </p>
            </div>

            <div className={styles.bentoGrid}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIconWrapper}>🚀</div>
                <h3 className={styles.bentoCardTitle}>Rapid Development</h3>
                <p className={styles.bentoCardDesc}>
                  Accelerate your UI workflow with battle-tested, ready-to-use
                  components without building from scratch.
                </p>
              </div>

              <div className={styles.bentoCard}>
                <div className={styles.bentoIconWrapper}>🎨</div>
                <h3 className={styles.bentoCardTitle}>Easy Theme Generation</h3>
                <p className={styles.bentoCardDesc}>
                  Generate cohesive themes effortlessly and keep your entire design
                  system consistent (Zenith / Premium exclusive).
                </p>
              </div>

              <div className={styles.bentoCard}>
                <div className={styles.bentoIconWrapper}>🌊</div>
                <h3 className={styles.bentoCardTitle}>Tailwind Ecosystem</h3>
                <p className={styles.bentoCardDesc}>
                  Seamlessly integrates with Tailwind CSS apply, adapt, and customize
                  themes directly with Tailwind classes.
                </p>
              </div>

              <div className={styles.bentoCard}>
                <div className={styles.bentoIconWrapper}>⚡</div>
                <h3 className={styles.bentoCardTitle}>
                  React &amp; TanStack Ecosystem
                </h3>
                <p className={styles.bentoCardDesc}>
                  Built for modern web speed with small bundle sizes and an easy,
                  delightful developer experience.
                </p>
              </div>

              <div className={styles.bentoCard}>
                <div className={styles.bentoIconWrapper}>🧩</div>
                <h3 className={styles.bentoCardTitle}>Minimal Configuration</h3>
                <p className={styles.bentoCardDesc}>
                  Works right out of the box with zero complex setup, keeping your
                  codebase clean and maintainable.
                </p>
              </div>

              <div className={styles.bentoCard}>
                <div className={styles.bentoIconWrapper}>✨</div>
                <h3 className={styles.bentoCardTitle}>Hover &amp; Animations</h3>
                <p className={styles.bentoCardDesc}>
                  Pre-configured hover interactions and fluid animations make your web
                  interfaces feel tactile and alive.
                </p>
              </div>
            </div>
          </section>

          {/* Creator / Navatech Spotlight Section */}
          <section className={styles.navatechSection}>
            <div className={styles.navatechCard}>
              <img
                src={NAVATECH_LOGO_URL}
                alt="Navatech Logo"
                className={styles.navatechLogo}
              />
              <h2 className={styles.navatechTitle}>
                Crafted with Passion by Navatech
              </h2>
              <p className={styles.navatechSubtitle}>
                Gaia UI is proudly engineered by the team at{" "}
                <strong>Navatech</strong>, bringing together solid engineering
                standards with expressive, modern anime aesthetics.
              </p>
              <div className={styles.navatechLinks}>
                <Link
                  className={styles.navatechPill}
                  href="https://navatech.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐 Navatech Official
                </Link>
                <Link
                  className={styles.navatechPill}
                  href="https://sinamokevin.navatech.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  👨‍💻 Lead Developer
                </Link>
                <Link
                  className={styles.navatechPill}
                  href="https://gaia.navatech.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📚 Live Documentation
                </Link>
              </div>
            </div>
          </section>

          {/* Bottom CTA Section */}
          <section className={styles.bottomCtaSection}>
            <div className={styles.bottomCtaBox}>
              <h2 className={styles.bottomCtaTitle}>
                Ready to Build Something Kawaii & Powerful?
              </h2>
              <p className={styles.bottomCtaDesc}>
                Check out the quickstart guide, explore pre-built components,
                and start building with Gaia UI in minutes.
              </p>
              <Link
                className={styles.primaryButton}
                to="/docs/basicConfig/installation"
              >
                <span>Read Documentation (ドキュメントを読む) →</span>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </LicenseProvider>
  );
}
