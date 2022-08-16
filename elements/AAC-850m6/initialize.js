function(instance, context) {
    
    instance.data.getStarted = false;
    
    // Define a random ID
    
    var random = Math.floor((Math.random() * 100000) + 1);
    const elementID = 'wt-container'+random;
    instance.data.elementID = elementID;
    
   
    
    instance.data.triggerMe = (properties) => {
		
        
        // Append div

        instance.canvas.append('<div style="width: 100% !important; height: 100% !important;" id="'+elementID+'"></div>');

        $(document).ready(function(){
         
            const mouseTarget = document.getElementById(elementID);

            mouseTarget.addEventListener('mouseenter', e => {
              instance.triggerEvent('mouseEnter');
            });

            mouseTarget.addEventListener('mouseleave', e => {
              instance.triggerEvent('mouseLeave');
            });
     
            // Load script

            var script = document.createElement("script");
            script.innerHTML = "var wt = new api.WhiteboardTeam('#"+elementID+"', {clientId: '"+properties.clientId+"', boardCode: '"+properties.boardCode+"',participant: {role : '"+properties.role+"', name: '"+properties.displayName+"', permissions : ['view_templates']},board: {tool: '"+properties.tool+"', colors: ['#FF5733', '#3498DB', '#5B2C6F', '#212F3C', '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6', '#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1', '#f368e0', '#ff9f43', '#ee5253', '#0abde3', '#10ac84', '#00d2d3', '#54a0ff', '#5f27cd', '#01a3a4', '#2e86de', '#341f97', '#222f3e', '#8395a7']}});";
            document.body.appendChild(script);



            // When board is ready

            wt.onReady(() => instance.triggerEvent('ready'));

            // When any error occured
            wt.onError(error => {
                 console.log(error.type, error.message);
                 instance.triggerEvent('error');
                 instance.publishState('errorMessage', `Error type: $('error.type'), Message: $('error.message')`);
            })

            // When a user joined

            wt.addListener('user-joined', user => {
                instance.publishState('joinedUserID', user.uid);
                instance.publishState('joinedUserDisplayName', user.displayName);
                instance.triggerEvent('userJoined');
            });

            // When a user left

            wt.addListener('user-left', user => {
                instance.publishState('leftUserID', user.uid);
                instance.publishState('leftUserDisplayName', user.displayName);
                instance.triggerEvent('userLeft');
            });
            
        });     
   };
    
}