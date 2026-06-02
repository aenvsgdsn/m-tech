const mammoth = require('mammoth');
const xlsx = require('xlsx');
const fs = require('fs');

async function extract() {
    try {
        console.log("Extracting DOCX...");
        const result = await mammoth.extractRawText({path: 'd:\\mtechproject\\MTech_Developer_Documentation_v4_0.docx'});
        fs.writeFileSync('d:\\mtechproject\\doc_content.txt', result.value);
        console.log("DOCX extracted and saved to doc_content.txt");
        
        console.log("Extracting XLSX...");
        const workbook = xlsx.readFile('d:\\mtechproject\\MTECH_Master_Data (1).xlsx');
        let sheetData = "";
        workbook.SheetNames.forEach(sheetName => {
            sheetData += "\n\n--- Sheet: " + sheetName + " ---\n\n";
            sheetData += xlsx.utils.sheet_to_csv(workbook.Sheets[sheetName]);
        });
        fs.writeFileSync('d:\\mtechproject\\xls_content.txt', sheetData);
        console.log("XLSX extracted and saved to xls_content.txt");
    } catch(err) {
        console.error(err);
    }
}
extract();
