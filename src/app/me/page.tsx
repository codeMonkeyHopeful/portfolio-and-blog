import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about codeMonkeyHopeful.',
};

const Me = ({}) => {
  // TODO Fill in
  return (
    <div>
      <h3>
        Topics
        <small className="text-muted">WIP</small>
      </h3>
      <ul className="list-group">
        <li className="list-group-item">first pc/tech</li>
        <li className="list-group-item">entry into coding</li>
        <li className="list-group-item">hobbies</li>
        <li className="list-group-item">school?</li>
        <li className="list-group-item">kiwi and vicky</li>
      </ul>
    </div>
  );
};

export default Me;
