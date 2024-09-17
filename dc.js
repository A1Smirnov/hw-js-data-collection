console.log('-----------------------------------');
console.log('%cPart 1: Refactoring Old Code', 'font-size: 16px');
console.log('-----------------------------------');

// CSV data
const data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Function to parse CSV data
// Transform our csvString in a 2-dimensional array
function parseCSV(csvString) {
    // That "split" function transform line into rows with separator "\n"
    const rows = csvString.split('\n').map(row => row.split(','));
    // That "row" function split the line into a cells
    return rows;
}

// Function to calculate column widths
function calculateColumnWidths(rows) {
            // rows[0].map((_, colIndex) => {...} - By using this we create array with columns width by parsing indexes of columns
    const columnWidths = rows[0].map((_, colIndex) => {
        // Finding the max.width for each row across all strings
        return rows.reduce((maxWidth, row) => Math.max(maxWidth, row[colIndex].length), 0);
        // Finally we have array with the max width for each column
    });
    return columnWidths;
}

// Function to format and print a row
function formatRow(row, columnWidths) {
    // Format each line
    return row.map((cell, colIndex) => {
        // Calculate amount of needed space to align cells (we know the max width and spaces to border) - adding space to border
        const padding = columnWidths[colIndex] - cell.length + 2;
        // Adds cells, spaces, vertical line (if it's not last line)
        return cell + ' '.repeat(padding) + (colIndex < row.length - 1 ? '|' : '');
        // Unite all cells in one line
    }).join('');
}

// Function to print a table
function printTable(rows) {
    // Calculating rows width
    const columnWidths = calculateColumnWidths(rows);

    // Print header row using formatRow
    console.log(formatRow(rows[0], columnWidths));

    // Print separator row considering to the width of columns
    console.log(columnWidths.map(width => '-'.repeat(width + 2)).join('+'));

    // Print data rows (except headers i=1)
    for (let i = 1; i < rows.length; i++) {
        console.log(formatRow(rows[i], columnWidths));
    }
}

// Calling for function - Parse the CSV data
const rows = parseCSV(data);

// Calling for function - Print the table
printTable(rows);


console.log('-----------------------------------');
console.log('%cPart 2: Expanding Functionality', 'font-size: 16px');
console.log('-----------------------------------');

// CSV data
const data2 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Function to parse CSV data2
function parseCSV(csvString) {
    // Split the CSV data2 into rows2 and then each row into columns
    const rows2 = csvString.split('\n').map(row => row.split(','));
    return rows2;
}

// Function to calculate column widths
function calculateColumnWidths(rows2) {
    // Determine the number of columns from the first row

    // !!! numColumns - Declare a variable that stores the number of columns in each row of data2 within the CSV. !!!

    const numColumns = rows2[0].length;
    
    // Calculate the maximum width for each column

    // !!! expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data2 !!!

    // now dynamically determines the maximum width for each column, taking into account that the number of columns may vary depending on the first row. This allows handling any number of columns in CSV data2.

    const columnWidths = Array(numColumns).fill(0);
    for (const row of rows2) {
        row.forEach((cell, colIndex) => {
            columnWidths[colIndex] = Math.max(columnWidths[colIndex], cell.length);
        });
    }
    
    return columnWidths;
}

// Function to format and print a row
function formatRow(row, columnWidths) {
    return row.map((cell, colIndex) => {
        const padding = columnWidths[colIndex] - cell.length + 2; // Add space for border
        return cell + ' '.repeat(padding) + (colIndex < row.length - 1 ? '|' : '');
    }).join('');
}

// Function to print a table
function printTable(rows2) {
    const columnWidths = calculateColumnWidths(rows2);

    // Print header row
    console.log(formatRow(rows2[0], columnWidths));

    // Print separator row
    console.log(columnWidths.map(width => '-'.repeat(width + 2)).join('+'));

    // Print data2 rows2
    for (let i = 1; i < rows2.length; i++) {
        console.log(formatRow(rows2[i], columnWidths));
    }
}

// Parse the CSV data2
const rows2 = parseCSV(data2);

// Cache this two-dimensional array in a variable for later use.
const cachedRows = rows2;

// Print the table
printTable(cachedRows);

// Bugtracking: changed in part 2 "row" -> "rows2" and "data" -> "data2" to avoid conflicts

console.log('-----------------------------------');
console.log('%cPart 3: Transforming Data', 'font-size: 16px');
console.log('-----------------------------------');

// CSV data
const data3 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Function to parse CSV data
function parseCSV(csvString) {
    // Split the CSV data into rows and then each row into columns
    const rows3 = csvString.split('\n').map(row => row.split(','));
    return rows3;
}

// !!! NEW Function "transformToObject" to transform rows3 into objects with column headings as keys

function transformToObjects(rows3) {
    // Extracting header to "headers" from the first line in original CSV data, also converting headers to lowercase 
    const headers = rows3[0].map(header => header.toLowerCase());
    // "Slice" create new array with the all Data except headers (except first line)
    return rows3.slice(1).map(row => {
        //Each line will be an object
        //Creating new empty object rowObject for that
        const rowObject = {};
        // For each data we add to object properties with keys = headers
        row.forEach((cell, index) => {
            rowObject[headers[index]] = cell;
        });
        return rowObject;
    });
}

// Parse the CSV data using function above
const rows3 = parseCSV(data3);

// Transform rows4 into objects using function above
const objectsArray = transformToObjects(rows3);

// Output the transformed to object data
console.log(objectsArray);

console.log('-----------------------------------');
console.log('%cPart 4: Sorting and Manipulating Data', 'font-size: 16px');
console.log('-----------------------------------');

// CSV data
const data4 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Function to parse CSV data
function parseCSV(csvString) {
    // Split the CSV data into rows and then each row into columns
    const rows4 = csvString.split('\n').map(row => row.split(','));
    return rows4;
}

// Function to transform rows4 into objects with column headings as keys
function transformToObjects(rows4) {
    // Extracting header to "headers" from the first line in original CSV data, also converting headers to lowercase 
    const headers = rows4[0].map(header => header.toLowerCase());
    // "Slice" create new array with all data except headers (except first line)
    return rows4.slice(1).map(row => {
        // Each line will be an object
        // Creating new empty object rowObject for that
        const rowObject = {};
        // For each data we add to object properties with keys = headers
        row.forEach((cell, index) => {
            rowObject[headers[index]] = cell;
        });
        return rowObject;
    });
}

// Parse the CSV data using the function above
const rows4 = parseCSV(data4);

// Transform rows4 into objects using the function above
const objectsArray2 = transformToObjects(rows4);

// Delete last value from objects array
objectsArray2.pop();

// Add new object at second line, index=1
objectsArray2.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add new object to the end
objectsArray2.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Calculate the average age
let sumAge = 0;
// Cycle of every element in objects arrray
// obj - current variable in cycles
for (const obj of objectsArray2) {
    // sumAge - sum all ages values
    // But age value is in "string"...
    // Transform string value of age to numbers
    sumAge += parseInt(obj.age);
}
// Average = sum of all ages div to amount of people
const averageAge = sumAge / objectsArray2.length;

// Output the modified array and the average age
console.log(objectsArray2);
console.log('Average age:', averageAge);


console.log('-----------------------------------');
console.log('%cPart 5: Full Circle', 'font-size: 16px');
console.log('-----------------------------------');

// Making a function to reverse transformation to CSV
function objectsToCSV(objectsArray) {
    //Check if it's not empty
    if (objectsArray.length === 0) return '';

    // Extract headers from the object's keys
    const headers = Object.keys(objectsArray[0]);

        // Bugfix #1: Capitalize the first letter of each header
        const capitalizedHeaders = headers.map(header => 
            header.charAt(0).toUpperCase() + header.slice(1)
        );

    // Add headers back to new array separated by comma
    const headerRow = capitalizedHeaders.join(',');

    // Create data rows for each object
    // In the right order taking key's values and combine them separated by comma 
    const dataRows = objectsArray.map(obj => {
        return capitalizedHeaders.map(header => obj[header.toLowerCase()]).join(',');
    });

    // Joining header and data rows separated by `\n`
    return [headerRow, ...dataRows].join('\n');
}

// Use function to transform everything back
const csvOutput = objectsToCSV(objectsArray2);

// Bufix #2. Outputting data in one line, and separated with `\n`
console.log(csvOutput.replace(/\n/g, '\\n'));

// Logging modified array and the average age
console.log('Average age:', averageAge);