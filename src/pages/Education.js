import React from 'react';

function Education() {
  const educations = [
    {
      level: 'College',
      school: 'Pamantasan ng Cabuyao',
      program: 'Bachelor of Science in Information Technology',
      years: '2021 - Present',
      awards: [
        'VPAA (1st sem 2022–2023)',
        'Dean\'s Lister (2nd sem 2022–2023)'
      ]
    },
    {
      level: 'Senior High School',
      school: 'Cabuyao Institute of Technology',
      program: 'Science, Technology, Engineering, and Mathematics (STEM)',
      years: '2019 - 2021',
      awards: ['With High Honors']
    },
    {
      level: 'Junior High School',
      school: 'Infant Jesus Montessori Center',
      program: 'Junior High School Education',
      years: '2015 - 2019',
      awards: ['With Honors']
    },
    {
      level: 'Elementary',
      school: 'Infant Jesus Montessori Center',
      program: 'Elementary Education',
      years: '2009 - 2015',
      awards: ['Special Academic Awardee']
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">My academic journey and achievements</p>
      
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {educations.map((education, index) => (
            <div key={index} className="education-card">
              <h3 className="education-title">{education.level}</h3>
              <h4 className="education-subtitle">{education.school}</h4>
              <p><strong>Program:</strong> {education.program}</p>
              <p><strong>Years:</strong> {education.years}</p>
              <div>
                {education.awards.map((award, awardIndex) => (
                  <span key={awardIndex} className="award-badge">{award}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;