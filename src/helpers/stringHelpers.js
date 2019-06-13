
const cutDomain = (email) => {
  return email.substring(0, email.indexOf('@'));
}

const courseId = (string) => {
  return string.substr(-1);
}

module.exports = { cutDomain, courseId };
