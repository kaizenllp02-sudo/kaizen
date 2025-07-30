import React from 'react';
import '../../styles/Timeline.css';

const timelineData = [
  {
    date: 'March 12, 2016',
    title: 'Event Title',
    content: `Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.`
  },
  {
    date: 'March 23, 2016',
    title: 'Event Title',
    content: `Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.`
  },
  {
    date: 'April 02, 2016',
    title: 'Event Title',
    content: `Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.`
  },
  {
    date: 'April 28, 2016',
    title: 'Event Title',
    content: `Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.`
  }
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-header">
        {/* <h2 className="timeline-main-title">Timeline</h2> */}
      </div>
      <div className="timeline-outer">
        <ul className="timeline timeline-split">
          {timelineData.map((item, idx) => (
            <li className="timeline-item" key={idx}>
              <div className="timeline-info">
                <span>{item.date}</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
