"use client";

import React, { useEffect } from 'react';
import styles from './Hero.module.css';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Eye, MousePointer, Activity, Zap } from 'lucide-react';

export default function Hero() {
    // Mouse Parallax Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section className={styles.hero} onMouseMove={handleMouseMove}>
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
                            {/* Focus Pattern Card */}
                            <motion.div 
                                className={`${styles.insightCard} ${styles.focusPattern}`}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.cardIcon}`} style={{ background: 'rgba(14, 165, 164, 0.1)', color: '#0EA5A4' }}>
                                        <MousePointer size={16} />
                                    </div>
                                    Focus Pattern
                                </div>
                                <div className={styles.cardValue}>High Precision</div>
                                <div className={styles.miniChart}>
                                    {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((op, i) => (
                                        <div key={i} className={styles.bar} style={{ opacity: op }} />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Application Switch Card */}
                            <motion.div 
                                className={`${styles.insightCard} ${styles.appSwitch}`}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.cardIcon}`} style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>
                                        <Activity size={16} />
                                    </div>
                                    App Context
                                </div>
                                <div className={styles.cardValue}>Active Switch</div>
                                <div className={styles.miniChart}>
                                    {[0.3, 0.5, 0.8, 0.4, 0.9].map((op, i) => (
                                        <div key={i} className={styles.bar} style={{ opacity: op, background: i === 2 ? '#F97316' : undefined }} />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Attention Score Card */}
                            <motion.div 
                                className={`${styles.insightCard} ${styles.attentionScore}`}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.cardIcon}`} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22C55E' }}>
                                        <Zap size={16} />
                                    </div>
                                    Attention Score
                                </div>
                                <div className={styles.cardValue}>94.2% Peak</div>
                                <div className={styles.miniChart} style={{ height: '40px' }}>
                                    {[30, 50, 40, 70, 90, 85, 95].map((h, i) => (
                                        <div key={i} className={`${styles.bar} ${i > 4 ? styles.activeBar : ''}`} style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Center Visual/Data Lines */}
                            <svg width="100%" height="100%" viewBox="0 0 400 400" className={styles.dataLines}>
                                <motion.circle 
                                    cx="200" cy="200" r="120" 
                                    fill="none" stroke="rgba(14, 165, 164, 0.1)" strokeWidth="1" strokeDasharray="5,5"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.circle 
                                    cx="200" cy="200" r="160" 
                                    fill="none" stroke="rgba(34, 197, 94, 0.1)" strokeWidth="1" strokeDasharray="10,5"
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
