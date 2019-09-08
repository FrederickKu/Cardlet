function previewPhoto(){
    if (this.files && this.files.length === 1){
        var file = this.files[0]
        var fileName = file.name
        var ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
        if (ext == "png" || ext == "jpeg" || ext == "jpg") {
            //Perform Ajax
            document.getElementById("card-preview-text").style.display='initial';

            var reader = new FileReader();

            reader.onload = function(e) {
                console.log('hello');
                let previewContainer = document.getElementById("card-preview");
                document.getElementById("card-preview-text").style.display='none';

                previewContainer.style.backgroundImage= `url(${e.target.result})`;

                let uploadForm = document.getElementById('upload-form');

                if (uploadForm.children.length <=1){
                    let button = document.createElement('button');
                    button.innerText = "Upload Business Card";
                    button.className = "btn upload-btn";
                    button.type='submit';
                    uploadForm.appendChild(button);
                }
            }

            reader.readAsDataURL(file);

        } else {
            document.getElementById("card-preview-text").innerText="-- Error in file: File must be in .jpeg, .jpg or .png --";
        }

    } else {
        document.getElementById("card-preview-text").innerText="-- Error in file: No File Uploaded --";
    }
}

document.getElementById('card-photo').onchange = previewPhoto;


// function submitPhoto(){
//     var formData = new FormData();

//     console.log(this.files)

//     if (this.files && this.files.length === 1){
//         var file = this.files[0]
//         var fileName = file.name
//         var ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
//         if (ext == "png" || ext == "jpeg" || ext == "jpg") {
//             //Perform Ajax
//             document.getElementById("card-preview-text").style.display='initial';
//             document.getElementById("card-preview-text").innerText="-- Loading Card --";

//             formData.set("file", file , fileName);

//             var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance

//             xmlhttp.addEventListener("load", function(){
//                 let previewContainer = document.getElementById("card-preview");
//                 document.getElementById("card-preview-text").style.display='none';

//                 previewContainer.style.backgroundImage= `url(${this.responseText})`;
//                 previewContainer.style.backgroundSize = 'cover';

//                 let uploadForm = document.getElementById('upload-form');

//                 if (uploadForm.children.length <=1){
//                     let button = document.createElement('button');
//                     button.innerText = "Upload Business Card";
//                     button.className = "btn upload-btn";
//                     uploadForm.appendChild(button);
//                 }
//             });

//             xmlhttp.open("POST", '/uploadCloudinary');
//             xmlhttp.send(formData);

//         } else {
//             document.getElementById("card-preview-text").innerText="-- Error in file 1 --";
//         }

//     } else {
//         document.getElementById("card-preview-text").innerText="-- Error in file 2 --";
//     }
// }