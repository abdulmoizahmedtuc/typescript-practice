
export function setLocalStorage(){
    window.localStorage.setItem('ApiKey', Cypress.env('ApiKey'));
    window.localStorage.setItem('ServerUrl', Cypress.env('ServerUrl'));
    window.localStorage.setItem('last-domain', Cypress.env('last-domain'));
}