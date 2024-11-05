// src/components/HogForm.js
import React, { useState } from 'react';

function HogForm({ setHogsData }) {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState('');
  const [medal, setMedal] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      greased,
      weight: parseFloat(weight),
      "highest medal achieved": medal,
      image,
    };
    setHogsData(prevHogs => [...prevHogs, newHog]);
    setName('');
    setSpecialty('');
    setGreased(false);
    setWeight('');
    setMedal('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={specialty} onChange={e => setSpecialty(e.target.value)} placeholder="Specialty" required />
      <input type="checkbox" checked={greased} onChange={e => setGreased(e.target.checked)} /> Greased
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Weight" required />
      <input value={medal} onChange={e => setMedal(e.target.value)} placeholder="Highest Medal" required />
      <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" required />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
