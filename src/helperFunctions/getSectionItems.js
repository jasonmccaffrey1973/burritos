/** -----------------------------------------------------
 * @param {*} id
 ** ----------------------------------------------------- */
const protienArray = [
    {
        id: 1,
        label: 'Chicken',
        cost: 9.00,
        calories: 150,
        image: '../img/chicken.png'
    }, {
        id: 2,
        label: 'Steak',
        cost: 10.00,
        calories: 180,
        image: '../img/steak.png'
    }, {
        id: 3,   
        label: 'Pork',
        cost: 9.00,
        calories: 185,
        image: '../img/pork.png'
    }, {
        id: 18,
        label: 'Ground Beef',
        cost: 8.50,
        calories: 145,
        image: '../img/ground-beef.png'
    }, {
        id: 4,
        label: 'Vegtable',
        cost: 8.00,
        calories: 110,
        image: '../img/vegtables.png'
    }
]

const riceArray = [
    {
        id: 5,
        label: 'White Rice',
        cost: 0,
        calories: 210,
        image: '../img/white-rice.png'
    }, {
        id: 6,
        label: 'Brown Rice',
        cost: 0,
        calories: 210,
        image: '../img/brown-rice.png'
    }
]

const beansArray = [
    {
        id: 7,
        label: 'Black Beans',
        cost: 0,
        calories: 130,
        image: '../img/black-beans.png'
    }, {
        id: 8,
        label: 'Pinto Beans',
        cost: 0,
        calories: 130,
        image: '../img/pinto-beans.png'
    }
]

const salsaArray = [
    {
        id: 9,
        label: 'Tomato Salsa',
        cost: 0,
        calories: 20,
        image: '../img/tomato-salsa.png'
    }, {
        id: 10,
        label: 'Pico de Gallio',
        cost: 0,
        calories: 35,
        image: '../img/pico-de-gallio.png'
    }, {
        id: 11,
        label: 'Salsa Verde',
        cost: 0,
        calories: 25,
        image: '../img/salsa-verde.png'
    }, {
        id: 12,
        label: 'Mango Salsa',
        cost: 1.00,
        calories: 110,
        image: '../img/mango-salsa.png'
    }
]
const toppingsArray = [
    {
        id: 13,
        label: 'Jalapenos',
        cost: 0,
        calories: 5,
        image: '../img/jalapenos.png'
    }, {
        id: 14,
        label: 'Grilled Peppers and Onions',
        cost: .50,
        calories: 80 ,
        image: '../img/vegtables.png'
    }, {
        id: 15,
        label: 'Shredded Cheese',
        cost: 0,
        calories: 100,
        image: '../img/shredded-cheese.png'
    }, {
        id: 16,
        label: 'Sour Cream',
        cost: 0,
        calories: 90,
        image: '../img/sour-cream.png'
    }, {
        id: 17,
        label: 'Lettuce',
        cost: 0,
        calories: 10,
        image: '../img/lettuce.png'
    }
]

export const getSections = () => {
    return [
        {
          name: 'protien', 
          title: 'Protein or Veggie', 
          limit: 1
        }, {
          name: 'rice', 
          title: 'Rice',
          limit: 2
        }, {
          name: 'beans', 
          title: 'Beans', 
          limit: 2
        }, {
          name: 'salsa', 
          title: 'Salsas', 
          limit: 3
        }, {
          name: 'toppings', 
          title: 'Toppings and extras', 
          limit: 0
        }]
}



const getSectionItems = type => {
    const upperType = type.toUpperCase()
    if (upperType === 'PROTIEN') return protienArray
    if (upperType === 'RICE') return riceArray
    if (upperType === 'BEANS') return beansArray
    if (upperType === 'SALSA') return salsaArray
    if (upperType === 'TOPPINGS') return toppingsArray
    return false
  };

  export default getSectionItems
