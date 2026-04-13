import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// Subtle Scroll Reveal hook
const useScrollReveal = (options = { threshold: 0.1 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(currentRef);
            }
        }, options);

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [options]);

    return [ref, isVisible];
};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-premium fixed-top py-3">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" href="#">
                    <i className="bi bi-shield-lock-fill text-accent fs-3"></i> PROVILITY UK
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {['Systems', 'Defense', 'Features', 'Pricing', 'Contact'].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link fw-medium" href={`#${item.toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <section id="systems" className="hero-section position-relative">
            <div className="container text-center text-md-start z-1">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className={`d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4 reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{background: 'rgba(88, 28, 135, 0.08)', border: '1px solid rgba(88, 28, 135, 0.15)'}}>
                            <span className="badge rounded-circle p-1" style={{backgroundColor: 'var(--accent)'}}><span className="visually-hidden">Online</span></span>
                            <span className="text-accent fs-6 fw-bold">Network Secure & Active</span>
                        </div>
                        <h1 className={`display-3 fw-bold mb-4 reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`} style={{letterSpacing: '-1px', color: 'var(--text-primary)'}}>
                            Next-Gen <br />
                            <span className="text-gradient">Cyber Security</span>
                        </h1>
                        <p className={`lead mb-5 text-secondary fs-5 reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`} style={{maxWidth: '650px'}}>
                            Protect your endpoints and sliding-window protocols with enterprise-grade DoS protection. Vibrant, modular, and uncompromising.
                        </p>
                        <div className={`d-flex gap-3 justify-content-center justify-content-md-start flex-wrap reveal-up delay-300 ${isVisible ? 'reveal-visible' : ''}`}>
                            <a href="#features" className="btn-premium">Explore Capabilities</a>
                            <a href="#contact" className="btn btn-outline-light">Live Demo</a>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <img 
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Server Rack" 
                            className={`img-fluid rounded-4 animate-float shadow-lg reveal-up delay-300 ${isVisible ? 'reveal-visible' : ''}`} 
                            style={{border: '1px solid var(--border-color)'}} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

    return (
        <section id="defense" className="py-5 my-5 bg-light-soft" ref={ref}>
            <div className="container overflow-hidden py-5">
                <div className="row align-items-center gx-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className={`p-2 position-relative reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                            <div className="position-absolute top-0 end-0 rounded-circle" style={{background: 'var(--accent)', width: '250px', height: '250px', filter: 'blur(90px)', opacity: 0.15, zIndex: 0}}></div>
                            <img src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Cyber Grid" className="img-fluid rounded-4 w-100 shadow-lg position-relative z-1" style={{objectFit: 'cover', height: '400px', border: '1px solid var(--border-color)'}} />
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <h2 className={`fw-bold mb-4 display-5 reveal-up ${isVisible ? 'reveal-visible' : ''}`}>Unbreakable <br/><span className="text-gradient">Defense Matrix</span></h2>
                        <p className={`text-secondary mb-4 fs-6 reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`}>
                            We build proprietary packet filters, simulated threat detection endpoints, and dynamic TLS-secured architectures. No unauthorized ping goes unnoticed.
                        </p>
                        <div className={`row mt-5 pt-2 reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}>
                            {[{num: "99.9%", label: "Packet Filtration"}, {num: "100%", label: "Zero-Day Catch"}, {num: "10ms", label: "Latency Rating"}].map((stat, i) => (
                                <div className="col-4" key={i}>
                                    <h3 className="fs-3 fw-bold mb-1 text-accent">{stat.num}</h3>
                                    <span className="text-secondary fw-semibold" style={{fontSize: '0.85rem'}}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

    const features = [
         { title: "Zero-Trust Protocol", desc: "Never trust, always verify. Strict identity checks and minimal access privileges ensure lateral threats are contained.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
         { title: "AI Threat Mitigation", desc: "Our neural networks actively learn from incoming payloads, adapting our Web Application Firewall (WAF) in real-time.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
         { title: "Global CDN Shield", desc: "Distributed edge servers seamlessly absorb massive volumetric DDoS attacks before they can ever reach your infrastructure.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
    ];

    return (
        <section id="features" className="py-5 my-5" ref={ref}>
            <div className="container pt-4">
                <div className={`text-center mb-5 pb-4 reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                    <h2 className="fw-bold display-5">Enterprise <span className="text-gradient">Capabilities</span></h2>
                    <p className="text-secondary max-w-50 mx-auto mt-3 fs-5">Scalable architecture designed for modern threats.</p>
                </div>
                <div className="row g-5">
                    {features.map((feat, i) => (
                        <div className="col-lg-4" key={i}>
                            <div className={`glass-card p-0 h-100 d-flex flex-column reveal-up delay-${(i+1)*100} ${isVisible ? 'reveal-visible' : ''}`}>
                                <div className="img-zoom-wrapper bg-light" style={{height: '240px'}}>
                                    <img src={feat.img} alt={feat.title} className="w-100" style={{height: '100%', objectFit: 'cover'}} />
                                </div>
                                <div className="p-4 flex-grow-1 bg-white position-relative z-1">
                                    <h4 className="fw-bold mb-3 fs-5 text-uppercase" style={{letterSpacing: '0.5px'}}>{feat.title}</h4>
                                    <p className="text-secondary mb-0" style={{fontSize: '0.95rem'}}>{feat.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    const services = [
        { icon: "bi-shield-shaded", title: "Firewall Security", desc: "Sliding window rate-limiting, deep packet inspection, and IP blocking." },
        { icon: "bi-router-fill", title: "Network Protocol", desc: "Application-layer filtering, TLS-secured sockets, and ARP detection." },
        { icon: "bi-bug-fill", title: "Threat Hunt", desc: "Detect, analyze, and quarantine simulated automated attacks seamlessly." },
        { icon: "bi-hdd-network-fill", title: "DDoS Mitigation", desc: "Massive scale traffic absorption and high-throughput anomaly routing." }
    ];

    return (
        <section className="py-5 my-5 bg-light-soft position-relative" ref={ref}>
            <div className="container py-5">
                <div className={`text-center mb-5 pb-3 reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                    <h2 className="fw-bold display-4">Tactical <span className="text-gradient">Engagements</span></h2>
                    <p className="text-secondary max-w-50 mx-auto mt-3 fs-5">Interacting with protocol points activates hardware acceleration.</p>
                </div>
                <div className="row g-4 justify-content-center">
                    {services.map((srv, i) => (
                        <div className="col-md-6 col-lg-3" key={i}>
                            <div className={`glass-card p-4 h-100 text-center d-flex flex-column align-items-center justify-content-start reveal-up delay-${(i+1)*100} ${isVisible ? 'reveal-visible' : ''}`}>
                                <div className="icon-container d-inline-flex align-items-center justify-content-center p-3 rounded-circle mb-4" style={{background: 'rgba(88, 28, 135, 0.05)', width: '80px', height: '80px'}}>
                                    <i className={`bi ${srv.icon} text-accent`} style={{fontSize: '2.2rem'}}></i>
                                </div>
                                <h4 className="fw-bold mb-3 fs-5" style={{color: 'var(--text-primary)'}}>{srv.title}</h4>
                                <p className="text-secondary mb-0" style={{fontSize: '0.9rem'}}>{srv.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Pricing = () => {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

    return (
        <section id="pricing" className="py-5 my-5" ref={ref}>
            <div className="container pt-5">
                <div className={`text-center mb-5 pb-4 reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                    <h2 className="fw-bold display-5">Deployment <span className="text-gradient">Tiers</span></h2>
                    <p className="text-secondary mt-3 fs-5">Subscribe your infrastructure to the future.</p>
                </div>
                <div className="row g-4 justify-content-center align-items-stretch">
                    <div className={`col-lg-4 col-md-6 reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`}>
                        <div className="glass-card p-5 h-100 text-center d-flex flex-column">
                            <h4 className="fw-bold mb-2 text-uppercase" style={{letterSpacing: '2px'}}>Startup</h4>
                            <h2 className="display-3 fw-bold text-accent mb-4 mt-2">$49<span className="fs-6 text-secondary fw-normal">/mo</span></h2>
                            <ul className="list-unstyled text-start mb-5 flex-grow-1 d-flex flex-column gap-3 fw-medium">
                                <li><i className="bi bi-rocket-takeoff-fill text-accent me-3"></i> L4/L7 DDoS Protection</li>
                                <li><i className="bi bi-hdd-fill text-accent me-3"></i> Shared IP Space</li>
                                <li><i className="bi bi-speedometer2 text-accent me-3"></i> Basic Rate Limiting</li>
                                <li className="text-muted"><i className="bi bi-ban me-3"></i> Custom WAF Rules</li>
                            </ul>
                            <a href="#contact" className="btn btn-outline-light w-100 mt-auto">Lock In Plan</a>
                        </div>
                    </div>
                    <div className={`col-lg-4 col-md-6 reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}>
                        <div className="glass-card p-5 h-100 text-center position-relative d-flex flex-column" style={{border: '1px solid var(--accent)'}}>
                            <div className="position-absolute top-0 start-50 translate-middle badge rounded-pill py-2 px-4 fs-6 shadow text-uppercase" style={{backgroundColor: 'var(--accent)', letterSpacing: '1px'}}>Most Powerful</div>
                            <h4 className="fw-bold mb-2 mt-2 text-uppercase" style={{letterSpacing: '2px'}}>Enterprise</h4>
                            <h2 className="display-3 fw-bold text-accent mb-4 mt-2">$199<span className="fs-6 text-secondary fw-normal">/mo</span></h2>
                            <ul className="list-unstyled text-start mb-5 flex-grow-1 d-flex flex-column gap-3 fw-bold">
                                <li><i className="bi bi-cpu-fill text-accent me-3 fs-5"></i> Dedicated Static IP</li>
                                <li><i className="bi bi-terminal-fill text-accent me-3 fs-5"></i> Custom Script WAF Rules</li>
                                <li><i className="bi bi-robot text-accent me-3 fs-5"></i> Advanced Bot Auto-Ban</li>
                                <li><i className="bi bi-headset text-accent me-3 fs-5"></i> Priority Support</li>
                            </ul>
                            <a href="#contact" className="btn-premium w-100 mt-auto">Scale To Enterprise</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, email, message };


try {
    const res = await fetch("https://protivity-uk.onrender.com/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await res.json();

    alert("Message sent successfully 🔥");

    setName("");
    setEmail("");
    setMessage("");

} catch (err) {
    console.log(err);
    alert("Error sending message ❌");
}
    };

    return (
        <section id="contact" className="py-5 my-5 bg-light-soft">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="glass-card p-4 p-md-5">
                            
                            <div className="text-center mb-5">
                                <h2 className="fw-bold display-5">
                                    Contact <span className="text-gradient">Provility</span>
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">

                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <textarea
                                            className="form-control"
                                            placeholder="Mission Brief"
                                            style={{ height: "140px" }}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="col-12 text-center mt-4">
                                        <button type="submit" className="btn-premium w-50 py-3">
                                            Send Data
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-5 border-top bg-white" style={{borderColor: 'var(--border-color) !important'}}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="mb-3 mb-md-0 fw-bold display-6 d-flex align-items-center gap-2 text-primary">
                <i className="bi bi-shield-lock-fill text-accent"></i> PROVILITY
            </div>
            <p className="text-secondary mb-0 fw-bold" style={{fontSize: '0.9rem', letterSpacing: '1px'}}>&copy; 2026 PROVILITY PROTOCOLS. ALL SECURE.</p>
            <div className="mt-3 mt-md-0 d-flex gap-4">
                <a href="#" className="fs-3 text-accent d-inline-block"><i className="bi bi-globe"></i></a>
                <a href="#" className="fs-3 text-accent d-inline-block"><i className="bi bi-terminal-fill"></i></a>
                <a href="#" className="fs-3 text-accent d-inline-block"><i className="bi bi-router-fill"></i></a>
            </div>
        </div>
    </footer>
);

const App = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollProgress((winScroll / height) * 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (loading) {
        return (
            <div className="preloader">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <div style={{overflowX: 'hidden'}}>
            <div className="progress-container">
                <div className="progress-bar-custom" style={{ width: `${scrollProgress}%` }}></div>
            </div>
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Services />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
