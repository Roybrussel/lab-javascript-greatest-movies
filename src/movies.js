// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(){
    const listOfDirectors = movies.map(movies => movies.director) 
    return listOfDirectors
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = listOfMovies => {
    let stevenMovies = listOfMovies.filter(list => list['director'] === 'Steven Spielberg');  
    let solution = stevenMovies.filter (dramas => dramas['genre'].includes('Drama')); 
    return solution.length;}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratingsOnly = [];
movies.forEach((r) => {
  ratingsOnly.push(r.rate);
});
function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let totalRate = arr.reduce((acc, currVal) => {
    if (currVal.rate) {
      return acc + currVal.rate;
    } else {
      return acc;
    }
  }, 0);
  return Number((totalRate / arr.length).toFixed(2));
}
ratesAverage(ratingsOnly);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate() {

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average