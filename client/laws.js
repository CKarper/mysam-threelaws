const laws = `
<div class="threelaws">
  The Three Laws of Robotics are:
  <ol>
    <li>A robot may not injure a human being or, through inaction, allow a human being to come to harm.</li>
    <li>A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.</li>
    <li>A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.</li>
  </ol>
</div>
`;

module.exports = function(sam) {
  // sam is the client side application instance
  // which you can register new actions like this:
  sam.action('myplugin', function(element, classification) {
    // element is the jQuery wrapped main element
    // classification is an object with information about the
    // text that triggered this action
    var heading = document.createElement('h1');
    heading.className = 'myplugin';
    heading.innerHTML = 'Hello from my plugin: ' + classification.action.ping;

    element.html(heading);
  });

  // and learners (which will also show up in the help) like this
  sam.learn({
    description: 'Call myplugin',
    tags: ['name'],
    form: function(el, save) {
      el.html('<input type="text" class="param" />')
        .on('submit', function(save) {
          save({
            type: 'myplugin',
            ping: el.find('.param').val()
          });
        });
    }
  });
};
