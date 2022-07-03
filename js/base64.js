function download_archive(){
    var decode;
    var archive = document.createElement("a");
    var base64 = document.getElementById("textarea").value;
    var type = document.getElementById("menu").value;
          
    if(base64.length > 0){
        if(type == "doc" || type == "docx"){
            decode = "data:application/msword;base64," + base64; 
        }else if(type == "pdf"){
            decode = "data:application/pdf;base64," + base64; 
        }else{
            decode = "data:image/" + type + ";base64," + base64; 
        }
        decode_base64();
        archive.href = decode;
        archive.download = "arquivo." + type;
        archive.click();
    }  
}

function decode_base64(){
    var decode;
    var archive = document.querySelector("#archive");
    var base64 = document.getElementById("textarea").value;
    var type = document.getElementById("menu").value;
         
    if(base64.length > 0){
        if(type == "doc" || type == "docx"){
            decode = "images/eye_slash.png"; 
            archive.setAttribute('style', "");
        }else if(type == "pdf"){
            decode = "data:application/pdf;base64," + base64;
            archive.setAttribute('style', "height:800px");
        }else{
            decode = "data:image/" + type + ";base64," + base64;
            archive.setAttribute('style', "");
        }
        archive.setAttribute('src', decode);
    }
}
