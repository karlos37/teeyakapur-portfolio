import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: "UT Dallas Central Business Office",
            location: "Richardson, TX",
            position: "Student Assistant",
            duration: "June 2025 – Present",
            responsibilities: [
                "Approved faculty requisitions and purchase orders in line with university procurement policies, ensuring timely posting to startup program accounts",
                "Audited travel and expense reports to identify discrepancies, contributing to cleaner financial records and improved reimbursement workflows",
                "Responded to 30+ weekly inquiries from staff via shared mailbox and Teams, achieving consistent on-time resolution and clear communication",
                "Coordinated with multiple departments to address purchase compliance issues, reducing errors by 15% and streamlining workflows"
            ]
        },
        {
            id: 2,
            company: "EFG Companies",
            location: "Irving, TX",
            position: "Audit Intern",
            duration: "March 2025 – May 2025",
            responsibilities: [
                "Prepared and reconciled monthly bank statements for 15+ client accounts, guaranteeing 100% accuracy between recorded and actual balances",
                "Collaborated with senior accountants to reconcile $29M+ worth of transactions, analyzing and resolving variances to maintain audit readiness and financial compliance",
                "Tracked the 300+ financial transactions using Microsoft Dynamics GP, increasing efficiency and accuracy in the company's accounting system",
                "Processed 80+ bills, remittances, and payments, ensuring timely and error-free financial documentation"
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2>Professional Experience</h2>
                <div className="experience-content">
                    {experiences.map(experience => (
                        <div key={experience.id} className="experience-item">
                            <div className="experience-header">
                                <div className="experience-title">
                                    <h3>{experience.position}</h3>
                                    <p className="company">{experience.company}</p>
                                </div>
                                <div className="experience-meta">
                                    <span className="location">{experience.location}</span>
                                    <span className="duration">{experience.duration}</span>
                                </div>
                            </div>
                            <div className="experience-responsibilities">
                                <ul>
                                    {experience.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

