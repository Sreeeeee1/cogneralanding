"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import { motion, useMotionValue, useSpring, useTransform, useVelocity, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, MousePointer, Activity, Zap, ShieldCheck, Lock, Fingerprint } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Mouse Parallax Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Velocity for the Sparkline
    const xVelocity = useVelocity(mouseX);
    const yVelocity = useVelocity(mouseY);
    const combinedVelocity = useTransform([xVelocity, yVelocity], ([x, y]) => {
        return Math.min(Math.sqrt(Math.pow(Number(x), 2) + Math.pow(Number(y), 2)) * 0.5, 100);
    });
    const smoothedVelocity = useSpring(combinedVelocity, { damping: 50, stiffness: 400 });

    const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section className={styles.hero} onMouseMove={handleMouseMove} ref={containerRef}>
            {/* Animated Background Blobs */}
            <div className={styles.blobContainer}>
                <motion.div
                    className={styles.blob1}
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className={styles.blob2}
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.textContent}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className={styles.badge}
                        >
                            Next-Gen Behavioral Intelligence
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className={styles.title}
                        >
                            Privacy-First <br />
                            <span>Behavioral Intelligence</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={styles.subtitle}
                        >
                            Understand every click, tap, and scroll without ever knowing who the user is. Real-time behavioral insights powered by advanced privacy-preserving AI.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className={styles.actions}
                        >
                            <motion.button
                                className={styles.primaryBtn}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Request Pilot Access
                                <ArrowRight size={20} />
                                <motion.div
                                    className={styles.pulse}
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0, 0.5, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.button>
                            <motion.button
                                className={styles.secondaryBtn}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Play size={18} fill="currentColor" />
                                Interactive Demo
                            </motion.button>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.visualContent}
                        style={{ rotateX, rotateY }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className={styles.illustration}>
                            {/* Card 1: Velocity Monitor */}
                            <motion.div 
                                className={`${styles.insightCard} ${styles.velocityMonitor}`}
                                style={{
                                    y: useTransform(springY, [-0.5, 0.5], [-20, 20])
                                }}
                            >
                                <div className={styles.cardTop}>
                                    <div className={styles.cardIcon} style={{ background: 'rgba(217, 178, 79, 0.1)', color: 'var(--primary)' }}>
                                        <Activity size={16} />
                                    </div>
                                    Velocity Monitor
                                </div>
                                <div className={styles.velocityValue}>
                                    <motion.span>{useTransform(smoothedVelocity, v => Math.round(v))}</motion.span>
                                    <small>px/s</small>
                                </div>
                                <div className={styles.sparkline}>
                                    <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                                        <motion.path
                                            fill="none"
                                            stroke="var(--primary)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            d="M0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15"
                                            animate={{
                                                d: [
                                                    "M0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15",
                                                    "M0 15 Q 10 25, 20 15 T 40 15 T 60 15 T 80 15 T 100 15",
                                                    "M0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15"
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            style={{
                                                opacity: useTransform(smoothedVelocity, [0, 100], [0.3, 1])
                                            }}
                                        />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Card 2: Intent Radar */}
                            <motion.div 
                                className={`${styles.insightCard} ${styles.intentRadar}`}
                                style={{
                                    x: useTransform(springX, [-0.5, 0.5], [20, -20])
                                }}
                            >
                                <div className={styles.cardTop}>
                                    <div className={styles.cardIcon} style={{ background: 'rgba(14, 165, 164, 0.1)', color: '#0EA5A4' }}>
                                        <Fingerprint size={16} />
                                    </div>
                                    Intent Radar
                                </div>
                                <div className={styles.radarGrid}>
                                    {[...Array(9)].map((_, i) => (
                                        <motion.div 
                                            key={i} 
                                            className={styles.radarNode}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.2, 0.5, 0.2]
                                            }}
                                            transition={{ 
                                                duration: 2, 
                                                repeat: Infinity, 
                                                delay: i * 0.1 
                                            }}
                                        />
                                    ))}
                                    <motion.div 
                                        className={styles.radarPointer}
                                        style={{
                                            x: useTransform(springX, [-0.5, 0.5], [-30, 30]),
                                            y: useTransform(springY, [-0.5, 0.5], [-30, 30])
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Card 3: Privacy Shield (3D Style) */}
                            <motion.div 
                                className={`${styles.insightCard} ${styles.privacyShield}`}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={styles.shieldWrapper}>
                                    <motion.div 
                                        className={styles.shieldIcon}
                                        animate={{ rotateY: [0, 15, -15, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ShieldCheck size={48} strokeWidth={1} />
                                        <motion.div 
                                            className={styles.shieldGlow}
                                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </motion.div>
                                    <div className={styles.shieldContent}>
                                        <h3>100% Anonymized</h3>
                                        <p>Zero PII Data Stored</p>
                                    </div>
                                </div>
                                <div className={styles.securityTag}>
                                    <Lock size={12} />
                                    SOC2 COMPLIANT
                                </div>
                            </motion.div>

                            {/* Center Visual/Data Lines */}
                            <svg width="100%" height="100%" viewBox="0 0 400 400" className={styles.dataLines}>
                                <motion.circle 
                                    cx="200" cy="200" r="100" 
                                    fill="none" stroke="rgba(217, 178, 79, 0.05)" strokeWidth="1"
                                    animate={{ 
                                        r: [100, 140],
                                        opacity: [1, 0]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                                />
                                <motion.circle 
                                    cx="200" cy="200" r="160" 
                                    fill="none" stroke="rgba(14, 165, 164, 0.05)" strokeWidth="1" strokeDasharray="10,5"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
