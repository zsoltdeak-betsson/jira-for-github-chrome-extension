const ISSUE_REGEX = /[a-zA-Z]{1,9}[-|\s]\d{1,4}/g;
const ISSUE_REGEX_DESCRIPTION = /Ref[:]?[\s]?#[\s]?[a-zA-Z]{1,9}-\d{1,4}/g;

function replaceIssue(element, regex) {
	const match = element.html().match(regex);
	if (!match) return;
	const issueId = match[0].match(ISSUE_REGEX)[0].replace(" ", "-");
	const newIssueHtml = `<a href="https://edgealpha.corpsson.com/browse/${issueId}">${issueId}</a>`;
	const replaceHtml = match[0].replace(ISSUE_REGEX, newIssueHtml);
	const newElementHtml = element.html().replace(regex, replaceHtml);
	element.html(newElementHtml);
}

(function convertTitle() {
	const title = $('.js-issue-title');
	replaceIssue(title, ISSUE_REGEX);
})();

(function convertDescription() {
	const description = $('.js-comment-body').first();
	replaceIssue(description, ISSUE_REGEX_DESCRIPTION);
})();