'use strict';

const { Controller } = require('egg');


class HomeController extends Controller {
  async index () {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async login () {
    const { ctx } = this;
    ctx.body = 'ban2ana';
  }
  async getUrl () {

  }
}

module.exports = HomeController;
