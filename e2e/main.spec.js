const {expect} = require('chai')

const awb = require('awb')

const {client, $, $$} = awb()

describe('BASE e2e test', () => {
  const baseURL = 'http://localhost:8082'
  //selectors
  //elements
  const liEls = $$('li')

  before(async () => {
    await client.startDriver()
    await client.goTo(baseURL)
  })
  after(async () => {
    await client.close()
    await client.stopDriver()
  })
  it('base it', async () => {
    expect(await liEls.count()).to.eql(9)
  })
})