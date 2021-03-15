 //create an object from our Game() template
       var theGame = new Game()
       //call the init() method to create our rooms and store them inside theGame
       theGame.init();
       
       
        
        //add event listeners for clicks on buttons and images
        document.addEventListener(`click`, e => {
        const btn = e.target.closest("button");
  
            if (btn) {
                //methods for interacting with button clicks goes here
                console.log(`You clicked ${btn.innerHTML}`);
				if(document.getElementById("roomTitle").innerHTML == "You Died"){
				theGame.clearInventory();
			}
            }
        const pic = e.target.closest("img");
        if(pic) {
            //methods for interacting with img clicks goes here
            console.log(`You clicked ${pic.id}`)
            var itemTitle = pic.id.split("-")
            
            //TODO: figure out why javascript is ignoring my callback function even though its valid.
            //this uses the item. the item takes a function as a parameter to define its use but won't call it
            theGame.player.items[theGame.itemIndex(itemTitle[1],theGame.player.items)].use();
            //Temporary fix to proceed
            // if pic is showing in inventory can imply we have the key.
            //so if we click the pic we want to set the islocked variable for "Decrepit Living Quarters" to true
            if(itemTitle[1]=="golden key" && (theGame.player.currentRoom.title == "Decrepit Living Quarters" || theGame.player.currentRoom.title == "Flooded Stairwell") && theGame.player.currentRoom.isExamined){
                    theGame.player.currentRoom.isLocked = false;
                    document.getElementById("roomDescrip").innerHTML = "After much laboring clearing the vines and moss you uncover the door. You manage to work the key into the lock. Just when you feel like the key might break you hear a click!"
                    document.getElementById("itemData").innerHTML = "You unlock the door."
                
            }
            else if(itemTitle[1] == "golden key") {
                document.getElementById('itemData').innerHTML = "You can't use that here."
            }
			if(itemTitle[1]=="rope" && theGame.player.currentRoom.title == "Submerged Room"){
				theGame.loadRoom('You Have Escaped!')
				theGame.clearInventory();
			}
            }//end if checking for pic
        });//end eventlistener
        var clearItemData = function() {
            document.getElementById("itemData").innerHTML = "";
        }
        //clear the itemData tag every 5 seconds. Clears the item info displayed in UI from last clicked item.
        setInterval(clearItemData,5000);
        //added this to ensure all elements are loaded on the page before we interact with them during testing.
        window.addEventListener('DOMContentLoaded', (event) => {
            theGame.loadRoom('Welcome');
			
        
            
        });
        
            
//       //TODO: save state of game for reload.
//       var mygame = JSON.stringify(theGame);
//       window.localStorage.setItem("game", mygame);