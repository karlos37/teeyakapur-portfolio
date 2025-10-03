import React from 'react';

const Organizations = () => {
    const organizations = [
        {
            id: 1,
            name: "Professional Program in Accounting",
            role: "Member",
            duration: "September 2025 – Present",
            description: "Active member of the professional accounting program, participating in industry events and professional development opportunities."
        },
        {
            id: 2,
            name: "Accounting Student Leadership Council",
            role: "Marketing Chairperson",
            duration: "June 2025 – Present",
            description: "Collaborated with executive board and other student organizations to launch and promote the council, reaching 150+ students within the first semester through targeted marketing campaigns and events."
        },
        {
            id: 3,
            name: "Indian Students Association",
            role: "Vice President",
            duration: "June 2024 – Present",
            description: "Launched and managed the first JSOM scholarship program for international students, leading a fundraising campaign that raised over $10,000 in the semester."
        },
        {
            id: 4,
            name: "Freshman Mentoring Program",
            role: "Mentor",
            duration: "June 2024 – Present",
            description: "Providing guidance and support to incoming freshmen, helping them navigate academic and social challenges during their transition to university life."
        }
    ];

    const competitions = [
        {
            id: 1,
            name: "FBLA Accounting Competition",
            duration: "Jan 2025 – Feb 2025",
            achievement: "Achieved first place in state-level Foundations of Accounting Exam and led team to win Accounting Case Competition, outperforming 200+ competitors."
        }
    ];

    return (
        <section id="organizations" className="organizations-section">
            <div className="container">
                <h2>Organizations & Leadership</h2>
                <div className="organizations-content">
                    <div className="organizations-list">
                        {organizations.map(org => (
                            <div key={org.id} className="organization-item">
                                <div className="organization-header">
                                    <h3>{org.name}</h3>
                                    <span className="role">{org.role}</span>
                                </div>
                                <div className="organization-meta">
                                    <span className="duration">{org.duration}</span>
                                </div>
                                <p className="organization-description">{org.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="competitions-section">
                        <h3>Academic Competitions</h3>
                        {competitions.map(competition => (
                            <div key={competition.id} className="competition-item">
                                <div className="competition-header">
                                    <h4>{competition.name}</h4>
                                    <span className="duration">{competition.duration}</span>
                                </div>
                                <p className="competition-achievement">{competition.achievement}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizations;

