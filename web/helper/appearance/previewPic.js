export let previewPic = (select, preview) => {
    if(document.getElementById(`${select}`).files.length>0){
        var element = document.getElementById(`${preview}`);
        var preview = element.querySelector('img')
        var file    = document.getElementById(`${select}`).files[0];
        var reader  = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
}

export let putImage = (preview, picLoad, notpic) => {
    var element = document.getElementById(`${preview}`);
    var preview = element.querySelector('img')
    let pic = notpic
    if(picLoad!=null)
    pic = picLoad
    preview.src = pic;
}

export let putDoc = (preview_old, preview_new, nameDoc) => {
    var element1 = document.getElementById(`${preview_old}`);
    var element2 = document.getElementById(`${preview_new}`);
    if(nameDoc!=null){
        element1.style.display = 'none'
        element2.style.display = 'block'
        let name = nameDoc.split('/')
        name = name[(name.length-1)]
        element2.querySelector('div').innerHTML = name
    }
}

export let previewDoc = (select, preview_old, preview_new) => {
    if(document.getElementById(`${select}`).files.length>0){
        var element1 = document.getElementById(`${preview_old}`);
        var element2 = document.getElementById(`${preview_new}`);
        element1.style.display = 'none'
        element2.style.display = 'block'
        element2.querySelector('div').innerHTML = document.getElementById(`${select}`).files[0].name
    }
}

export let prevVideo = (select, preview) => {
    var element = document.querySelector(`#${preview}`);
    let video = document.getElementById(`${select}`).files[0];
    console.log(video)
    element.innerHTML = (`<video id="video-element" controls>
        <source type="video/mp4" src="${URL.createObjectURL(video)}">
    </video>`)
}