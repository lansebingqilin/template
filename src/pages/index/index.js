import '../../global.css';
import './index.less';
import img from '../../assets/sec.png';
import img1 from '../../assets/WechatIMG15.png';
axios.defaults.headers.common['Accept'] = 'application/json;';
let Datafun=()=>{
    console.log("99999")
}
let data=[1,2,3,4,5];
data.map((item)=>(
    console.log(item)
))
Datafun();
var html=template('content',data); 
document.getElementById('container').innerHTML = html;

