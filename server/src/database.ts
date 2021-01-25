import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {

        console.log('buscando banco de dados');
        pool.releaseConnection(connection);
        console.log('DB está Conectado!!!');
    });

export default pool;