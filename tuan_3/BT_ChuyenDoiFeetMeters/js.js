let a = +prompt('Nhập số Feet: ');
let b = +prompt('Nhập số Meters: ');

function footToMeter(foot){
    let meter = 0.305 * foot;
    document.getElementById('n1').innerHTML = 'Meter là ' + meter;
}
footToMeter(a);

function MetertoFoot(meter){
    let foot = 3.279 * meter;
    document.getElementById('n2').innerHTML = 'Foot là ' + foot;
}
MetertoFoot(b);