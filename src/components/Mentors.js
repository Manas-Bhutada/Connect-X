import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get('/api/mentors')
      .then(response => setMentors(response.data))
      .catch(error => console.error('Error fetching mentors:', error));
  }, []);

  return (
    <section id="mentors" className="section relative text-center">
      <h2 className="text-3xl font-bold mb-4">Our Mentors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mentors.map(mentor => (
          <div key={mentor.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={mentor.image} alt={mentor.name} className="rounded-full mx-auto" />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              <p className="text-gray-700">{mentor.qualification}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
