/**
 * Created by austin on 18/06/2016.
 */
const image = document.getElementById('img1');
alert('javascript says Image 1 height is ' + image.height);

const image2 = $('#img2');
alert('jQuery method 1 says Image 2 height is ' + image2.height());

//Alternatively use a more compact version:
alert('jQuery method 2 Image 3 height is ' + $('#img3').height());