//車站中文
var department = new Array();
department[0] = ["福隆","貢寮","雙溪","牡丹","三貂嶺","猴硐","瑞芳","四腳亭","暖暖","基隆","三坑","八堵","七堵","百福","五堵","汐止","汐科","南港","松山","台北","萬華","板橋","浮洲","樹林","南樹林","山佳","鶯歌"]; 
department[1] = ["桃園","內壢","中壢","埔心","楊梅","富岡","新富"]; 
department[2] = ["北湖","湖口","新豐","竹北","北新竹","新竹","三姓橋","香山"];   
department[3] = ["崎頂","竹南","談文","大山","後龍","龍港","白沙屯","新埔","通霄","苑裡","造橋","豐富","苗栗","南勢","銅鑼","三義"];
department[4] = ["日南","大甲","台中港","清水","沙鹿","龍井","大肚","追分","泰安","后里","豐原","栗林","潭子","頭家厝","松竹","太原","精武","臺中","五權","大慶","烏日","新烏日","成功"];
department[5] = ["彰化","花壇","大村","員林","永靖","社頭","田中","二水","源泉"];
department[6] = ["濁水","龍泉","集集","水里","車埕"];
department[7] = ["林內","石榴","斗六","斗南","石龜"];
department[8] = ["大林","民雄","嘉北","嘉義","水上","南靖"];
department[9] = ["後壁","新營","柳營","林鳳營","隆田","拔林","善化","南科","新市","永康","大橋","台南","保安","仁德","中洲","長榮大學","沙崙"];
department[10] = ["大湖","路竹","岡山","橋頭","楠梓","新左營","左營","內惟","美術館","鼓山","三塊厝","高雄","民族","科工館","正義","鳳山","後庄","九曲堂"];
department[11] = ["六塊厝","屏東","歸來","麟洛","西勢","竹田","潮州","崁頂","南州","鎮安","林邊","佳冬","東海","枋寮","加祿","內獅","枋山"];
department[12] = ["大武","瀧溪","金崙","太麻里","知本","康樂","台東","山里","鹿野","瑞源","瑞河","關山","海端","池上"];
department[13] = ["富里","東竹","東里","玉里","三民","瑞穗","富源","大富","光復","萬榮","鳳林","南平","林榮新光","豐田","壽豐","平和","志學","吉安","花蓮","北埔","景美","新城","崇德","和仁","和平"];
department[14] = ["漢本","武塔","南澳","東澳","永樂","蘇澳","蘇澳新","新馬","冬山","羅東","中里","二結","宜蘭","四城","礁溪","頂埔","頭城","外澳","龜山","大溪","大里","石城",];   

//車站代碼
var departmentNo = new Array();
departmentNo[0] = ["1810", "1809", "1808", "1807", "1806", "1805", "1804", "1803", "1802", "1001", "1029", "1002", "1003", "1030", "1004", "1005", "1031", "1006", "1007", "1008", "1009", "1011", "1032", "1012", "1034", "1013", "1014"];
departmentNo[1] = ["1015", "1016", "1017", "1018", "1019", "1020", "1036"];
departmentNo[2] = ["1033", "1021", "1022", "1023", "1024", "1025", "1035", "1021"];
departmentNo[3] = ["1027", "1028", "1102", "1104", "1105", "1106", "1107", "1108", "1109", "1110", "1302", "1304", "1305", "1307", "1308", "1310"];
departmentNo[4] = ["1111", "1112", "1113", "1114", "1115", "1116", "1117", "1118", "1314", "1315", "1317", "1325", "1318", "1326", "1327", "1323", "1328", "1319", "1329", "1322", "1320", "1324", "1321"];
departmentNo[5] = ["1120", "1202", "1240", "1203", "1204", "1205", "1206", "1207", "2702"];
departmentNo[6] = ["2703", "2704", "2705", "2706", "2707"];
departmentNo[7] = ["1208", "1209", "1210", "1211", "1212"];
departmentNo[8] = ["1213", "1214", "1241", "1215", "1217", "1218"];
departmentNo[9] = ["1219", "1220", "1221", "1222", "1223", "1224", "1225", "1244", "1226", "1227", "1239", "1228", "1229", "1243", "1230", "5101", "5102"];
departmentNo[10] = ["1231", "1232", "1233", "1234", "1235", "1242", "1236", "1245", "1246", "1237", "1247", "1238", "1419", "1420", "1421", "1402", "1403", "1404"];
departmentNo[11] = ["1405", "1406", "1407", "1408", "1409", "1410", "1411", "1412", "1413", "1414", "1415", "1416", "1417", "1418", "1502", "1503", "1504"];
departmentNo[12] = ["1508", "1510", "1512", "1514", "1516", "1517", "1632", "1631", "1630", "1629", "1628", "1626", "1625", "1624"];
departmentNo[13] = ["1623", "1622", "1621", "1619", "1617", "1616", "1614", "1613", "1612", "1611", "1610", "1609", "1608", "1607", "1606", "1605", "1604", "1602", "1715", "1714", "1713", "1712", "1711", "1710", "1709"];
departmentNo[14] = ["1708", "1706", "1705", "1704", "1703", "1827", "1826", "1825", "1824", "1823", "1822", "1821", "1820", "1819", "1818", "1817", "1816", "1815", "1814", "1813", "1812", "1811"];

function renew(index)
{
	document.myForm.station.length = 0; // 刪除多餘的選項
	for(var i=0;i<department[index-1].length;i++)
		document.myForm.station.add(new Option(department[index-1][i], departmentNo[index-1][i])); // 設定新選項
}
function renew1(index)
{
	document.myForm1.station1.length = 0; // 刪除多餘的選項
	for(var i=0;i<department[index-1].length;i++)
		document.myForm1.station1.add(new Option(department[index-1][i], departmentNo[index-1][i])); // 設定新選項
}

function query()
{
	var index1 = document.myForm.station.value;
    var index2 = document.myForm1.station1.value;
    var index3 = document.getElementById("date").value;
    var url = "https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/" + index1 + "/to/" + index2 + "/" + index3 + "?$orderby=OriginStopTime%2FArrivalTime&$format=JSON";
	var url1 = "https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/ODFare/" + index1 + "/to/" + index2 + "?$top=30&$format=JSON";
    var txt = "";
	var train_TC = "";
	var train_CK = "";
	var train_local = "";
 
    if(index1 == "")
    {
		alert('請填入起始站');
		return;
    }
	if(index2 == "")
    {
		alert('請填入到達站');
		return;
    }
    if(index3 == "")
    {
		alert('請填入日期');
		return;
    }
 
     var xhr = new XMLHttpRequest();
     xhr.open("GET", url, true);
     xhr.send();
  
	var fare = new XMLHttpRequest();
	fare.open("GET", url1, true);
	fare.send();
  
	fare.onreadystatechange = function()
	{
		if(this.readyState === 4 && this.status === 200)
		{
			var data1 = JSON.parse(this.responseText);
        
			train_TC = data1[0].Fares[0].Price;
			train_CK = data1[0].Fares[5].Price;
			train_local = data1[0].Fares[15].Price;
		}
		else if(this.readyState === 4)
		{
			var err = JSON.parse(this.responseText);
			alert(err.Message);
		}
	}
  
    xhr.onreadystatechange = function()
    {
		if(this.readyState === 4 && this.status === 200)
		{
			var data = JSON.parse(this.responseText);
    
			txt += "<table border='1' align='center' id='myTable'>";
			txt += "<tr><td>車種</td><td>車次</td><td>發車站 -> 終點站</td><td>出發時間</td><td>到達時間</td><td>票價</td></tr>";
			for (var x in data)
			{
				txt += "<tr><td id=d" + x +  ">" + data[x].DailyTrainInfo.TrainTypeName.Zh_tw.substring(0, 2) + "</td><td id="+ x + ">" + data[x].DailyTrainInfo.TrainNo + "</td>";
				txt += "<td>" + data[x].DailyTrainInfo.StartingStationName.Zh_tw + " -> " + data[x].DailyTrainInfo.EndingStationName.Zh_tw + "</td>";
				txt += "<td id=a" + x + ">" + data[x].OriginStopTime.DepartureTime + "</td><td id=c" + x + ">" + data[x].DestinationStopTime.ArrivalTime + "</td>";
				if(data[x].DailyTrainInfo.TrainTypeName.Zh_tw.substring(0, 2) == "自強")
				{
					txt += "<td id=t" + x + ">" + train_TC + "</td>";
				}
				else if(data[x].DailyTrainInfo.TrainTypeName.Zh_tw.substring(0, 2) == "莒光")
				{
					txt += "<td id=t" + x + ">" + train_CK + "</td>";
				}
				else if(data[x].DailyTrainInfo.TrainTypeName.Zh_tw.substring(0, 2) == "區間")
				{
					txt += "<td id=t" + x + ">" + train_local + "</td>";
				}
				txt += "<td><input value='訂票' type='button' id=b"+ x +" onclick='buy(this)'></td></tr>";
			}
			txt += "</table>";
			document.getElementById("demo").innerHTML = txt;
		}
		else if(this.readyState === 4)
		{
			var err = JSON.parse(this.responseText);
			alert(err.Message);
		}
	}
}


function buy(myobj)
{
  var TrainNo = myobj.id[1];
  if(myobj.id.length == 3)
  {
	 TrainNo += myobj.id[2];
  }
  var StartTime = "a" + TrainNo;
  var ArrivalTime = "c" + TrainNo;
  var Train = "d" + TrainNo;
  var Price = "t" + TrainNo;
  var index1 = document.getElementById(Train).innerHTML + "/" + document.getElementById(TrainNo).innerHTML + "/" + department[document.myForm.region.selectedIndex-1][document.myForm.station.selectedIndex] + "->" + department[document.myForm1.region1.selectedIndex-1][document.myForm1.station1.selectedIndex] + "/" +  document.getElementById(StartTime).innerHTML + "/" + document.getElementById(ArrivalTime).innerHTML+ "/" + document.getElementById(Price).innerHTML +"元";
  var url = "file:///D:/學習/資概/火車時刻表/火車店票系統(2).html?index="+index1;
  javascript:window.location.href = url;
}

var num=0;
function pays(){
	var credit="";
	if(num == 0){
	    if(document.getElementById("111").checked){
			var No="";
			var output;
			var y="666666";
			for(var x in y){
				if(x == 0){
					No+=Math.floor(Math.random()*9)+1;
				}
				else{
				No+=Math.floor(Math.random()*10);
				}
			}
			output="訂票成功，電腦代碼:" + No + "\n請於三日內至超商繳費";
			alert(output);
		}
		else if(document.getElementById("112").checked)
		{
			
			credit += "信用卡卡號(4碼): " + "<input type = 'text' name = 'credit_number' value = '' id = 'creditID'>" + "<br>";
			credit += "<input type = 'button' name = 'credit_button' value = '確定' onclick = 'number()'>"
			document.getElementById("credit").innerHTML = credit;
		}
		num+=1;
	}
	else{
		alert("您已經訂票成功")
	}
}

function number()
{
	var number = document.getElementById("creditID").value;
	if(number.length != 4)
	{
		alert("信用卡號錯誤\n請輸入4碼");
	}
	else
	{
		alert("訂票成功");
		number = "";
		document.getElementById("credit").innerHTML = number;
	}
}