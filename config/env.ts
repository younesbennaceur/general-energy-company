import 'dotenv/config'

import env from 'env-var'

const envVars = {
  EMAIL_USER: env.get('EMAIL_USER')
    .default('younesbennaceur2004@gmail.com')
    .asString(),
  EMAIL_PASS: env.get('EMAIL_PASS')
    .default('wzym secz bwlr mnoi')
    .asString(),
  EMAIL_HOST: env.get('EMAIL_HOST')
    .default('smtp.gmail.com')
    .asString(),
  EMAIL_PORT: env.get('EMAIL_PORT')
    .default('587')
    .asPortNumber(),
  EMAIL_TO: env.get('EMAIL_TO')
    .default('younesbennaceur2004@gmail.com')
    .asString(),
}

export { envVars as env }