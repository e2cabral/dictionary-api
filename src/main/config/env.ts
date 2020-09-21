import dbConfig from '../../../db-config';

export default {
    mongoUri: process.env.MONGO_URL || `mongodb+srv://${ dbConfig.user }:${ dbConfig.password }@${ dbConfig.cluster }/${ dbConfig.collection }`,
    port: process.env.PORT || 3330,
    jwtSecret: process.env.JWT_SECRET || 'secret-but-not-so-secret'
}