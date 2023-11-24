function convertCSVToTXT() {
    const csvFileInput = document.getElementById('csvFileInput');
    const txtOutput = document.getElementById('txtOutput');
    const downloadLink = document.getElementById('downloadLink');

    const file = csvFileInput.files[0];
    if (!file) {
        alert('Please select a CSV file.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const csvData = e.target.result;
        const txtData = convertCSVToTXTFunction(csvData);

        txtOutput.textContent = txtData;
        
        // ใช้ชื่อไฟล์ CSV ในการสร้างชื่อไฟล์ TXT
        const txtFileName = file.name.replace('.csv', '.txt');
        
        downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(txtData);
        downloadLink.style.display = 'block';
        
        // กำหนดชื่อไฟล์ในลิงก์ดาวน์โหลด
        downloadLink.download = txtFileName;
    };

    reader.readAsText(file);
}

function convertCSVToTXTFunction(csvData) {
    const rows = csvData.split('\n');
    const txtRows = [];

    for (const row of rows) {
        const cells = row.split(',');
        const txtRow = cells.join('\t');
        txtRows.push(txtRow);
    }

    return txtRows.join('\n');
}
