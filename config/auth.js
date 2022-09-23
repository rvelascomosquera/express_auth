module.exports = {
  secret: process.env.AUTH_SECRET, 
  expires: process.env.AUTH_EXPIRES || "1H",
  rounds: process.env.AUTH_ROUNDS || 10,
}