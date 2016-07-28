'use strict';

var showAllComments;

showAllComments = function () {
	var allHiddenComments = document.querySelectorAll('.visual-only.phui-icon-view.phui-font-fa.fa-comment:not(.phui-timeline-icon)'),
        i = 0,
        length = allComments.length;

    for (;i<length; i++) {
        allHiddenComments[i].click();
    }
};

showAllComments();
