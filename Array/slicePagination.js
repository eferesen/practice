const data = ['adam', 'Adrain', 'Bella', 'Betty', 'Cathy'];
const pageSize = 2;
const currentPage = 3;
const totalPages = Math.ceil(data.length / pageSize);

/*
            0        2
Page 1 = ['adam', 'Adrain']
            2        4
Page 2 = [Bella', 'Betty']
            4
Page 3 = ['Cathy']
*/

const start = (currentPage - 1) * pageSize;
const end = pageSize * currentPage

console.log(start)
console.log(end)

const someSlice = data.slice(start, end);
console.log(someSlice)