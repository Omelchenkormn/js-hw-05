class Storage {    //создали класс хранилище 
    constructor( items ) {
        this.items = items;
    }
    
    getItems() {  //возвращает массив текущих товаров
        return this.items;
    }

    addItem(item) { //получает новый товар и добавляет его к текущим
        return items.push(item);  
    }
    removeItem(item) {  //получет товар и, если он есть, удаляет его из текущих
        let index = this.items.indexOf(item);
        if (index > -1) {
            return this.items.splice(index, 1);
        }
    }

}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]