describe ('GET API user test', () =>{

    it ('get users', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization' : 'Bearer 8fad74f536f75c0e8708bb5245c8e9d6be0ac363ed095ce1074242f066a73b72'
            }

        })
    } )
})