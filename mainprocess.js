function login() {
	console.log("login func");
	var url = "http://apii.xn--kinqt-isa.vn:3069/api/login";
	var data = {
		'username': document.getElementById("username").value,
		'password': document.getElementById("passwd").value
	};
	console.log(data);
    var json = JSON.stringify(data);
        console.log(url)
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("X-My-Custom-Header", "Daivuongsaitadituannui");
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function() {
            var resp = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.log(resp);
                if (resp.status==0) {
                } else {
                    document.getElementById("notify").innerHTML = "Thông tin đăng nhập không chính xác!!!";
                }
            } else {
                document.getElementById("notify").innerHTML = "Đăng nhập thất bại!!!";
            }
        }
        xhr.send(json);
}