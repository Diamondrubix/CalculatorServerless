let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

    var responseBody = {
        "key2": "jarg",
        "test": event.body,
        "key1": "value1",
        "longest": "surpise"
    };

    var response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
        },
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };

	console.log("Received request with payload", event);
	let operation = event.Operation;
	let result = null;
	switch(operation) {
		case "Add":
			result = event.LeftParameter + event.RightParameter;
			break;
		case "Subtract":
			result = event.LeftParameter - event.RightParameter;
			break;
		case "Multiply":
			result = event.LeftParameter + event.RightParameter;
			break;
		case "Devide":
			result = event.LeftParameter / event.RightParameter;
			break;
		case "Mod":
			result = event.LeftParameter % event.RightParameter;
			break;
		default:
			result = "Operation Not Permitted";
			break;
	}
	event.Result = result;
	callback(null, event);
}