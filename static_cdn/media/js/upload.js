// if (document.getElementById('addNewfile')) {
//     document.getElementById('addNewfile').onclick = function () {
//         let content = document.getElementsByClassName('file_wrapper')[document.getElementsByClassName('file_wrapper').length - 1].cloneNode(true);
//         document.getElementById('file').appendChild(content);
//         console.log(document.getElementsByClassName('file_wrapper')[document.getElementsByClassName('file_wrapper').length - 1].reset())
//         setDate();
//     }
//
//
//     document.getElementById('finalSubmit11').onclick = async function () {
//         let forms = document.getElementsByClassName('file_wrapper');
//         let data = $(forms).serialize();
//         // data = data + "&mobile=" + document.getElementById('mobile').value;
//         // data = data + "&email=" + document.getElementById('email').value;
//         // data = data + "&source=" + document.getElementById('source').value;
//         // data = data + "&airline_name=" + document.getElementById('airline_name').value;
//         data = data + "&image=" + document.getElementById('image').files[0];
//         const form = document.createElement('form');
//         data = data.split("&");
//         data.forEach((value) => {
//             let input = document.createElement('input');
//             input.setAttribute('type', 'hidden');
//             let split = value.split('=');
//             input.setAttribute('name', split[0].replace('%5B%5D', ''));
//             input.value = split[1];
//             form.appendChild(input);
//         });
//         let input = document.createElement('input');
//         input.setAttribute('type', 'hidden');
//         input.setAttribute('name', 'csrfmiddlewaretoken');
//         input.value = document.getElementsByName('csrfmiddlewaretoken')[0].value;
//         form.appendChild(input);
//         form.setAttribute('method', 'post', 'enctype','multipart/form-data');
//         form.setAttribute('style', 'display: none;');
//         // let code = document.myform['description'].value;
//         // let name1 = document.myform['image'].value;
//         // let name1 = document.myform['madrak'].value;
//         // if (code.length == 0 || code == "" || code.length < 10) {
//         //     alert("لطفا کد ملی را وارد کنید");
//         //     return;
//         // }
//         // if(name1.length == 0 || name1 == "" || name2.length == 0 || name2 == ""){
//         //     alert("لطفا نام خود را وارد کنید");
//         //     return;
//         // }
//         // if(family1.length == 0 || family1 == "" || family2.length == 0 || family2 == ""){
//         //     alert("لطفا نام خانوادگی خود را وارد کنید");
//         //     return;
//         // }
//         form.setAttribute('action', document.getElementById('finalSubmit1').attributes['data-url'].value);
//         document.getElementsByTagName('body')[0].appendChild(form);
//         console.log("sdfdsfsdfsdf")
//         console.log(form.submit())
//         form.submit()
//         // let result = await fetch('', {
//         //     method: 'POST',
//         //     data: data,
//         // });
//
//
//     }
// }





if (document.getElementById('addNewfile')) {
    document.getElementById('addNewfile').onclick = function () {

        $("#file").append(`<div class="file_wrapper">
                  <select aria-label="Default select example" class="form-select mx-2" name="madrak[]"  id="madrak">
                        <option selected>نوع مدرک</option>
                        <option value="کارت ملی">کارت ملی</option>
                        <option value="شناسنامه">شناسنامه</option>
                        <option value="پاسپورت">پاسپورت</option>
                        <option value="سایر مدارک">سایر مدارک</option>
                    </select>
                <div class="d-flex w-100 justify-content-between align-items-center">
                    <div class="input-group birth-date rounded-3 w-50 ms-2">
                    <input class="form-control" name="description[]" placeholder="توضیحات" type="text" id="description">
                   <div class="d-flex w-100 justify-content-between align-items-center">
                    <input class="form-control w-100" name="images[]" placeholder="مدرک" type="file">
                </div>
                </div>
                </div>`);
        setDate();
    }
    document.getElementById('finalSubmit1').onclick = async function () {
        let form = document.getElementById('file');
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'csrfmiddlewaretoken');
        input.value = document.getElementsByName('csrfmiddlewaretoken')[0].value;
        form.appendChild(input);
        new URLSearchParams(location.search).forEach((value, key) => {
            let input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.value = value;
            form.appendChild(input);
        })
        form.setAttribute('method', 'post');
        form.setAttribute('action', document.getElementById('finalSubmit1').attributes['data-url'].value);
        // let result = await fetch('', {
        //     method: 'POST',
        //     data: data,
        // });
        form.submit()
    }
}