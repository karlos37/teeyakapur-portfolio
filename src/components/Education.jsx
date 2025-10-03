import React from 'react';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2>Education</h2>
                <div className="education-content">
                    <div className="education-item">
                        <div className="education-header">
                            <h3>The University of Texas at Dallas</h3>
                            <span className="education-date">May 2028</span>
                        </div>
                        <div className="education-details">
                            <p className="degree">Bachelor of Science, Accounting</p>
                            <p className="degree">Master of Science, Accounting and Analytics</p>
                            <p className="gpa">GPA: 3.91</p>
                            <p className="certification">Texas CPA Eligible upon Graduation</p>
                        </div>
                        <div className="achievements">
                            <h4>Achievements & Awards:</h4>
                            <ul>
                                <li>UT Dallas Dean's List</li>
                                <li>Academic Excellence Scholarship</li>
                                <li>UT Dallas Rising Star Award</li>
                                <li>Chalak Mitra Scholarship</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

