function sumUpDiagonals(matrix) {
    // creamos el objeto llamado suma diagonal
    let sumDiagonals = { primary: 0, secondary: 0 };
  
    // creamos la variable length en la matrix
    let matrixLength = matrix.length;
  
    // interaccion de izq a derecha 
    for (var i = 0; i < matrixLength; i++) {
      sumDiagonals.primary += matrix[i][i];
      sumDiagonals.secondary += matrix[i][matrixLength - i - 1];
    }

    return sumDiagonals;
  }
  
  console.log(sumUpDiagonals(matrixExample)); 
  
  
  
  
  function loop (start, test, update, body) {
    for (var value = start; test(value); value = update(value)) {
      body(value);
    }
  }