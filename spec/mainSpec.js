const assert = require('assert');

describe('DOM', () => {
	beforeEach(() => {
		document.body.insertAdjacentHTML('afterbegin', getBodyContent());
	});

	afterEach(function () {
		document.body.removeChild(document.getElementById('wrapper'));
	});

	it('should have a string type of card mark content element', () => {
		const cardMarkContent =
			document.querySelector('.card__mark').textContent;

		assert.equal(typeof cardMarkContent, 'string');
	});

	it("should have a title element that equals 'Join our community' word in first section element", () => {
		const sectionEls = document.querySelectorAll('section');
		const firstSectionEl = sectionEls[0];
		const cardTitleEl = firstSectionEl.querySelector('.card__title');
		const cardTitle = cardTitleEl.textContent.trim();

		assert.equal(cardTitle, 'Join our community');
	});

	it('should have three section elements', () => {
		const sectionEls = document.querySelectorAll('section');

		assert.equal(sectionEls.length, 3);
	});

	it("should have a word 'Coding exercises' as one of why us points", () => {
		const whyUsPointEls = document.querySelectorAll('.card__list li');

		const whyUsPoints = [];

		for (let i = 0; i < whyUsPointEls.length; i++) {
			const whyUsPoint = whyUsPointEls[i].textContent;
			whyUsPoints.push(whyUsPoint);
		}

		const isExpectedWordExist = whyUsPoints.includes('Coding exercises');

		assert.ok(isExpectedWordExist);
	});
});
