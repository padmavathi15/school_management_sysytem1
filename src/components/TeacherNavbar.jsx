import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
 import '../css/Navbar.css';

const TeacherNavbar = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State to store search input
  const [filteredItems, setFilteredItems] = useState([]); // State to store filtered results
  const navigate = useNavigate();

  const items = [
    { id: '1', name: 'Classroom Overview' },
    { id: '2', name: 'Assignment Tracker' },
    { id: '3', name: 'Student Performance Overview' },
    { id: '4', name: 'Communication Panel' },
    { id: '5', name: 'Syllabus' },
    { id: '6', name: 'Leave' },
    { id: '7', name: 'Monthly Report' },
    { id: '8', name: 'Quarterly Report' },
    { id: '9', name: 'Final Exam Report' },
  ]; // Example list of items to be searched

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  const handleLogout = () => {
    navigate('/'); // Redirect to home page
  };

  // Search handler
  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update the search query
    // Filter items based on the search query
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredItems(filtered); // Update the filtered items
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark custom-navbar">
      <div className="container-fluid">
        {/* Left side: Logo and School Name */}
        <a className="navbar-brand text-white" href="#">
          <img src="/images/school_logo1.jpg" alt="Logo" width="50" height="50" className="d-inline-block align-middle" />
          <span className="ms-2 text-light">ABC International Public School</span>
        </a>

        {/* Right side: Search Bar, Notification, Teacher Info, Logout */}
        <div className="d-flex ms-auto align-items-center">
          {/* Search Bar */}
          <input
            className="form-control me-2 w-50 custom-search-bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearch} // Handle search input change
          />
          <button className="btn btn-outline-light">Search</button>

          <a className="nav-link ml-10 me-3" href="#" role="button">
            <FaBell style={{ color: 'white', width: '30px', height: '30px' }} /> {/* Notification icon */}
          </a>

          {/* Teacher info container */}
          <div className="d-flex align-items-center position-relative">
            {/* Teacher image */}
            <img
              src="/images/Pp.jpg"
              alt="Teacher"
              width="50"
              height="50"
              className="rounded-circle"
              onMouseEnter={handleMouseEnter} // Show info when mouse enters
              onMouseLeave={handleMouseLeave} // Hide info when mouse leaves
            />

            {/* Teacher info */}
            <div className={`teacher-info ${showInfo ? 'show-info' : ''}`}>
              {showInfo && (
                <div className="teacher-text">
                  <span className="teacher-id">ID: 12345</span>
                  <span className="teacher-name">Teacher Name</span>
                </div>
              )}
            </div>
          </div>

          {/* Logout button */}
          <button className="btn custom-btn" onClick={handleLogout} type="button">
            Logout
          </button>
        </div>
      </div>

      {/* Display filtered items */}
      {searchQuery && (
        <div className="search-results">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item.id} className="search-item">
                {item.name}
              </div>
            ))
          ) : (
            <div className="search-item">No results found</div>
          )}
        </div>
      )}
    </nav>
  );
};

export default TeacherNavbar;
