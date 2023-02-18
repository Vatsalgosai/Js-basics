let friends = [
    {
      name: 'Anna',
      books: ['Bible', 'Geeta', 'Harry Potter'],
      age: 20
    },
    {
      name: 'Bob',
      books: ['War and Peace', 'Geeta', 'Quran'],
      age: 22
    },
    {
      name: 'Alice',
      books: ['The Monk', 'Pride and Prejudice', 'Good Morning'],
      age: 21
    }
   ];

   let allbooks = []
   for(let i =0; i<friends.length; i++){
    for(let j = 0;j<friends[i].books.length;j++){
      let a = friends[i].books[j];
       allbooks.push(a)
    }
    }
    console.log(allbooks)