var groupedFruits = [
  { group: 'Fruits', value: 'Apple' },
  { group: 'Fruits', value: 'Banana' },
  { group: 'Fruits', value: 'Orange' },
  { group: 'Meats', value: 'Beef' },
  { group: 'Meats', value: 'Chicken' },
  { group: 'Meats', value: 'Pork' },
  { group: 'Vegetables', value: 'Carrot' },
  { group: 'Vegetables', value: 'Lettuce' },
  { group: 'Vegetables', value: 'Onion' }
];
var widget = new AutoComplete('search_bar', groupedFruits);