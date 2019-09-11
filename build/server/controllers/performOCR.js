var ocrsdkModule = require('./ocrsdk.js');
var serviceUrl = 'https://cloud.ocrsdk.com';
var appId = 'cardwallet';
var password = 'b+xfYUCyY8h7Xz6N8ch+dPGl';

module.exports.performOCR = function (imagePath, returnFunction) {
        console.log("ABBYY Cloud OCR SDKfor Node.js");

        var ocrsdk = ocrsdkModule.create(appId, password, serviceUrl);

        var settings = new ocrsdkModule.ProcessingSettings();
        // Set your own recognition language and output format here
        settings.language = "English"; // Can be comma-separated list, e.g. "German,French".
        settings.exportFormat = "xml"; // All possible values are listed in 'exportFormat' parameter description
                                        // at https://ocrsdk.com/documentation/apireference/processImage/
            function downloadCompleted(error, results) {
                if (error) {
                    console.log("Error1: " + error.message);
                    return;
                }
                console.log("Done.");
                returnFunction(results);
            }

            function processingCompleted(error, taskData) {
                if (error) {
                    console.log("Error2: " + error.message);
                    return;
                }

                if (taskData.status != 'Completed') {
                    console.log("Error processing the task.");
                    if (taskData.error) {
                        console.log("Message: " + taskData.error);
                    }
                    return;
                }

                console.log("Processing completed.");
                console.log("Downloading results");

                ocrsdk.downloadResult(taskData.resultUrl.toString(), downloadCompleted);
            }

            function uploadCompleted(error, taskData) {
                if (error) {
                    console.log("Error3: " + error.message);
                    return;
                }

                console.log("Upload completed.");
                console.log("Task id = " + taskData.id + ", status is " + taskData.status);
                if (!ocrsdk.isTaskActive(taskData)) {
                    console.log("Unexpected task status " + taskData.status);
                    return;
                }

                ocrsdk.waitForCompletion(taskData.id, processingCompleted);
            }

            console.log("Uploading image..");
            ocrsdk.processImage(imagePath, settings, uploadCompleted);
        }