// 搜索函数
function search1()
{
    const keyword = encodeURI(document.getElementById("keyword").value);
    for(let i=0; i<document.getElementsByTagName("A").length; i++){
        if(document.getElementsByTagName("A")[i].innerHTML==="Google"){
            document.getElementsByTagName("A")[i].href="https://www.google.com/search?client=firefox-b-d&q="+keyword;
        }
        else{
            document.getElementsByTagName("A")[i].href="https://www.baidu.com/s?ie=utf-8&wd="+keyword;
        }
    }
}

window.onload = function(){
    if(document.readyState==="complete")
    {
        document.getElementById("keyword").focus(); // 激活的文本框
    }
}

const log = document.getElementById('keyword');
document.addEventListener('keypress', logKey);
function logKey(event) {
    let keyword = encodeURI(document.getElementById("keyword").value);
    if (event['key'] === 'Enter'){
        window.location.href = "https://www.baidu.com/s?ie=utf-8&wd="+keyword;
    }
    if (event['key'] === "\\") {
        keyword = keyword.substr(0, keyword.length - 1 )
        window.location.href = "https://www.google.com/search?client=firefox-b-d&q="+keyword;
    }
}