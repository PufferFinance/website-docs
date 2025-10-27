import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function ProductCard({title, description, link}) {
  return (
    <div className={styles.productCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link
        className="button button--secondary button--lg"
        to={link}>
        Learn More
      </Link>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Puffer's suite of products">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Building the Future of Ethereum Infrastructure</h2>
            <div className={styles.productGrid}>
              <ProductCard
                title="Liquid Restaking Protocol"
                description="Puffer introduces a native Liquid Restaking Protocol (nLRP) integrated with EigenLayer, empowering users to maximize capital efficiency without compromising security. Our yield product enables users to participate in Ethereum's decentralized economy while maintaining optimal capital efficiency."
                link="/yield/intro"
              />
              <ProductCard
                title="UniFi Based Rollup"
                description="UniFi, our based rollup, connects natively with built-in yield and supports instant asset withdrawals, offering a seamless and more aligned alternative to traditional zk and optimistic rollups. Experience the future of rollup technology with native yield integration."
                link="https://docs-unifi.puffer.fi/"
              />
              <ProductCard
                title="Puffer Preconf"
                description="Puffer Preconf provides fast, secure, and neutral preconfirmation services for Layer 2 rollups. Backed by 3M ETH of restaked security, it brings ~100ms transaction confirmations to any L2 while maintaining decentralization and economic sustainability."
                link="/puffer-preconf/puffer-preconf-intro"
              />
              <ProductCard
                title="Institutional Solutions"
                description="Our Institutional Staking Solutions deliver enterprise-grade, scalable infrastructure for large-scale participation in Ethereum's decentralized economy. Designed for institutions seeking reliable and secure staking services."
                link="/institutional/institutional-intro"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 