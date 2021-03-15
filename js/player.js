class Player {
    constructor() {
        this.hasKey = false;
        this.items = new Array();
        //room idx 0 should be setup as the starting room.
        this.currentRoom;
        
        //starting items
        var item0 = new Item("lint", "img/lint.png", null, "Some pocket lint. You ponder adding it to your belly button lint collection but some may consider it cheating.");
                
        var item1 = new Item("loose change", "img/change.png", null, "Hmm.. who knows maybe there will be a vending machine around here somewhere.")

        var item2 = new Item("bubble gum", "img/gum.png", null, "Well, at least it hasn't been chewed. If i get thirsty this might help sate my thirst.")
        this.items = [item0, item1, item2]
    }
}//end player class
