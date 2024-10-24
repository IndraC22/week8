//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

// Menu Shoes

//class shoe
  //brand
  //style

class Shoe{
    constructor(brand, style){
        this.brand = brand;
        this.style = style;
    }
}

//class Menu 

class Menu{
    constructor(){
         //shoes array
        this.shoes = [];
    }

    //add shoes
    //prompt for a brand
    //prompt for a style
    //create new shoe and push shoe into an array
   addShoe(){
    let shoeBrand = prompt("Enter shoe brand:");
    let shoeStyle = prompt("Enter shoe style:");
    this.shoes.push(new Shoe(shoeBrand, shoeStyle));
   }




 //delete shoes
 deleteShoe(){
    let shoeIndex = prompt("Enter shoe index to DELETE:");
    this.shoes.splice(shoeIndex, 1);
 }

 //view shoes
   viewShoes(){
    let displayShoes = '';
    for(let i=0; i < this.shoes.length; i++){

        displayShoes += `
        ${i}) ${this.shoes[i].brand} ${this.shoes[i].style}`
    }


    alert(`
    Shoe Inventory:
    -----------------------
    ${displayShoes}  
    `)
   }

   //see a menu

  showMainMenu(){
    return prompt(`
      Main Menu: 
      ---------------------
      0) Exit Menu
      1) Add Shoe
      2) Delete Shoe
      3) View All Shoes
      `);
  }
 //start the menu
 start(){
  let selection = this.showMainMenu();

  while(selection !=0){

    switch(selection){

      case "1": this.addShoe();
      break;

      case "2": this.deleteShoe();
      break;

      case "3": this.viewShoes();
      break;

      default: selection = 0;

    }
    selection = this.showMainMenu();
  }
  alert("Exiting Menu...goodbye!");
 }

}
 

 //instantiate the menu and invoke the start method

let menu = new Menu();


menu.start();