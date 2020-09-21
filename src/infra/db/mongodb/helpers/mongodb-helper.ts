import mongoose, { Connection } from 'mongoose';

import env from '../../../../main/config/env';

export class MongoDB {

    private static db: Connection = mongoose.connection;

    public static async connect(): Promise<void> {
        try {
            await mongoose.connect(env.mongoUri, { useUnifiedTopology: true, useNewUrlParser: true });
            mongoose.Promise = global.Promise;
            this.db.once('open', () => console.log.bind(console, 'MongoDB is running.'));
        } catch (error) {
            this.db.on('error', console.error.bind(console, `MongoDB connection error: ${error}`));
        }
    }
}