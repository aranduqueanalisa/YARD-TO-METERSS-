function convertMe() {
    console.log('Button clicked!'); 
    const yards = document.getElementById('yardsInput').value;
    if (yards) {
        const meters = (yards * 0.9144).toFixed(2); 
        console.log('Yards:', yards, 'Meters:', meters); 
        document.getElementById('metersOutput').value = meters + ' meters';
    }
}

document.getElementById('convertButton').addEventListener('click', convertMe);