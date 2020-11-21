// must restart server whenever you make changes in next.config
module.exports = {
  distDir: 'build',
  
  env: {
    MONGO_SRV: "mongodb+srv://phigeh:JuSf0bwS2UybQ7gT@cluster0.kthn1.mongodb.net/restAPIdb?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
},
}
