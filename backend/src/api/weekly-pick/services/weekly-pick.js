'use strict';

/**
 * weekly-pick service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weekly-pick.weekly-pick');
