(function() {

  QUnit.test( "Tests", function( assert ) {
    var wrapper = document.getElementById('discussion_bucket');
    var posts = wrapper.querySelectorAll('[id^="issuecomment-"]');
    var total = 0;
    for (var i = 0; i < posts.length; i++) {
      var reactions = posts[i].querySelectorAll('.reaction-summary-item');
      for (var j = 0; j < reactions.length; j++) {
        var count = parseInt(reactions[j].childNodes.item(2).textContent);
        total = total + count;
      }
    }
    assert.equal(total, 8);



  });

})();
