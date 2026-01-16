import{r as u,f as F,e as dt,p as r,q as o,Q as b,P as at,al as st,a8 as nt,F as k,aa as _,T as g,t as p,J as T}from"./vue-vendor-D7ST0Ca8.js";import{_ as lt}from"./index-Dp0qogSL.js";import"./element-plus-BRoUzYQT.js";const rt={class:"main-content"},pt={class:"map-container"},ct={class:"sidebar"},ut={class:"search-box"},gt={class:"search-input-wrapper"},vt=["disabled"],xt={key:0,class:"search-results"},ft={class:"results-list"},ht=["onClick"],bt={class:"result-title"},mt={class:"result-address"},yt={key:1,class:"campus-section"},wt={class:"section-header"},Ft={class:"pagination-info"},kt={class:"current-page"},_t={class:"total-pages"},Mt={class:"campus-list"},$t=["onClick"],Pt={class:"campus-title"},Ct={class:"campus-address"},It={key:0,class:"pagination-controls"},Lt=["disabled"],Bt={class:"page-indicators"},Tt=["onClick"],Wt=["disabled"],St={class:"stats"},Gt={class:"stat-item"},zt={class:"stat-value"},Ot={class:"stat-item"},jt={class:"stat-value"},M=10,Et={__name:"Home",setup(Nt){const $=u(null);let a=null,x=null,P=null;const n=u(""),m=u(null),c=u([]),y=u([]),l=u(1),h=u(!1),W=()=>{const e=document.createElement("canvas");e.width=24,e.height=24;const t=e.getContext("2d");return t.beginPath(),t.arc(12,12,10,0,2*Math.PI),t.fillStyle="#e74c3c",t.fill(),t.strokeStyle="#ffffff",t.lineWidth=2,t.stroke(),t.fillStyle="#ffffff",t.font="bold 12px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("立",12,12),e.toDataURL()},S=()=>{const e=document.createElement("canvas");e.width=24,e.height=24;const t=e.getContext("2d");return t.beginPath(),t.arc(12,12,10,0,2*Math.PI),t.fillStyle="#3498db",t.fill(),t.strokeStyle="#ffffff",t.lineWidth=2,t.stroke(),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(12,6),t.lineTo(14,10),t.lineTo(18,10),t.lineTo(15,13),t.lineTo(16,18),t.lineTo(12,15),t.lineTo(8,18),t.lineTo(9,13),t.lineTo(6,10),t.lineTo(10,10),t.closePath(),t.fill(),e.toDataURL()},G=e=>{const t={火车站:"https://via.placeholder.com/280x140/4CAF50/FFFFFF?text=火车站",地铁站:"https://via.placeholder.com/280x140/2196F3/FFFFFF?text=地铁站",公交站:"https://via.placeholder.com/280x140/FF9800/FFFFFF?text=公交站",学校:"https://via.placeholder.com/280x140/9C27B0/FFFFFF?text=学校",医院:"https://via.placeholder.com/280x140/F44336/FFFFFF?text=医院",商场:"https://via.placeholder.com/280x140/FF5722/FFFFFF?text=商场",酒店:"https://via.placeholder.com/280x140/795548/FFFFFF?text=酒店",餐厅:"https://via.placeholder.com/280x140/E91E63/FFFFFF?text=餐厅",银行:"https://via.placeholder.com/280x140/607D8B/FFFFFF?text=银行",公园:"https://via.placeholder.com/280x140/4CAF50/FFFFFF?text=公园",政府:"https://via.placeholder.com/280x140/3F51B5/FFFFFF?text=政府机构",公司:"https://via.placeholder.com/280x140/009688/FFFFFF?text=公司企业"};for(const[i,d]of Object.entries(t))if(e.includes(i))return d;return"https://via.placeholder.com/280x140/3498db/FFFFFF?text=地点图片"},z=e=>{const t={火车站:["交通枢纽","铁路运输","公共交通"],地铁站:["地铁交通","快捷出行","城市交通"],公交站:["公交出行","公共交通","便民服务"],学校:["教育机构","学习场所","人才培养"],医院:["医疗机构","医疗服务","健康保障"],商场:["购物中心","商业综合体","休闲购物"],酒店:["住宿服务","旅游住宿","商务出行"],餐厅:["餐饮服务","美食体验","休闲就餐"],银行:["金融服务","银行业务","金融理财"],公园:["休闲场所","绿化空间","户外活动"],政府:["政府机构","公共服务","行政管理"],公司:["商业办公","企业机构","商务服务"]};for(const[i,d]of Object.entries(t))if(e.includes(i))return d;return["地标建筑","公共服务","城市设施"]},O=e=>({成都东站:"028-12345678",成都站:"028-23456789",成都南站:"028-34567890",天府广场:"028-45678901",春熙路:"028-56789012",宽窄巷子:"028-67890123",锦里:"028-78901234",武侯祠:"028-89012345",杜甫草堂:"028-90123456"})[e]||"028-80000000",v=u([{id:1,title:"裳外校区（启学安诗）",address:"四川省成都市双流区临港路一段101号",longitude:103.986471,latitude:30.571556},{id:2,title:"郫嘉校区（乐学语同教育）",address:"成都市郫都区郫筒镇望丛中路1051号附1号407号",longitude:103.904589,latitude:30.799631},{id:3,title:"新都校区（无忧智学）",address:"成都市新都区炬光路222号(雄飞-北尚广场)",longitude:104.158945,latitude:30.805027},{id:4,title:"成外校区（立品龙班）",address:"郫都区天目路252号附2号(百草路地铁站A口旁)",longitude:103.985394,latitude:30.739108},{id:5,title:"实外校区（立品蔚来）",address:"成都市温江区都堂路226号2F",longitude:103.890921,latitude:30.695202},{id:6,title:"温江嘉祥校区(乐学仕承)",address:"成都市温江区鹏程路洲际春天广场商业楼17栋86号附402号",longitude:103.878441,latitude:30.680716},{id:7,title:"双流校区（无忧恒学）",address:"成都市双流区四川省成都市双流区航园路280号2楼",longitude:103.926751,latitude:30.601102},{id:8,title:"七高校区（因材施教）",address:"剑南大道中段716号清凤时代城商业1栋201号",longitude:104.050845,latitude:30.563899},{id:9,title:"天府(华阳)校区(倍才教育)",address:"四川省成都市双流区华阳街道天府大道南段560号1栋2层1号",longitude:104.075691,latitude:30.524324},{id:10,title:"海昌路校区(善学博引)",address:"成都市天府新区华阳街道天府大道南段2039号6栋1层5号(海昌路地铁口E口)",longitude:104.078525,latitude:30.500063},{id:11,title:"实外西校区(立品阳光)",address:"成都市双流区四川省成都市天府新区万东北二路8号附1号春风里A1-2-2号",longitude:104.099207,latitude:30.49609},{id:12,title:"麓山校区(乐学仕明教育)",address:"四川省成都市双流区万安镇麓山大道二段19号附8号15栋3层1~4号",longitude:104.146354,latitude:30.495759},{id:13,title:"书房校区(至学明诚)",address:"成都市龙泉驿区桃都大道中段577号皇冠国际广场2楼203",longitude:104.249041,latitude:30.580826},{id:14,title:"北大校区(文梯理想)",address:"成都市龙泉驿区金茶路636号附208号二楼",longitude:104.192577,latitude:30.579663},{id:15,title:"锦城校区（言塾科技）",address:"成都市武侯区四川省成都市武侯区锦城大道999号",longitude:104.05843,latitude:30.581833},{id:16,title:"七初天环校区(立习教育)",address:"四川省成都市武侯区天久北巷259号附202号2层",longitude:104.079445,latitude:30.598959},{id:17,title:"七中东湖校区(启学安知)",address:"成都市锦江区东湖街道琉璃路123号中港央湖名邸一期中信银行旁楼梯上2楼",longitude:104.100224,latitude:30.623211},{id:18,title:"攀成钢校区（春深似海）",address:"成都市锦江区汇泉南路272号镏金岁月商业广场2楼",longitude:104.112961,latitude:30.635739},{id:19,title:"嘉祥校区（书笔文化）",address:"锦江区晨晖路1号附5号",longitude:104.106628,latitude:30.616492},{id:20,title:"嘉祥成华校区(书道语诚)",address:"成都市成华区二仙桥东路48号4栋1单元1层26号、27号",longitude:104.138536,latitude:30.681735},{id:21,title:"川师校区(立谨教育)",address:"四川省成都市锦江区菱安路244号4栋附401号(四川师大地铁站A口)",longitude:104.124003,latitude:30.61565},{id:22,title:"九外校区（无忧致远）",address:"成都市锦江区四川省成都市锦江区枫树街与月季街交叉路口霸王茶姬创意山店楼上(二楼)",longitude:104.150219,latitude:30.610632},{id:23,title:"七中银杏校区(敬学致言)",address:"成都市锦江区成都市锦江区-银木街银木佳苑",longitude:104.154989,latitude:30.596989},{id:25,title:"西川南校区(善学语谦)",address:"成都市武侯区金花桥街道金履一路187号美丽都汇1栋4层401号",longitude:103.991266,latitude:30.607773},{id:26,title:"北二外校区(善学语修)",address:"四川省成都市武侯区聚龙路988号都城酒店两旁电梯上3楼右转",longitude:104.006821,latitude:30.626213},{id:27,title:"双楠校区（无忧礼学）",address:"成都市武侯区云霞路56号(双楠-华润中心)",longitude:104.024942,latitude:30.647078},{id:28,title:"光华校区（立品龙班）",address:"青羊区光华南三路88号万科金色领域1栋三楼",longitude:103.970532,latitude:30.674172},{id:29,title:"金沙校区（立品龙班）",address:"青羊区青羊大道立品龙班217号附2~2号",longitude:104.018148,latitude:30.683411},{id:30,title:"交大校区(无忧启学)",address:"成都市金牛区一品天下大街999号1栋4楼1号（金牛市民中心）",longitude:104.046653,latitude:30.7088},{id:31,title:"花牌坊校区(启思知睿)",address:"成都市金牛区抚琴街道一环路北1段88号花牌坊地铁口C口旁上二楼启思知睿",longitude:104.054475,latitude:30.690006},{id:32,title:"八宝(九宁)校区（耘智）",address:"成都市青羊区青龙街27号铂金城F4",longitude:104.07068,latitude:30.676675},{id:33,title:"天府广场校区(善学师逸)",address:"成都市青羊区西御街3号领地中心东塔3层",longitude:104.071042,latitude:30.662267},{id:34,title:"二中校区（启学致同）",address:"四川省成都市锦江区红星路一段35号附31号",longitude:104.094003,latitude:30.671653},{id:35,title:"水井坊校区(敬学才进)",address:"成都市锦江区东大街紫东楼段11号东方广场商业中心1栋3单元2楼2号",longitude:104.096927,latitude:30.653034},{id:36,title:"川大校区（蒙哲科技）",address:"武侯区一环路南1段-22号-附11号",longitude:104.08657,latitude:30.641137},{id:37,title:"倪家桥校区（锦塾科技）",address:"武侯区跳伞塔保利中心D座3楼(盛隆街西)",longitude:104.077971,latitude:30.630791},{id:38,title:"建设路校区(书道致诚)",address:"成都市成华区建和路4号朗朗天地4层421号",longitude:104.118587,latitude:30.678719},{id:39,title:"成华校区（名师领航）",address:"成都市成华区杉板桥路187号恒丰银行旁楼梯上2楼",longitude:104.124141,latitude:30.669846}]),f=F(()=>Math.ceil(v.value.length/M)),j=F(()=>{const e=(l.value-1)*M,t=e+M;return v.value.slice(e,t)}),E=F(()=>{const e=[];let i=Math.max(1,l.value-Math.floor(2.5)),d=Math.min(f.value,i+5-1);d-i+1<5&&(i=Math.max(1,d-5+1));for(let s=i;s<=d;s++)e.push(s);return e}),N=()=>{l.value>1&&l.value--},A=()=>{l.value<f.value&&l.value++},V=e=>{l.value=e},C=()=>{if(!n.value.trim()){c.value=[],w();return}h.value=!0,c.value=[],w(),x&&x.getPoint(n.value,e=>{e?x.getLocation(e,t=>{if(t){const i=t.address||n.value,d=t.addressComponents||{};c.value=[{id:"search-result",title:n.value,address:i,province:d.province||"",city:d.city||"",district:d.district||"",point:e}],I(e,i,d)}else c.value=[{id:"search-result",title:n.value,address:"地址信息获取失败",point:e}],I(e,n.value);h.value=!1}):(c.value=[],alert("未找到相关地点，请尝试其他关键词"),h.value=!1)},"成都市")},I=(e,t,i={})=>{const d=new BMapGL.Marker(e,{icon:new BMapGL.Icon(S(),new BMapGL.Size(24,24))}),s=new BMapGL.InfoWindow(`
    <div style="padding: 15px; max-width: 320px;">
      <h3 style="margin: 0 0 12px 0; color: #2c3e50; font-size: 16px; border-bottom: 2px solid #3498db; padding-bottom: 8px;">
        搜索地点详情
      </h3>
      <div style="color: #7f8c8d; line-height: 1.5;">
        <div style="margin-bottom: 10px;">
          <p style="margin: 6px 0; font-weight: 500; color: #3498db;">地点名称：</p>
          <p style="margin: 0; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #3498db;">
            ${n.value}
          </p>
        </div>
        <div style="margin-bottom: 10px;">
          <p style="margin: 6px 0; font-weight: 500; color: #3498db;">详细地址：</p>
          <p style="margin: 0; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #3498db;">
            ${t}
          </p>
        </div>
        ${i.province?`
        <div style="margin-bottom: 10px;">
          <p style="margin: 6px 0; font-weight: 500; color: #3498db;">行政区划：</p>
          <p style="margin: 0; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #3498db;">
            ${i.province} ${i.city} ${i.district}
          </p>
        </div>
        `:""}
        <div style="margin-top: 12px; display: flex; justify-content: space-between; color: #95a5a6; font-size: 12px; padding-top: 8px; border-top: 1px solid #eee;">
          <span>经度: ${e.lng.toFixed(6)}</span>
          <span>纬度: ${e.lat.toFixed(6)}</span>
        </div>
      </div>
    </div>
  `,{width:350,height:"auto"});d.addEventListener("click",()=>{a.openInfoWindow(s,e)}),setTimeout(()=>{a.openInfoWindow(s,e)},500),a.addOverlay(d),y.value.push(d),a.panTo(e),a.setZoom(15)},w=()=>{y.value.forEach(e=>{a.removeOverlay(e)}),y.value=[]},D=e=>{if(e.point){a.panTo(e.point),a.setZoom(16);const t=new BMapGL.InfoWindow(`
      <div style="padding: 15px; max-width: 320px;">
        <h3 style="margin: 0 0 12px 0; color: #2c3e50; font-size: 16px; border-bottom: 2px solid #3498db; padding-bottom: 8px;">
          ${e.title}
        </h3>
        <div style="color: #7f8c8d; line-height: 1.5;">
          <div style="margin-bottom: 10px;">
            <p style="margin: 6px 0; font-weight: 500; color: #3498db;">详细地址：</p>
            <p style="margin: 0; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #3498db;">
              ${e.address||"地址信息暂无"}
            </p>
          </div>
          ${e.province?`
          <div style="margin-bottom: 10px;">
            <p style="margin: 6px 0; font-weight: 500; color: #3498db;">行政区划：</p>
            <p style="margin: 0; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #3498db;">
              ${e.province} ${e.city} ${e.district}
            </p>
          </div>
          `:""}
          <div style="margin-top: 12px; display: flex; justify-content: space-between; color: #95a5a6; font-size: 12px; padding-top: 8px; border-top: 1px solid #eee;">
            <span>经度: ${e.point.lng.toFixed(6)}</span>
            <span>纬度: ${e.point.lat.toFixed(6)}</span>
          </div>
        </div>
      </div>
    `,{width:350,height:"auto"});a.openInfoWindow(t,e.point)}},Z=()=>{n.value="",c.value=[],w(),l.value=1,h.value=!1},U=()=>{a=new BMapGL.Map($.value);const e=new BMapGL.Point(v.value[0].longitude,v.value[0].latitude);a.centerAndZoom(e,11),a.enableScrollWheelZoom(!0),x=new BMapGL.Geocoder,P=new BMapGL.LocalSearch(a,{renderOptions:{map:a,autoViewport:!1}}),q(),H()},H=()=>{a.addEventListener("click",e=>{if(e.overlay&&e.overlay.toString().includes("Marker")&&!K(e.overlay)){const i=e.overlay.getPosition();R(i,d=>{d?L(d,i):x.getLocation(i,s=>{s?L(s,i):Y(i)})})}})},R=(e,t)=>{P.searchNearby("",e,100,i=>{if(i&&i.getNumPois()>0){const d=i.getPoi(0);t(d)}else t(null)})},K=e=>e._isCustom||!1,L=(e,t)=>{const i=e.title||e.name||"未知地点",d=e.address||e.province+e.city+e.district+e.street+e.streetNumber,s=e.phoneNumber||O(i),B=e.type||"地标建筑",X=G(B),tt=z(B);let et=`
    <div style="padding: 0; max-width: 320px; font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;">
      <!-- 图片区域 -->
      <div style="width: 100%; height: 140px; overflow: hidden; border-radius: 8px 8px 0 0;">
        <img src="${X}" alt="${i}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div style="padding: 15px;">
        <h3 style="margin: 0 0 12px 0; color: #2c3e50; font-size: 18px; font-weight: bold; border-bottom: 2px solid #9b59b6; padding-bottom: 8px;">
          📍 ${i}
        </h3>

        <div style="color: #7f8c8d; line-height: 1.5;">
          <!-- 地址信息 -->
          <div style="margin-bottom: 12px;">
            <div style="display: flex; align-items: flex-start; margin-bottom: 6px;">
              <span style="color: #9b59b6; font-weight: 500; min-width: 60px;">地址：</span>
              <span style="flex: 1; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #9b59b6;">
                ${d}
              </span>
            </div>
          </div>

          <!-- 电话信息 -->
          <div style="margin-bottom: 12px;">
            <div style="display: flex; align-items: center; margin-bottom: 6px;">
              <span style="color: #9b59b6; font-weight: 500; min-width: 60px;">电话：</span>
              <span style="flex: 1; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #9b59b6;">
                <a href="tel:${s}" style="color: #3498db; text-decoration: none;">${s}</a>
              </span>
            </div>
          </div>

          <!-- 标签信息 -->
          <div style="margin-bottom: 12px;">
            <div style="display: flex; align-items: flex-start; margin-bottom: 6px;">
              <span style="color: #9b59b6; font-weight: 500; min-width: 60px;">标签：</span>
              <div style="flex: 1; display: flex; flex-wrap: wrap; gap: 6px;">
                ${tt.map(ot=>`
                  <span style="background: #e8f4fd; color: #3498db; padding: 4px 8px; border-radius: 12px; font-size: 12px; border: 1px solid #3498db;">
                    ${ot}
                  </span>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- 导航按钮 -->
          <div style="margin-bottom: 12px;">
            <div style="display: flex; align-items: center; margin-bottom: 6px;">
              <span style="color: #9b59b6; font-weight: 500; min-width: 60px;">导航：</span>
              <div style="flex: 1;">
                <button onclick="openNavigation(${t.lng}, ${t.lat}, '${i}')"
                        style="background: #27ae60; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px; width: 100%;">
                  🚗 开始导航
                </button>
              </div>
            </div>
          </div>

          <!-- 坐标信息 -->
          <div style="margin-top: 12px; padding: 10px; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #95a5a6;">
            <div style="display: flex; justify-content: space-between; color: #7f8c8d; font-size: 12px;">
              <span>经度: ${t.lng.toFixed(6)}</span>
              <span>纬度: ${t.lat.toFixed(6)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;const it=new BMapGL.InfoWindow(et,{width:350,height:"auto"});a.openInfoWindow(it,t)},Q=(e,t,i)=>{alert(`开始导航到：${i}
经度：${e.toFixed(6)}
纬度：${t.toFixed(6)}`)},Y=e=>{const t=`
    <div style="padding: 15px; max-width: 280px; font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;">
      <h3 style="margin: 0 0 12px 0; color: #2c3e50; font-size: 16px; border-bottom: 2px solid #9b59b6; padding-bottom: 8px;">
        📍 地图地点
      </h3>
      <div style="color: #7f8c8d; line-height: 1.5;">
        <div style="margin-bottom: 10px;">
          <p style="margin: 6px 0; font-weight: 500; color: #9b59b6;">位置信息：</p>
          <p style="margin: 0; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #9b59b6;">
            点击了地图上的POI标记
          </p>
        </div>

        <!-- 导航按钮 -->
        <div style="margin-bottom: 12px;">
          <button onclick="openNavigation(${e.lng}, ${e.lat}, '地图地点')"
                  style="background: #27ae60; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px; width: 100%;">
            🚗 开始导航
          </button>
        </div>

        <div style="margin-top: 12px; display: flex; justify-content: space-between; color: #95a5a6; font-size: 12px; padding-top: 8px; border-top: 1px solid #eee;">
          <span>经度: ${e.lng.toFixed(6)}</span>
          <span>纬度: ${e.lat.toFixed(6)}</span>
        </div>
        <div style="margin-top: 10px; padding: 8px; background: #fff8e1; border-radius: 4px; border-left: 3px solid #ffa000;">
          <p style="margin: 0; color: #ff8f00; font-size: 12px; text-align: center;">
            💡 这是百度地图原有的POI标记
          </p>
        </div>
      </div>
    </div>
  `,i=new BMapGL.InfoWindow(t,{width:320,height:"auto"});a.openInfoWindow(i,e)},q=()=>{const e=W();v.value.forEach(t=>{const i=new BMapGL.Point(t.longitude,t.latitude),d=new BMapGL.Marker(i,{icon:new BMapGL.Icon(e,new BMapGL.Size(24,24))});d._isCustom=!0;const s=new BMapGL.InfoWindow(`
      <div style="padding: 15px; max-width: 280px;">
        <h3 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 16px; border-bottom: 2px solid #e74c3c; padding-bottom: 8px;">
          ${t.title}
        </h3>
        <div style="color: #7f8c8d; line-height: 1.5;">
          <p style="margin: 8px 0; font-weight: 500;">详细地址：</p>
          <p style="margin: 0; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #3498db;">
            ${t.address}
          </p>
          <div style="margin-top: 10px; display: flex; justify-content: space-between; color: #95a5a6; font-size: 12px;">
            <span>经度: ${t.longitude.toFixed(6)}</span>
            <span>纬度: ${t.latitude.toFixed(6)}</span>
          </div>
        </div>
      </div>
    `,{width:300,height:"auto"});d.addEventListener("click",()=>{a.openInfoWindow(s,i),m.value=t.id}),a.addOverlay(d)})},J=e=>{const t=new BMapGL.Point(e.longitude,e.latitude);a.panTo(t),a.setZoom(16),m.value=e.id;const i=new BMapGL.InfoWindow(`
    <div style="padding: 15px; max-width: 280px;">
      <h3 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 16px; border-bottom: 2px solid #e74c3c; padding-bottom: 8px;">
        ${e.title}
      </h3>
      <div style="color: #7f8c8d; line-height: 1.5;">
        <p style="margin: 8px 0; font-weight: 500;">详细地址：</p>
        <p style="margin: 0; background: #f8f9fa; padding: 8px; border-radius: 4px; border-left: 3px solid #3498db;">
          ${e.address}
        </p>
        <div style="margin-top: 10px; display: flex; justify-content: space-between; color: #95a5a6; font-size: 12px;">
          <span>经度: ${e.longitude.toFixed(6)}</span>
          <span>纬度: ${e.latitude.toFixed(6)}</span>
        </div>
      </div>
    </div>
  `,{width:300,height:"auto"});a.openInfoWindow(i,t)};return dt(()=>{typeof BMapGL<"u"?(U(),window.openNavigation=Q):console.error("百度地图API未正确加载")}),(e,t)=>(p(),r("div",rt,[o("div",pt,[o("div",{id:"map",ref_key:"mapContainer",ref:$},null,512),o("div",ct,[o("div",ut,[o("div",gt,[at(o("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=i=>n.value=i),placeholder:"搜索任意地址...",onKeypress:nt(C,["enter"]),class:"search-input"},null,544),[[st,n.value]]),n.value?(p(),r("button",{key:0,onClick:Z,class:"clear-btn",type:"button","aria-label":"清除搜索"},t[1]||(t[1]=[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]))):b("",!0),o("button",{onClick:C,class:"search-btn",type:"button","aria-label":"搜索",disabled:!n.value.trim()},t[2]||(t[2]=[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),8,vt)])]),c.value.length>0?(p(),r("div",xt,[t[3]||(t[3]=o("h3",{class:"results-title"},"搜索结果",-1)),o("div",ft,[(p(!0),r(k,null,_(c.value,(i,d)=>(p(),r("div",{key:d,class:"result-item",onClick:s=>D(i)},[o("div",bt,g(i.title),1),o("div",mt,g(i.address),1)],8,ht))),128))])])):b("",!0),n.value?b("",!0):(p(),r("div",yt,[o("div",wt,[t[4]||(t[4]=o("h3",{class:"section-title"},"校区列表",-1)),o("div",Ft,[o("span",kt,g(l.value),1),o("span",_t,"/ "+g(f.value),1)])]),o("div",Mt,[(p(!0),r(k,null,_(j.value,i=>(p(),r("div",{key:i.id,class:T(["campus-item",{active:m.value===i.id}]),onClick:d=>J(i)},[o("div",Pt,g(i.title),1),o("div",Ct,g(i.address),1)],10,$t))),128))]),f.value>1?(p(),r("div",It,[o("button",{class:"pagination-btn prev-btn",onClick:N,disabled:l.value===1},t[5]||(t[5]=[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M15 18L9 12L15 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]),8,Lt),o("div",Bt,[(p(!0),r(k,null,_(E.value,i=>(p(),r("span",{key:i,class:T(["page-indicator",{active:i===l.value}]),onClick:d=>V(i)},null,10,Tt))),128))]),o("button",{class:"pagination-btn next-btn",onClick:A,disabled:l.value===f.value},t[6]||(t[6]=[o("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M9 18L15 12L9 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"})],-1)]),8,Wt)])):b("",!0)])),o("div",St,[o("div",Gt,[o("div",zt,g(v.value.length),1),t[7]||(t[7]=o("div",{class:"stat-label"},"总校区数",-1))]),o("div",Ot,[o("div",jt,g(c.value.length),1),t[8]||(t[8]=o("div",{class:"stat-label"},"搜索结果",-1))])])])]),t[9]||(t[9]=o("div",{class:"footer"},[o("p",null,"校区地图搜索系统 © 2025")],-1))]))}},Zt=lt(Et,[["__scopeId","data-v-66df0fe1"]]);export{Zt as default};
