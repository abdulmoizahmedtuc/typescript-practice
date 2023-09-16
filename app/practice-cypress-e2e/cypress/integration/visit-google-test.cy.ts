
describe('Drag and drop / select by dragging', () => {

it('visit google', () => {
cy.visit('https://automationintesting.online/');
cy.get('.openBooking').scrollIntoView().click();
cy.wait(1000);

// cy.get('.rbc-month-row').eq(0).find('.rbc-day-bg').eq(3)
//   .trigger('mousedown', { button: 0, force: true })
//   .trigger('mousemove', { clientX: 200, clientY: -200, force: true })
//   .wait(1000)
//   .window().then(win => {
//     const event = new win.MouseEvent('mousemove', { clientX: 400, clientY: -200 });
//     win.dispatchEvent(event);
//   })
//   .get('.rbc-month-row').eq(3).find('.rbc-day-bg').eq(3)
//   .click()
//   .trigger('mouseup', { force: true });

// cy.get('.rbc-month-row').eq(0).find('.rbc-day-bg').eq(3)
//   .trigger('mousedown', { button: 0, force: true })
//   .trigger('mousemove', 200, -200, { force: true })
//   .wait(500)
//   .get('.rbc-month-row').eq(3).find('.rbc-day-bg').eq(3)
//   .trigger('mousedown', { button: 0, force: true })
//   .trigger('mouseup', { button: 0, force: true })
//   .click({ force: true });

// cy.get('.rbc-month-row').eq(0).find('.rbc-day-bg').eq(3)
// .trigger("mousedown", { button: 0,   force: true })
//   .wait(500)
//   .get('.rbc-month-row').eq(2).find('.rbc-day-bg').eq(3)
//   .trigger('mousemove', { clientX: 400, clientY: -400, force: true })
//   .wait(500)
//   .get('.rbc-month-row').eq(2).find('.rbc-day-bg').eq(3).wait(500)
//   .click({ force: true }).trigger('mouseup', {force: true });

// cy.get('.rbc-month-row').eq(0).find('.rbc-day-bg').eq(3)
//   .trigger('mousedown', { button: 0, force: true })
//   .trigger('mousemove', 200, -200, { force: true })
//   .wait(500)
//   .get('.rbc-month-row').eq(3).find('.rbc-day-bg').eq(3)
//   .trigger('mousemove', { clientX: 400, clientY: -400, force: true })
//   .trigger('mouseup', { button: 0, force: true })
//   .click({ force: true });

// cy.get('.rbc-month-row').eq(0).find('.rbc-day-bg').eq(3)
//   .trigger('mousedown', { button: 0, force: true })
//   .trigger('mousemove', 200, -200, { force: true })
//   .wait(1000)
//   .trigger('mousemove', { clientX: 400, clientY: -400, force: true })
//   .get('.rbc-month-row').eq(3).find('.rbc-day-bg').eq(3)
//   .trigger('mousemove', { clientX: 400, clientY: -400, force: true })
//   .trigger('mouseup', { button: 0, force: true })
//   .click({ force: true });

// cy.get('.rbc-month-view')  // select the calendar element
//   .find('.rbc-day-bg')     // select the day elements
//   .eq(2)                   // select the starting day (e.g. the third day)
//   .trigger('mousedown', { button: 0 }) // simulate holding down the left mouse button
//   .trigger('mousemove', 'bottom') // move the mouse to the end day (e.g. bottom-right of the current cell)
//   .trigger('mouseup', { force: true }) // release the left mouse button
//   .get('.rbc-selected');    // select the element(s) that have been selecte; // verify that the expected number of days have been selected


// cy.get('.rbc-button-link').contains('01') // select the element that contains the items to be selected
//   .trigger('mousedown', { button: 0, force: true }) // simulate holding down the left mouse button
//   .trigger('mousemove', 200, -200, { force: true });
//   cy.get('.rbc-button-link').contains('15').click().trigger('mouseup', { force: true }); // move the mouse to the desired location to select items

//   cy.get('.rbc-month-row').eq(0).find('.rbc-day-bg').eq(3) // select the element that contains the items to be selected
//   .trigger('mousedown', { button: 0, force: true }) // simulate holding down the left mouse button
//   .trigger('mousemove', { clientX: 100, clientY: 200, force : true }) // move the mouse to the desired location to select items
//   .trigger('mouseup', { force: true }) // release the mouse button

});
});