const {expect} = require('chai');
const movieTitle = 'harry potter & the philosophers stone'
//should pass since false is false
expect(false).to.be.false;

const titleCase = (title) => {
    return title.split(' ').map(w => `${w[0].toUpperCase()}${w.substring(1)}`).join(' ');
}

expect(titleCase(movieTitle)).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase(movieTitle)).to.be.equal('Harry Potter & The Philosophers Stone');
