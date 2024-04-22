function processInputs() {
    var inputs = document.querySelectorAll('.inputField'); // 获取所有输入框

    var inputData = {}; // 存储不同类型的输入数据

    inputs.forEach(function(input) {
        var dataType = input.dataset.type; // 获取输入框的类型
        var value = input.value; // 获取输入框的值

        inputData[dataType] = value; // 将值存储在以类型为键的对象中
    });

    // 在这里处理 inputData 对象中的数据
    console.log("商品Price：" + inputData['ProductPrice']);
    console.log("商品Color：" + inputData['ProductColor']);
    console.log("商品Title：" + inputData['ProductTitle']);
    console.log("商品Introduction：" + inputData['ProductIntroduction']);
    console.log("商品Type：" + inputData['ProductType']);
    console.log("商品Inventory：" + inputData['ProductInventory']);
    console.log("商品Size：" + inputData['ProductSize']);
    console.log("商品Function：" + inputData['ProductFunction']);
    console.log("商品Material：" + inputData['ProductMaterial']);
    // 或者你可以将输入信息显示在页面上的某个位置
    // document.getElementById('outputArea').innerText = inputData.join(', ');
    // 或者将输入信息发送到服务器等等





    var myHeaders = new Headers();

    const token = localStorage.getItem("token");
      myHeaders.append("token", token);
      myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "title": inputData['ProductTitle'],
        "description": inputData['ProductIntroduction'],
        "categoryId": 1,
        "price": inputData['ProductPrice'],
        "stock": 100
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://localhost:8081/item?images=url1,url2", requestOptions)
    .then(response => {
        if (response.ok) {
            alert("ADD SUCCESS"); // 如果请求成功，打印成功消息
        } else {
            alert("ADD FAIL"); // 如果请求失败，打印失败消息
        }
        return response.text(); // 返回响应文本
    })
    .then(result => console.log(result)) // 打印响应内容
    .catch(error => console.log('error', error)); // 打印错误信息


}



// 获取按钮元素和文件上传输入
var buttonAddImage = document.getElementById('ButtonAddImage');
var fileInput = document.getElementById('fileInput');
var uploadedImage = document.getElementById('uploadedImage');

// 添加点击事件监听器
buttonAddImage.addEventListener('click', function() {
    // 触发隐藏文件上传输入的点击事件
    fileInput.click();
});

// 添加文件上传输入的change事件监听器
fileInput.addEventListener('change', function() {
    // 处理文件上传的逻辑
    var file = fileInput.files[0];
    if (file) {
        // 读取文件数据并设置图片源
        var reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block'; // 显示上传的图片
            buttonAddImage.style.display = 'none'; // 隐藏上传按钮
            resizeImage(uploadedImage, 100); // 调用resizeImage函数将图片大小调整为200px
        };
        reader.readAsDataURL(file);
    }
});

// 添加点击图片覆盖的功能
uploadedImage.addEventListener('click', function() {
    fileInput.click();
});

// 函数用于调整图片大小
function resizeImage(img, maxHeight) {
    var ratio = maxHeight / img.height;
    var newWidth = img.width * ratio;
    if (newWidth > maxHeight) {
        newWidth = maxHeight;
        ratio = newWidth / img.width;
    }
    img.style.width = newWidth + "px";
    img.style.height = (img.height * ratio) + "px";
}



function redirectToOtherPageMANAGEMENT() {
    
    var targetURL = "http://localhost:5173/home";
    
  
    window.location.href = targetURL;
}




function redirectToOtherPageRETURN() {
 
    var targetURL = "https://www.baidu.com/";
    
    
    window.location.href = targetURL;
}
