import Page from './page-model';

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `https://devexpress.github.io/testcafe/example/`;

// Page model
const page = new Page();

// Tests
test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter') // Type name
        .typeText(page.nameInput, 'Paker', { replace: true }) // Replace with last name
        .typeText(page.nameInput, 'r', { caretPos: 2 }) // Correct last name
        .expect(page.nameInput.value).eql('Parker'); // Check result
});

test('Maximize the browser window', async t => {
  await t.maximizeWindow();
});


test('resize the browser window', async t => {
  await t.resizeWindow(640, 1080);
});
