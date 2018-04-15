window.onload = function() {

  console.log('github plugin v5');

  const originalAnswers: Element[] = [];
  const extendedAnswers: ExtendedAnswer[] = [];

  var wrapper = document.getElementsByClassName('js-discussion')[0];
  var posts = wrapper.getElementsByClassName('js-timeline-item');
  for (var i = 0; i < posts.length; i++) {
    const answer = posts.item(i);
    originalAnswers.push(answer);
    var total = 0;
    var reactions = posts[i].getElementsByClassName('reaction-summary-item');
    for (var j = 0; j < reactions.length; j++) {
      var reaction = reactions[j];
      var isNegativeVote = reaction.firstElementChild.getAttribute('alias') === '-1';
      var count = parseInt(reaction.childNodes.item(2).textContent.trim());
      if (count > 0) { // guard against NaN
        if (isNegativeVote) {
          total = total - count;
        } else {
          total = total + count;
        }
      }
    }
    extendedAnswers.push({
      answer: answer,
      voteCount: total
    });

  }
  const reorderedAnswers: ExtendedAnswer[] = extendedAnswers.sort((a, b) =>  b.voteCount - a.voteCount);

  reorderedAnswers.forEach(answer => {
    wrapper.appendChild(answer.answer);
  });

};

interface ExtendedAnswer {
  answer: Element;
  voteCount: number;
}
