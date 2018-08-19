let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.delete({
		TableName: 'music',
		Key: { 'artist': 'adam', 'songTitle': 'bestSongEver' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});

	/*
	ddb.put({
		TableName: 'music',
		Item: { 'artist': 'adam', 'songTitle': 'bestSongEver' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});
	*/

	callback(null, 'Successfully executed');
}