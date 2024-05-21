import React, { useState, useEffect, useRef } from 'react';

// Menu component
const Menu = ({ setActiveSection }) => {
  return (
    <div className="menu">
      <ul>
        <li onClick={() => setActiveSection("Main")} style={{ backgroundColor: 'red' }}>Main</li>
        <li onClick={() => setActiveSection("Cars")} style={{ backgroundColor: 'white', color: 'black' }}>Cars</li>
        <li onClick={() => setActiveSection("Bikes")} style={{ backgroundColor: 'blue' }}>Bikes</li>
        <li onClick={() => setActiveSection("Bicycles")} style={{ backgroundColor: 'green' }}>Bicycles</li>
        <li onClick={() => setActiveSection("About Us")} style={{ backgroundColor: 'red' }}>About Us</li>
      </ul>
    </div>
  );
};

// Section component
const Section = ({ title, content, onContextMenu }) => {
  return (
    <div className="section" onContextMenu={onContextMenu}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

// ContextMenu component
const ContextMenu = ({ position, onRemove, onEdit, onClose }) => {
  const handleRemoveClick = () => {
    onRemove();
    onClose();
  };

  const handleEditClick = () => {
    onEdit();
    onClose();
  };

  return (
    <>
      <div className="context-menu" style={{ top: position.y, left: position.x }}>
        <ul>
          <li onClick={handleRemoveClick}>Remove Section</li>
          <li onClick={handleEditClick}>Edit Section</li>
        </ul>
      </div>
      <div onClick={onClose} className="context-menu-backdrop"></div>
    </>
  );
};

// Main component
const MainPage = () => {
  const [activeSection, setActiveSection] = useState(null); // Initially, no section is active
  const sectionRef = useRef();
  const [contextMenu, setContextMenu] = useState({ visible: false, position: { x: 0, y: 0 } });

  const handleRemove = () => {
    setActiveSection(null); // Set active section to null when "Remove Section" is clicked in context menu
    console.log("remove");
  };

  const handleEdit = () => {
    setActiveSection(null); // Set active section to null when "Edit Section" is clicked in context menu
    console.log("edit");
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      position: { x: event.pageX, y: event.pageY },
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };

  return (
    <div className="app">
      <Menu setActiveSection={setActiveSection} />
      <div ref={sectionRef}>
        {activeSection === "Main" && <Section title="Main Section" content="This is the main section content." onContextMenu={handleContextMenu} />}
        {activeSection === "Cars" && <Section title="Cars Section" content="This is the cars section content." onContextMenu={handleContextMenu} />}
        {activeSection === "Bikes" && <Section title="Bikes Section" content="This is the bikes section content." onContextMenu={handleContextMenu} />}
        {activeSection === "Bicycles" && <Section title="Bicycles Section" content="This is the bicycles section content." onContextMenu={handleContextMenu} />}
        {activeSection === "About Us" && <Section title="About Us Section" content="This is the about us section content." onContextMenu={handleContextMenu} />}
      </div>
      {contextMenu.visible && <ContextMenu position={contextMenu.position} onRemove={handleRemove} onEdit={handleEdit} onClose={closeContextMenu} />}
    </div>
  );
};

export default MainPage;
