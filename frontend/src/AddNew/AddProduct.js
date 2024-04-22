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
      myHeaders.append("token", "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoxLCJpZCI6MSwidXNlcm5hbWUiOiJtaXpvcmUiLCJleHAiOjE3MjE2NjcyMjF9.i-BwwKlGD6Efo1FsoK7PPQOmiV2cdNoilwcQU-fCFIc");
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







function redirectToOtherPageMANAGEMENT() {
    // 设置目标页面的URL
    var targetURL = "http://localhost:8081/login/";
    
    // 使用window.location.href实现跳转
    window.location.href = targetURL;
}




function redirectToOtherPageRETURN() {
    // // 设置目标页面的URL
    // var targetURL = "https://www.baidu.com/";
    
    // // 使用window.location.href实现跳转
    // window.location.href = targetURL;
}
