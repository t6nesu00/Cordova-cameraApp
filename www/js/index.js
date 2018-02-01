/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var pictureSource;   // picture source
 var destinationType; // sets the format of returned value

 // wait for cordovva to connect with device
document.addEventListener('deviceready',onDevice,false);

function onDevice(){
document.getElementById('btn1').addEventListener('click',takePicture);
function takePicture(){
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL });

function onSuccess(imageURI) {
    var image = document.getElementById('img1');
    image.src = "data:image/jpeg;base64," + imageData;
}



function onFail(message) {
    alert('Failed because: ' + message);
}

}
 function getPhoto(source){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
    var image = document.getElementById('img2');
    image.src = imageURI;
    }

      function onFail(message) {
     alert('Failed because: ' + message);
           }
 }

}