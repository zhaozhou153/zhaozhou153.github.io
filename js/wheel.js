/**
 * Created by Wentao on 2016/9/19.
 */
function addWheel(obj,fn){
    //���¼�
    if(navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
        document.addEventListener('DOMMouseScroll',show,false)
    }else{
        document.onmousewheel=show;
    }

    function show(ev){
        var bDown=true;
        var oEvent=ev || event;
        //����bDown�����
        if(oEvent.detail){
            if(oEvent.detail>0){
                bDown=true;
            }else{
                bDown=false;
            }
        }else{
            if(oEvent.wheelDelta>0){
                bDown=false;
            }else{
                bDown=true;
            }
        }
        fn(bDown);
    }
}










