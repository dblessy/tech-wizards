
const mysql=require('mysql');
let pool=mysql.createPool({
    host:PROCESS_ENV_DBNAME,
    user:PROCESS_ENV_USER,
    password:PROCESS_ENV_PASSWORD,
    port:3306,
    database: "app"
});
exports.handler=function(event,context,callback) {
    context.callbackWaitsForEmptyEventLoop=false;
    console.log("Incoming Event: ", event);
    const bucket = event.Records[0].s3.bucket.name;
    const filename = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const size=event.Records[0].s3.object.size;
    const message = `File is uploaded in - ${bucket} -> ${filename} -> ${size}`;
    console.log(message);
    pool.getConnection(function (err, connection) {
        const sql = 'INSERT INTO filedata (bucketname,filename,filesize) VALUES (?,?,?)';
        connection.query(sql, [bucket,filename,size], function (err, result) {
            connection.release();
            if (err) {
                callback(err);

            } else {
                console.log("1 record inserted");
                callback(null);
            }
        });
        if(err){
            console.log("connection error");
        }
        else{
            console.log("connection successful");
        }
    });
};
