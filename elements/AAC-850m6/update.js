function(instance, properties, context) {
	
	if(!instance.data.getStarted){	
        instance.data.triggerMe(properties);
        instance.data.getStarted = true;
     }
    
    instance.data.clientID = properties.clientId
    instance.data.boardCode = properties.boardCode
	instance.data.role = properties.role;
    instance.data.displayName = properties.displayName;
	instance.data.tool = properties.tool;
    
    /*
    var elementID = instance.data.elementID;
    instance.canvas.append('<div style="width: 100% !important; height: 100% !important;" id="'+elementID+'"></div>');
    
    var script = document.createElement("script");
            script.innerHTML = "var wt = new api.WhiteboardTeam('#"+elementID+"', {clientId: '"+properties.clientId+"',boardCode: '"+properties.boardCode+"',participant: {role : '"+properties.role+"', name: '"+properties.displayName+"'},board: {tool: '"+properties.tool+"'}});";
            document.body.appendChild(script);
*/

   	    
}