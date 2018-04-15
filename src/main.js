window.onload = function () {
    var answersWrapper = document.getElementById('answers');
    var answers = document.getElementsByClassName('answer');
    var originalAnswers = [];
    var extendedAnswers = [];
    for (var i = 0; i < answers.length; i++) {
        var answer = answers.item(i);
        var voteCountHtml = answer.getElementsByClassName('vote-count-post');
        var voteCount = parseInt(voteCountHtml.item(0).innerHTML);
        extendedAnswers.push({
            answer: answer,
            voteCount: voteCount
        });
    }
    var reorderedAnswers = extendedAnswers.sort(function (a, b) { return b.voteCount - a.voteCount; });
    var newAnswersWrapper = document.createElement("DIV");
    newAnswersWrapper.setAttribute('id', 'answers');
    reorderedAnswers.forEach(function (answer) {
        newAnswersWrapper.appendChild(answer.answer);
    });
    answersWrapper.parentNode.replaceChild(newAnswersWrapper, answersWrapper);
};
