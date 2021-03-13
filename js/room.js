class Room {
           constructor(title,descrip,choiceDescrips, choiceLinks,items= new Array(0)) {
               this.title = title;
               this.roomDescrip = descrip;
               this.choiceDescrips = choiceDescrips;
               this.choiceLinks = choiceLinks;
               //TODO: add feature to reveal more after examing a room. (done: gary)
               this.isExamined = false;
               this.isLocked = true;
               this.items = items;
           }
}//end of Room object