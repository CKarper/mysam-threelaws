import React from 'react';
import ReactDOM from 'react-dom';

const template = (
  <div className="mysam-threelaws animated fadeIn">
    The Three Laws of Robotics are:
    <ol>
      <li>A robot may not injure a human being or, through inaction, allow a human being to come to harm.</li>
      <li>A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.</li>
      <li>A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.</li>
    </ol>
  </div>
);

export default function() {
  this.action('threelaws', (el, classification) => {
    ReactDOM.render(template, el);

    return function() {
      ReactDOM.unmountComponentAtNode(el);
    }
  });

  this.learn('threelaws', {
    description: 'Recite the three laws',
    form(classification = {}) {
      return <div><input type="submit" /></div>;
    }
  });

}
