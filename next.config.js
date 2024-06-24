const { i18n } = require("./next-i18next.config");

module.exports = () => {
  try {
    return {
      i18n,
    };
  } catch (error) {
    console.error("Error loading next-i18next configuration:", error);
    throw error;
  }
};
