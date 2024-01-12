import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <ul id="mainmenu">
      <li>
        <Link to="/">Home</Link>
        <ul>
          <li>
            <Link to="/new-homepage-7">
              <b>New</b> Homepage 7
            </Link>
          </li>
          <li>
            <Link to="/new-onepage">
              <b>New</b> Onepage
            </Link>
          </li>
          <li>
            <Link to="/homepage-1">Homepage 1</Link>
          </li>
          <li>
            <Link to="/homepage-2">Homepage 2</Link>
          </li>
          <li>
            <Link to="/homepage-3">Homepage 3</Link>
          </li>
          <li>
            <Link to="/homepage-4">Homepage 4</Link>
          </li>
          <li>
            <Link to="/homepage-5">Homepage 5</Link>
          </li>
          <li>
            <Link to="/homepage-6">Homepage 6</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/about">About</Link>
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/the-team">The Team</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/practice-areas">Practice Areas</Link>
        <ul>
          <li>
            <Link to="/new-practice-areas-4">
              <b>New</b> Practice Areas 4
            </Link>
          </li>
          <li>
            <Link to="/practice-areas-1">Practice Areas 1</Link>
          </li>
          <li>
            <Link to="/practice-areas-2">Practice Areas 2</Link>
          </li>
          <li>
            <Link to="/practice-areas-3">Practice Areas 3</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
        <ul>
          <li>
            <Link to="/news-list">News List</Link>
          </li>
          <li>
            <Link to="/news-single">News Single</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="#">Elements</Link>
        <ul>
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts</Link>
          </li>
          <li>
            <Link to="/counters">Counters</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/icon-set-1">Icon Set 1</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
          <li>
            <Link to="/progress-bar">Progress Bar</Link>
          </li>
          <li>
            <Link to="/tabs">Tabs</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default MainMenu;
