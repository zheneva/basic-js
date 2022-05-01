const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.split("~~").length;
  },
  addLink(value) {
    this.chain.length === 0 ? (this.chain = `( ${value} )`) : (this.chain += `~~( ${value} )`);
    return this
  },
  removeLink(position) {
    if (typeof(position) != 'number' || position > this.chain.split("~~").length || !Number.isInteger(position) || position < 1) {
      this.chain = ''
      throw new Error("You can't remove incorrect link!")
    }
    this.chain = this.chain.split("~~").filter((a,i) => i!=position-1).join('~~')
    return this
  },
  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");
    return this
  },
  finishChain() {
    let retChain = this.chain
    this.chain = ''
    return retChain;
  },
  chain: "",
};

module.exports = {
  chainMaker
};
