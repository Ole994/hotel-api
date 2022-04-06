module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '09ca892acde2668daacadc71c042c334'),
  },
});
