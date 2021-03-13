class Game {
            constructor(){
               this.rooms = new Array();
               this.colorTransTime;
               //will hold information about our player
               this.player = new Player();
                
            }//end of constructor
            
            //initializing (creating) rooms//
            init(){
                //variables used to create our rooms
                var roomTitle = "";
                var roomDescrip = "";
                //these are arrays
                var choiceDescrips = ""
                var choiceLinks = "";
                //pointer to our current room
                var room = "";
                //the descriptions for each button from top to bottom on the page.
                var choiceDescrip0 = "";
                var choiceDescrip1 = "";
                var choiceDescrip2 = "";
                var choiceDescrip3 = "";
                //TODO: create a "game over" room using javascript.
                //TODO: create a "you won" room using javascript.
                //TODO: create a "you are lost" room using javascript.
                
                //the onclick action that happens when you click each button from top to bottom on the page.
                var linkChoice0 = "this.loadRoom('Welcome')";
                var linkChoice1 = "this.loadRoom('Welcome')";
                var linkChoice2 = "this.loadRoom('Welcome')";
                var linkChoice3 = "this.loadRoom('Welcome')";
                
                //variables to track our item initialization.
                var item0 = new Object();
                var item1 = new Object();
                var item2 = new Object();
                var item3 = new Object();
                var item4 = new Object();
                var items = [];
                
                //HOW TO CREATE A ROOM.
                //COPY LINES  to .
                //PASTE IT IN ONE LINE AFTER THE END OF ANOTHER ROOM
                // that is the line: this.rooms.push(room);
                // then change the text accordingly
                
				//idx 0 is the the title screen
				//idx 1 will be the starting room
				
				//Cave in title Screen (index: 0)
				roomTitle = "Welcome"
                roomDescrip = "As part of an excavating team working for the famous Ms. Marshmallow, a famous archeologist. You have uncovered one of the tombs of history's most esteemed culinary artists: Chef Boy-ar-Bob. Be wary recent seismic activity have many claiming the area to be unsafe, but Ms. Marshmallow must have her recipes. Jump in and see what yummy treasures you can unearth."
                choiceDescrip0 = "Hey there";
                choiceDescrip1 = "Unexpected";
                choiceDescrip2 = "Spelunker";
                choiceDescrip3 = "Play Cave-in!";
                choiceDescrips = [choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3 ]
                
                //TODO: Enter the index in for the rooms this room connects to
                //The links to each one of our "pages"
                linkChoice0 = "theGame.loadRoom(theGame.rooms[1].title)";
                linkChoice1 = "theGame.loadRoom(theGame.rooms[1].title)";
                linkChoice2 = "theGame.loadRoom(theGame.rooms[1].title)";
                linkChoice3 = "theGame.loadRoom(theGame.rooms[1].title)";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3]
                //item initialization for Cavern Floor
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks)
                this.rooms.push(room);
				
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
				//Cavern Floor Entrance
                roomTitle = "Cavern Floor"
                roomDescrip = "You come to choking on dust and in pain. As part of the excavating team, the ground gave way and you fell into a cavern system beneath the old ruin you and your team were unearthing. The sound of debris settling still echos from above. You were lucky to not have broken anything."
                choiceDescrip0 = "Attempt to climb back up towards the top and call for help.";
                choiceDescrip1 = "Rummage through the debris strewn across the cavern floor.";
                choiceDescrip2 = "Yell for help!";
                choiceDescrip3 = "Check your pockets to see what you have on you.";
                choiceDescrips = [choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3 ]
                
                //TODO: Enter the index in for the rooms this room connects to
                //The links to each one of our "pages"
                linkChoice0 = "theGame.loadRoom('Water-worn Ravine')";
                //if the choice doesn't lead to a different but keeps the player in the same room use the theGame.insertRoomDescrip method instead of theGame.loadRoom
                linkChoice1 = "theGame.insertRoomDescrip('You rummage through the debris for sometime but do not find anything.');"
                linkChoice2 = "theGame.insertRoomDescrip('You yell until your hoarse and your throat is dry and parched. You realize you do not have any water on you.',)";
                linkChoice3 = "theGame.insertRoomDescrip('You find a stick of gum. Thirty-six cents and some pocket lint. Not much in the way of survival gear.');theGame.syncInventory(theGame.player);";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3]
                //item initialization for Cavern Floor
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks)
                this.rooms.push(room);
				
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
				
                //Water-worn Ravine
                roomTitle = "Water-worn Ravine"
                roomDescrip = "Climbing up seems impossible, but you notice a ledge jutting out from a water-worn ravine."
                choiceDescrip0 = "Attempt to squeeze through the ravine";
                choiceDescrip1 = "Climb back down";
                choiceDescrip2 = "Jump to your death";
                choiceDescrip3 = "Wait awhile to see if you can hear any of your team digging from above.";
                choiceDescrips = [choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3 ]
                
                //TODO: Enter the index in for the rooms this room connects to
                //The links to each one of our "pages"
                linkChoice0 = "theGame.loadRoom('Old Sewer Pipe')";
                linkChoice1 = "theGame.loadRoom('Cavern Floor')";
                //TODO: create a game over room
                linkChoice2 = "theGame.loadRoom('You Died')";
                linkChoice3 = "theGame.insertRoomDescrip('You listen intently...<br>Sometime passes and you can hear what sounds like a faint scratching sound. You lean out from the ledge toward the sound. The scratching gets louder. It dawns you that is not scratching but SCREECHING! Bats begin to swirl above your head.')";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3]
                
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks)
                this.rooms.push(room);//each room ends at this line where it is "pushed" into the end of the this.rooms array
                
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
				
                //Old Sewer Pipe
                roomTitle = "Old Sewer Pipe"
                roomDescrip = "You move blindly into the dark ravine carefully avoiding the bats. You pat your pockets looking for a lighter. Only to remember all you have is the stick of gum. Wandering in the dark with only an occasional stubbed-toe you feel <em>all hope</em> is lost. Then you begin to make out cobbled-stone brickwork. The sludge at your feet is giving off some kind of bioluminescence when it is disturbed."
                choiceDescrip0 = "Take off your torn over coat and form a make-shift torch so you can proceed.";
                choiceDescrip1 = "Continue along your path";
                choiceDescrip2 = "Feel around the walls";
                choiceDescrip3 = "Go back the way you came.";
                choiceDescrips = [choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3 ]
                
                //TODO: Enter the index in for the rooms this room connects to
                //The links to each one of our "pages"
                
                //here it looks complex  but i just ran methods inline and tested in the browswer one at a time so i could create a dynamic choice that would change based on the player's action.
                linkChoice0 = "theGame.insertRoomDescrip('After wrapping your overcoat around a piece of driftwood you stumbled over. You begin to stir it through the sludge. The area in your immediate vicinity brightens considerably, revealing an old grate covering what seems like some sort of entry or exit shaft.');" +
                    //ok javascript sucks because of all the strings it passes around
                    // if using the changeButton method and you get an error make sure the quotes are right. Using the browser console helps a lot
                    'theGame.changeButton("Remove the grate and go through", "theGame.loadRoom(\'Decrepit Living Quarters\')", "choice0" )';
                
                linkChoice1 = "theGame.insertRoomDescrip('You continue along your path. The sludge thins out and with it the light. Before to long your torch dims to nothing and you become completely blind. You feel along the wall to guide you back toward the luminescent sludge.')";
                linkChoice2 = "theGame.insertRoomDescrip('You begin to slide your hands over the slimy cobblestone wall. You jam your finger on something that appears cold and hard.')";
                linkChoice3 = "theGame.loadRoom('Cavern Floor')";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3]
                
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks)
                this.rooms.push(room);
				
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////                 
				// idx 3 (gary/jaize)
                //Decrepit Living Quarters
                roomTitle = "Decrepit Living Quarters"
                roomDescrip = "Bio-torch held out before you. Laid out before you is a run-down living quarters. All textiles have long rotted to dust. The fibers in the woods barely hold themselves together. Once a fine place. Now no longer. You hear mice squeal and scurry as you make your way in. There is a worn moss-covered dresser to the right of you. There seems to be nothing of value when the flash of something shiny catches your eye from atop the dresser. Moving closer you see that it is some sort of chalice.";
                
                choiceDescrip0 = "Grab the chalice";
                choiceDescrip1 = "Go back through the gate";
                choiceDescrip2 = "Examine the room";
                choiceDescrip3 = "Stare at the faint blue glow of your fungal torch.";
                choiceDescrips = [choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3 ];
                
                //The links to each one of our rooms
                linkChoice0 = "theGame.insertRoomDescrip('As you grab the chalice of off the dresser, you hear a thud as a small metal item falls to the floor. You bend down and quickly realize that a key was hidden under the chalice, and now rests at your feet.');theGame.changeButton(\"Put the chalice back\", \"theGame.insertRoomDescrip(\'You place the chalice back on the dresser.\')\", \"choice0\");theGame.changeButton(\"Take the key\", \"theGame.takeItem(theGame.player.currentRoom, theGame.player, 'golden key')\", \"choice3\")"
                linkChoice1 = "theGame.loadRoom('Old Sewer Pipe')"
                linkChoice2 = "theGame.insertRoomDescrip('Upon examining the room you notice a door grown over with moss and vines. After some clearing you try to open the door only to discover it is locked..');theGame.player.currentRoom.isExamined=true;" +
                'theGame.changeButton("Try to pull the stone door open.", "if(!theGame.player.currentRoom.isLocked){theGame.loadRoom(\'Flooded Stairwell\');}else{theGame.insertRoomDescrip(\'You pull on the door but the lock holds it firmly in place.\')}", "choice2" )'; 
                linkChoice3 = "theGame.insertText('You notice that the glow from the fungus is slowly getting dimmer over time.','roomDescrip')";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3];
                
                //TODO: figure out why javascript will not read this function when i pass it through
                //define the function for our key
                var keyUse = function() {
                    console.log("key is being used.")
                }
                //add the key to our room
                item0 = new Item("golden key", "/img/key.png", null, "A shiny key.");
                room.isExamined = false;
                item1 = new Item("chalice","img/lint.png", null, "A worn but valuable looking goblet.")
                var items = [item0, item1];
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks,items)
                this.rooms.push(room);
				
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////// 
				
				//(Gary)
                // Flooded Stairwell
                roomTitle = "Flooded Stairwell"//will need unique titles
                roomDescrip = "Upon entering the room. You notice you are at the top of what was once a stairwell. Water trickles through from overhead running down the stairs. As you descend the slimy steps you can go on no further. The stairs are completely submerged in water and it appears the area below is flooded.<br><br><p><em>You remind yourself that you are an excellent swimmer and have easily held your breath for several minutes.</em></p>"
                room.isExamined = true;
                //TODO: fill in the rest of the descriptions.
                choiceDescrip0 = "Go back the way you came.";
                choiceDescrip1 = "Take a deep breath and dive under the water.";
                choiceDescrip2 = "Check your pockets for anything handy.";
                choiceDescrip3 = "Look around for another route.";
                choiceDescrips = [ choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3];
                //TODO: Enter the index (change the number) in for the rooms this room connects too
                linkChoice0 = "theGame.loadRoom('Decrepit Living Quarters')";
                linkChoice1 = "theGame.loadRoom('Flooded Catacombs')";
                linkChoice2 = "theGame.syncInventory(theGame.player)";
                linkChoice3 = "theGame.insertRoomDescrip('You look around but you cannot seem to find another way.')";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3]
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks)
                this.rooms.push(room);
				
				// idx 5 (Gary)
                // Flooded Catacombs
                roomTitle = "Flooded Catacombs"//will need unique titles
                roomDescrip = "Taking a deep breath. You plunge beneath the icy water. As you swim down a bit the stairs level off into a flooded hallway. You see what appears to be light shining through a doorway 10 feet down the submerged path."
                room.isExamined = true;
                //TODO: fill in the rest of the descriptions.
                choiceDescrip0 = "Swim back up the stairs.";
                choiceDescrip1 = "Swim towards the light.";
                choiceDescrip2 = "You think the light is a trap. Avoid it and swim beyond.";
                choiceDescrip3 = "Gauge how much longer you can hold your breath.";
                choiceDescrips = [ choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3];
                //TODO: Enter the index (change the number) in for the rooms this room connects too
                linkChoice0 = "theGame.loadRoom('Flooded Stairwell')";
                linkChoice1 = "theGame.loadRoom('Submerged Room')";
                linkChoice2 = "theGame.loadRoom('Darkened Flooded Hallway')";
                linkChoice3 = "theGame.insertRoomDescrip('The thoughts <em> Will I make it in time??</em> flash through your head, but you know you have plenty of time to investigate the room and swim back.')";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3]
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks)
                this.rooms.push(room);
				
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                // idx 6 (Gary)
                // Submerged Room
                roomTitle = "Submerged Room"//will need unique titles
                roomDescrip = "Scrambling through the doorway. Sunbeams break through the water overhead. You swim up to find a stone and tiled room filled with debris. The cavern roof overhead collapsed inward. Above you can make out light shining through where the earth fell-in"
                room.isExamined = true;
                //TODO: fill in the rest of the descriptions.
                choiceDescrip0 = "Search for a way out of the room";
                choiceDescrip1 = "Yell to see if anyone hears you.";
                choiceDescrip2 = "Listen intently to see if you can hear any activity above.";
                choiceDescrip3 = "Swim back down the flooded corridor.";
                choiceDescrips = [ choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3];
                //TODO: Enter the index (change the number) in for the rooms this room connects too
                linkChoice0 = "theGame.insertRoomDescrip('You search the room, but the debris has buried all means of escape. The only way is UP.')";
                linkChoice1 = "theGame.insertRoomDescrip('You yell and yell. Finally you hear a response. It sounds like you may have grabbed the attention of something or <em>SOMEONE</em>...<br><br> Some time passes and you can hear rocks and gravel give way from up top. A familar voice yells, <br> <em>Hello!! Is that you? Grab this rope!</em>');theGame.takeItem(theGame.player.currentRoom,theGame.player,\'rope\')";
                linkChoice2 = "if(theGame.player.items[theGame.itemIndex('rope',theGame.player.items)].title == 'rope'){theGame.insertRoomDescrip('You see your teammates above scrambling to open up the gap. A couple lower the rope down shouting to you. As others flash lights taking in the scene.<br><br> <em>Grab the rope! Grab the rope</em>!')};";
                linkChoice3 = "theGame.loadRoom('Flooded Catacombs')";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3]
				
				//here we will create a rope to swap into our player inventory when click choice1
				item0 = new Item("rope", "/img/rope.png", null, "The means of your escape.");
				items=[item0];
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks,items)
                this.rooms.push(room);
				
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
				
				// idx 7 (Gary)
                // Darkened Flooded Hallway
                roomTitle = "Darkened Flooded Hallway"//will need unique titles
                roomDescrip = "You swim past the doorway but find no other way. Your oxygen level is getting dangerously low."
                room.isExamined = true;
                //TODO: fill in the rest of the descriptions.
                choiceDescrip0 = "Continue to swim and look for another exit";
                choiceDescrip1 = "Swim towards the surface to try and find air";
                choiceDescrip2 = "Go back the way you came";
                choiceDescrip3 = "Panic and do nothing";
                choiceDescrips = [ choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3];
                //TODO: Enter the index (change the number) in for the rooms this room connects too
                linkChoice0 = "theGame.loadRoom('You Died')";
                linkChoice1 = "theGame.loadRoom('You Died')";
                linkChoice2 = "theGame.loadRoom('Flooded Catacombs')";
                linkChoice3 = "theGame.loadRoom('You Died')";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3]
				
				//here we will create a rope to swap into our player inventory when click choice1
				item0 = new Item("rope", "/img/rope.png", null, "The means of your escape.");
				items=[item0];
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks,items)
                this.rooms.push(room);
				
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
				
				// idx 8 (Gary)
                // You Died
                roomTitle = "You Died"//will need unique titles
                roomDescrip = "Alas, you took one wrong turn to many and didn't make it"
                //TODO: fill in the rest of the descriptions.
                choiceDescrip0 = "Return to title screen";
                choiceDescrip1 = "Play again";
                choiceDescrip2 = "Give it another go";
                choiceDescrip3 = "Restart";
                choiceDescrips = [ choiceDescrip0, choiceDescrip1, choiceDescrip2, choiceDescrip3];
                //TODO: Enter the index (change the number) in for the rooms this room connects too
                linkChoice0 = "theGame.loadRoom(theGame.rooms[0].title)";
                linkChoice1 = "theGame.loadRoom(theGame.rooms[0].title)";
                linkChoice2 = "theGame.loadRoom(theGame.rooms[0].title)";
                linkChoice3 = "theGame.loadRoom(theGame.rooms[0].title)";
                choiceLinks = [linkChoice0, linkChoice1, linkChoice2, linkChoice3]
				
				//here we will create a rope to swap into our player inventory when click choice1
                room = new Room(roomTitle, roomDescrip,choiceDescrips, choiceLinks)
                this.rooms.push(room);
				
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
				
                //player starting room.
                theGame.player.currentRoom = theGame.rooms[0];
       }//end of creating rooms
        
        //inserts all the data into the page for the given room(s)
        loadRoom(roomTitle){
            try {
                var idx = this.roomIndex(roomTitle);
                var room = this.rooms[idx];
                this.player.currentRoom = room;
                this.insertText("Cave In | " + room.title,"tabTitle")
                this.insertText(room.title,"roomTitle");
                this.insertText(room.roomDescrip, "roomDescrip");

                //TODO: Do the following inside of a for loop rather than hard coding indices.
                this.insertText(room.choiceDescrips[0], "choice0");
                this.updateOnClick(room.choiceLinks[0], "choice0")

                this.insertText(room.choiceDescrips[1], "choice1");
                this.updateOnClick(room.choiceLinks[1], "choice1")

                this.insertText(room.choiceDescrips[2], "choice2");
                this.updateOnClick(room.choiceLinks[2], "choice2")

                this.insertText(room.choiceDescrips[3], "choice3");
                this.updateOnClick(room.choiceLinks[3], "choice3")
            }catch(err){
                console.log(err.message);
                console.log("Tried to load room: " + roomTitle + "\nThis room title may be mispelled or it doesn't exist yet. CREATE IT! DO IT!")
                //alert("loadRoom(roomTitle) Error: see console. ")
            }
            
        }//end loadRoom
        roomIndex(roomName) {
            for( var i = 0; i < this.rooms.length; i++) {
                if(roomName == this.rooms[i].title){
                    return i;
                }
            }
            return -1;
        }//end roomIndex
        itemIndex(itemName, arr) {
                for( var i = 0; i < arr.length; i++) {
                    if(itemName == arr[i].title){
                        return i;
                    }
                }
                return -1;
        }//end itemIndex
//        resetButtons(){
//          document.getElementById("choice0").style.backgroundColor = "#4CAF50";
//            document.getElementById("choice1").style.backgroundColor = "#4CAF50";
//            document.getElementById("choice2").style.backgroundColor = "#4CAF50";
//            document.getElementById("choice3").style.backgroundColor = "#4CAF50";
//        }
           
        //helper functions to make code more readable
        insertRoomDescrip(textString){
            document.getElementById('roomDescrip').innerHTML = textString;
        }
        insertOptionDescrip(textString, choiceN){
            document.getElementById(choiceN).innerHTML = textString;
            var i = 0;
            var btn = document.getElementById(choiceN);
            var startColor = btn.style.backgroundColor;
            
            function cycleColors() {
                  var color = ["green", "yellow", "green","yellow","green"];
                  btn.style.backgroundColor = color[i];
                  i = (i + 1) % color.length;
            }
            //rewrote setInterval function to include a repetitions variable to control how long it runs
            function setIntervalX(callback, delay, repetitions) {
                var x = 0;
                var intervalID = window.setInterval(function () {

                    callback();

                    if (++x === repetitions) {
                        window.clearInterval(intervalID);
                        document.getElementById(choiceN).style.backgroundColor = startColor;
                    }
                }, delay);
            }//end setIntervalX function
            
            setIntervalX(cycleColors, 175, 10)
        }
        insertText(textString, idValue) {
            document.getElementById(idValue).innerHTML = textString;
        }
        changeButton(btnText, btnOnClick, idValue){
            this.insertOptionDescrip(btnText, idValue);
            this.updateOnClick(btnOnClick, idValue)
            
            var savedColor = document.getElementById(idValue).style.backgroundColor
            //document.getElementById(idValue).style.backgroundColor = "blue";
            //document.getElementById(idValue).style.transition = "all 2s";
                   
        }//end changeButton
        updateOnClick(textString, idValue) {
            document.getElementById(idValue).setAttribute('onclick', textString);        
        }
       
        //delete an item
        deleteItem(Owner,itemTitle){
            var itmIdx = theGame.itemIndex(itemTitle, Owner.items);
            //remove the item but don't assign anywhere so it gets GC
            var delItem = Owner.items.splice(itmIdx,1);
            //removes the item from the inventory in our interface
            document.getElementById("item-" + delItem[0].title).remove();
            
        }
        //leave item in x from inventory
        leaveItem(Giver, Receiver, itemTitle){
            var itmIdx = theGame.itemIndex(itemTitle,Giver.items);
            var itemSplice;
            //check if item exists
            if(Giver.items[itmIdx]){
                // splice item from giver items
                //splice returns an array even with one item.
                itemSplice = Giver.items.splice(itmIdx,1);
                
                //remove img from interface
                document.getElementById("item-" +itemSplice[0].title).remove();
                // push item to receiver items
                Receiver.items.push(itemSplice[0]);
                console.log("you left the item: " + itemSplice[0].title)
            }
        }
        //move item from x to inventory
        takeItem(Giver, Receiver, itemTitle){
            
            var itmIdx = theGame.itemIndex(itemTitle,Giver.items);
            var itemSplice;
            //check if item exists
            if(Giver.items[itmIdx]){
                // splice item from giver items
                //splice returns an array even with one item.
                itemSplice = Giver.items.splice(itmIdx,1);
                // push item to receiver items
            //add img to interface
                var itemplaceHolder = "item-" + itemTitle;
                
                if(!(document.getElementById(itemplaceHolder))) {
                var img = document.createElement('img');
                    img.src =itemSplice[0].imgPath;
                    //give specific id so we can remove it later
                    img.id = "item-" + itemSplice[0].title;
                    //display the item in the user interface
                    //TODO: figure out why is saying "inventory" is a null object.
                    var inv = document.getElementById("inventory");
                    inv.appendChild(img);
                    
                }//end if checking so we don't add duplicate items to inventorty GUI
            }//end if checking if item exists
            Receiver.items.push(itemSplice[0]);
            document.getElementById("itemData").innerHTML = `You received an item: ${itemSplice[0].title}`
            
            
            
        }//end of takeItem()
        syncInventory(Player){
            for(var i = 0; i < Player.items.length; i++){
                console.log(Player.items[i])
                theGame.takeItem(Player, Player, Player.items[i].title)
            }
        }
           
       }//end of Game object