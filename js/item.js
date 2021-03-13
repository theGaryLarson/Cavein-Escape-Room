class Item {
//    //when passing in your function define it first 
//    //here is an example
//     The Definition (defining) of your function:
//    let sayHello = function(sayHi){
//        console.log(sayHi);
//    }
//    
//    //then pass your function in like this when creating an item
//    
//    var item0 = new Item("key", "/my/img/path.png", sayHello)
//    //using the function would look like this
//    
//    item0.use();
    
    //Item constructor
    constructor(itemTitle, imgPath, specifiedUseFunction, itemDescrip){
        //item images should be formatted at 40px x 40px for best image results.
        this.title = itemTitle;
        this.imgPath = imgPath;
        this.itemDescrip = itemDescrip;
        //how to assign a function that is passed in as an argument
        this.specifiedUseFunction = specifiedUseFunction;
    }//end constructor
    
    use(){
        if(this.specifiedUseFunction){
            this.specifiedUseFunction;
        }
        else {
            //TODO: display this information to the user.
            document.getElementById("itemData").innerHTML = `${this.itemDescrip}`;
        }
    }
    
}//end item class