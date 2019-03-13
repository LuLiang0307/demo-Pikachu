!function(){
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(()=>{
            n+=1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if(n >= code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },10)
    }
    let code = `
/*
*首先，需要皮卡丘的皮
*/
.preview{
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;;
}
.wrapper{
    width: 100%;
    height: 165px;
    position: relative;
}
/*
*接下来，画皮卡丘的鼻子
*/
.nose{
    border: 11px solid transparent;
    border-radius: 11px;
    border-top-color: black;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -11px;
}
/*
*接下来，是它的眼睛
*/
.eye{
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}
.eye::before{
    content: '';
    display: block;
    height: 24px;
    width: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid white;
}
.eye.left{
    right: 50%;
    margin-right: 90px;
}
.eye.right{
    left: 50%;
    margin-left: 90px;
}
/*
*然后是，它的脸蛋
*/
.face{
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
.face.left{
    right: 50%;
    margin-right: 116px;
}
.face.right{
    left: 50%;
    margin-left: 116px;
}
/*
*画好上嘴唇~
*/
.upperLip{
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 46px;
    background: #FEE433;
}
/*
*左一撇
*/
.upperLip.left{
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
    right: 50%;
}
/*
*右一撇
*/
.upperLip.right{
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
    left: 50%;
}
/*
*然后是，下嘴唇
*/
.lowerLip-wrapper{
    bottom: -50px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    height: 160px;
    overflow: hidden;
}
.lowerLip{
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0px;
    overflow: hidden;
}
/*
*最后是小舌头
*/
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -20px;
    width: 150px;
    height: 150px;
    background: #FC4A62;
    left: 50%;
    margin-left: -75px;
    border-radius: 50%;
}
/*
*好啦，完成啦，一只可爱的皮卡丘送上。
*/
`
    writeCode('', code)
}.call()