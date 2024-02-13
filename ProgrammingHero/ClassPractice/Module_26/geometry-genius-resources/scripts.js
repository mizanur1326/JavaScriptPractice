function TriangleCalculate(){
    // get triangle base value
    const triangleBase = document.getElementById('triangleBase');
    const base = parseFloat(triangleBase.value);
    // console.log(base)

    // get triangle height value
    const triangleHeight = document.getElementById('triangleHeight');
    const height = parseFloat(triangleHeight.value);
    // console.log(height)


    const area = 0.5 * base * height;
    // console.log('Area of Triangle is ' + area);

    // display triangle area
    const triangleArea = document.getElementById('triangleArea');
    triangleArea.innerText = area;

    
}