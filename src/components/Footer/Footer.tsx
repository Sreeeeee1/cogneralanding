"use client";

import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            className={styles.footer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            Cognera<span>.</span>
                        </Link>
                        <p className={styles.description}>
                            Privacy-first behavioral intelligence engine helping digital teams see the unseen context.
                        </p>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.groupTitle}>Product</h4>
                            <Link href="#problem" className={styles.link}>Problem</Link>
                            <Link href="#solution" className={styles.link}>Solution</Link>
                            <Link href="#use-cases" className={styles.link}>Use Cases</Link>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.groupTitle}>Founder</h4>
                            <span className={styles.info}>Ravi Kumar Samineni</span>
                            <Link href="mailto:founder@cognera.com" className={styles.link}>Contact Founder</Link>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.groupTitle}>Social</h4>
                            <div className={styles.social}>
                                <a href="#" className={styles.socialLink}><Twitter size={18} /></a>
                                <a href="#" className={styles.socialLink}><Linkedin size={18} /></a>
                                <a href="#" className={styles.socialLink}><Github size={18} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Cognera. Designed for the Future.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
