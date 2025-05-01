import React from 'react';

function About() {
  const hobbies = [
    { name: 'Watching K-Dramas', icon: '🎬', description: 'I enjoy watching Korean dramas in my free time.' },
    { name: 'Listening to Music', icon: '🎵', description: 'Music helps me relax and stay focused while coding.' },
    { name: 'Traveling', icon: '✈️', description: 'I love exploring new places and experiencing different cultures.' }
  ];

  return (
    <section className="section about-section">
      <h2 className="section-title">About Me</h2>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="about-content">
            <div className="about-info">
              <h3 className="mb-4">Personal Information</h3>
              <p><span className="info-label">Name:</span> Mayen Sofia T. Mendoza</p>
              <p><span className="info-label">Age:</span> 21 years old</p>
              <p><span className="info-label">Course:</span> 3rd Year IT Student at Pamantasan ng Cabuyao</p>
            </div>
            
            <div className="about-bio">
              <h3 className="mb-3">Autobiography</h3>
              <p>
                I am a passionate IT student with a strong focus on web development. Over the years, 
                I've gained experience in various frontend and backend technologies.
              </p>
              <ul>
                <li>Experienced in frontend tools: HTML, CSS, Bootstrap, ReactJS, JavaScript</li>
                <li>Familiar with backend tools: PHP, Laravel, Java, MySQL</li>
                <li>Passionate about clean UI and intuitive user experience</li>
              </ul>
              <p>
                I enjoy solving complex problems and creating applications that are both functional 
                and visually appealing. I'm constantly learning and improving my skills to stay 
                up-to-date with the latest technologies in the field.
              </p>
            </div>
            
            <div className="hobbies-section">
              <h3 className="mb-3">My Hobbies</h3>
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-item">
                  <span className="hobby-icon">{hobby.icon}</span>
                  <div>
                    <h5 className="mb-1">{hobby.name}</h5>
                    <p className="mb-0">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;