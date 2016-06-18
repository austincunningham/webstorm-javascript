/**
 * Created by austin on 18/06/2016.
 */
const image = document.getElementById('img1');
alert('javascript says Image 1 height is ' + image.height);

//const image2 = $('#img2');
//alert('jQuery method 1 says Image 2 height is ' + image2.height());

//Alternatively use a more compact version:
//alert('jQuery method 2 Image 3 height is ' + $('#img3').height());

const images = document.getElementsByName('imgs');
for (let i = 0; i < images.length; i++)  {
  alert('js getElementByName Image number ' + i + ' is ' + images[i].height);
};

const $images = $('[name="imgs"]');
alert('There are ' + $images.length + ' images with name=\"imgs\" in this page');
let index = 0;
$images.each(function () {
  alert('Image ' + index + ' height is ' + $(this).height());
  index += 1;
});