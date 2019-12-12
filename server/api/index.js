const publicAPI = require('./public');
const studentAPI = require('./student');
const tutorAPI = require('./tutor');

function api(server) {
  server.use('/api/v1/public', publicAPI);
  server.use('/api/v1/student', studentAPI);
  server.use('/api/v1/tutor', tutorAPI);
}

module.exports = api;