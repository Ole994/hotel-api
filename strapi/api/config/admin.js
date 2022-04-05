module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '457f2e5c71e11d7712ab45b423aa0ff1'),
  },
});
