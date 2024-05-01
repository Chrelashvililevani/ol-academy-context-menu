import React, { useState, useEffect, useRef } from 'react';

// Menu component
const Menu = ({ setActiveSection }) => {
  return (
    <div className="menu">
      <ul>
        <li onClick={() => setActiveSection("Main")} style={{backgroundColor: 'red'}}>Main</li>
        <li onClick={() => setActiveSection("Cars")} style={{backgroundColor: 'white', color: 'black'}}>Cars</li>
        <li onClick={() => setActiveSection("Bikes")} style={{backgroundColor: 'blue'}}>Bikes</li>
        <li onClick={() => setActiveSection("Bicycles")} style={{backgroundColor: 'green'}}>Bicycles</li>
        <li onClick={() => setActiveSection("About Us")} style={{backgroundColor: 'red'}}>About Us</li>
      </ul>
    </div>
  );
};

// Main component
const MainSection = ({ handleRemove, handleEdit }) => {
  return (
    <div className="section">
      <h2>Main Section</h2>
      <p>This is the main section content.</p>
      <div className='buttons'>
        <button onClick={handleRemove} style={{backgroundColor: 'red'}}>Remove Section</button>
        <button onClick={handleEdit} style={{backgroundColor: 'green'}}>Edit Section</button>
      </div>
    </div>
  );
};

// Cars component
const CarsSection = ({ handleRemove, handleEdit }) => {
  return (
    <div className="section">
      <h2>Cars Section</h2>
      <p>This is the cars section content.</p>
      <div className='buttons'>
        <button onClick={handleRemove} style={{backgroundColor: 'red'}}>Remove Section</button>
        <button onClick={handleEdit} style={{backgroundColor: 'green'}}>Edit Section</button>
      </div>
    </div>
  );
};

// Bikes component
const BikesSection = ({ handleRemove, handleEdit }) => {
  return (
    <div className="section">
      <h2>Bikes Section</h2>
      <p>This is the bikes section content.</p>
      <div className='buttons'>
        <button onClick={handleRemove} style={{backgroundColor: 'red'}}>Remove Section</button>
        <button onClick={handleEdit} style={{backgroundColor: 'green'}}>Edit Section</button>
      </div>
    </div>
  );
};

// Bicycles component
const BicyclesSection = ({ handleRemove, handleEdit }) => {
  return (
    <div className="section">
      <h2>Bicycles Section</h2>
      <p>This is the bicycles section content.</p>
      <div className='buttons'>
        <button onClick={handleRemove} style={{backgroundColor: 'red'}}>Remove Section</button>
        <button onClick={handleEdit} style={{backgroundColor: 'green'}}>Edit Section</button>
      </div>
    </div>
  );
};

// About Us component
const AboutUsSection = ({ handleRemove, handleEdit }) => {
  return (
    <div className="section">
      <h2>About Us Section</h2>
      <p>This is the about us section content.</p>
      <div className='buttons'>
        <button onClick={handleRemove} style={{backgroundColor: 'red'}}>Remove Section</button>
        <button onClick={handleEdit} style={{backgroundColor: 'green'}}>Edit Section</button>
      </div>
    </div>
  );
};

// Main component
const MainPage = () => {
  const [activeSection, setActiveSection] = useState(null); // Initially, no section is active
  const sectionRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setActiveSection(null); // Set active section to null when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setActiveSection]);

  const handleRemove = () => {
    setActiveSection(null); // Set active section to null when "Remove Section" button is clicked
    console.log("remove");
  };

  const handleEdit = () => {
    setActiveSection(null); // Set active section to null when "Edit Section" button is clicked
    console.log("edit");
  };

  return (
    <div className="app">
      <Menu setActiveSection={setActiveSection} />
      <div ref={sectionRef}>
        {activeSection === "Main" && <MainSection handleRemove={handleRemove} handleEdit={handleEdit} />}
        {activeSection === "Cars" && <CarsSection handleRemove={handleRemove} handleEdit={handleEdit} />}
        {activeSection === "Bikes" && <BikesSection handleRemove={handleRemove} handleEdit={handleEdit} />}
        {activeSection === "Bicycles" && <BicyclesSection handleRemove={handleRemove} handleEdit={handleEdit} />}
        {activeSection === "About Us" && <AboutUsSection handleRemove={handleRemove} handleEdit={handleEdit} />}
      </div>
    </div>
  );
};

export default MainPage;
