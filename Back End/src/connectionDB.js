import {createPool} from 'mysql2/promise';

export const pool = createPool({
    database: 'prueba',
    user: 'updolz2obnun4loo3ef5',
    host: 'aws.connect.psdb.cloud',
    password: 'pscale_pw_xVRJe9tIU0wJ2IcNlvJRXflKYsJRrwWkt537AeMjfza',
    ssl:{
        rejectUnauthorized:false
    }
});
