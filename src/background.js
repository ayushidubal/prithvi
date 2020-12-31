
function notifications(){
    
    chrome.notifications.create(
        {
            title:'Prithvi: A greener future',
            message:'If you\'re planning to buy something, greener alternatives are just a click away!',
            type:'basic',
            iconUrl:'icon.png'
        }
    )
}

    
var quer1;
chrome.tabs.onUpdated.addListener(function (changeInfo, tab) {

    if (changeInfo.status == 'complete') {

        let url = tab.url;
        var start = url.indexOf("q=")+2;
        var end = url.indexOf("&", start);
        quer1 = url.substring(start, end);
        console.log(quer1);

        var allKeys=["buy","price","cheap", "product", "shop", "sale","amazon","flipkart","myntra","purchase","ecological"];

        var counter=0;
        for(i=0;i<allKeys.length;i++){

            if(quer1.includes(allKeys[i])&&counter==0){

                notifications(); 
                counter++;
            }
        }
    }
});
