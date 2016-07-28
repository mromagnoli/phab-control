'use strict';

var hideAllComments;

hideAllComments = function () {
	var allComments = document.querySelectorAll('.differential-inline-comment .fa-times'),
        i = 0,
        length = allComments.length;

    for (;i<length; i++) {
        allComments[i].click();
    }
};

hideAllComments();
