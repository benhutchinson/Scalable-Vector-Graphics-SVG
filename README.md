An Introduction to Scalable Vector Graphics
===========================================

Over Christmas, I decided to learn some of the basics of Scalable Vector Graphics (SVG).  The below offers the basic outline of a talk I subsequently gave at Makers Academy on the topic.  This is meant to serve as a very basic introduction to SVG and scratch the surface of some of its key selling points.  My presentation is best consumed with a basic grasp of jQuery, CSS3, and HTML.  The files are hosted here on Heroku.

###What Is A Scalable Vector Graphic?  Why Should You Care?
SVG graphics are lossless.  You can scale them up as much as you like without suffering any degradation in quality and they are typically small in file size too.  Oh, and just one more thing.. with SVG, you have the ability to dynamically alter and control internal elements, shapes and attributes of your graphics.  You can change strokes, alter shapes, adjust fills in your browser on the fly and take advantage of powerful animation libraries.  Put together, these features render SVG perfect for the web, well-supported, well-equipped for responsive design, great for mobile, and fantastic for creativity.  Chrome supports SVG out of the box.

###Example #1 : How Could You Get Started With SVG Today?
The front-page of my presentation here uses just one single 4kb SVG file.  The sliding animation is simply controlled via CSS but this illustrates quite simply some of the beauty of SVG and its crisp, smooth, lossless characteristics.  You can contrast this with an equivalent page using a small 200px 4kb GIF file I found here.  008 link.  Thus, what this means for you today is that where you are presented with a choice between using an SVG file or another in perhaps GIF or JPG format, you may find SVG more flexible, placing you better for customers on anything from mobile to 5k retina-like screens.  And if you do find an SVG file, don't be afraid to play with it a touch.

###Example #2 : The Next Step : Going Beneath The Bonnet Of SVG 
Assuming you find an SVG file, you may decide that you would like to customise it.  For example, you may like to modify just small elements of the graphic and style individual shapes through CSS.  Alternatively, you may choose to alter the fill or stroke of an element in response to a jQuery event such as a click or mouseover and essentially manipulate the internals of a graphic similar to how you may manipulate the HTML DOM with jQuery.  To do this, you need to understand how SVG files are put together, therefore let us look at an example.  

All SVG files are essentially just collections of shapes and lines or paths.  These elements take a stroke and fill.  To put things simply, the '0' in the '007' logo could just be seen as a couple of rotated ellipses or even closed line elements and the crocodile below seen as a structure of polygons.  To help you further, this is best illustrated with some simple mark-up.   

SVG elements are described in mark-up.


```

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 648 500" enable-background="new 0 0 648 500" xml:space="preserve">
<g>
	<rect x="81.479" y="30.406" fill="#989898" width="485.58" height="345.509"/>
	<polygon fill="#818181" points="81.479,375.915 6.775,450.619 641.765,450.619 567.06,375.915 	"/>
	<polygon fill="#676767" points="620.983,469.296 23.345,469.296 4.669,450.619 639.659,450.619 	"/>
	<rect x="100.156" y="77.096" fill="#0DAE8A" width="448.228" height="261.466"/>
</g>
</svg>

```

![Computer](https://github.com/benhutchinson/SVG/blob/master/public/img/computer.png)


By understanding the basic structure of an SVG file, you can gain an additional level of control over a graphic.   

Let us look at some examples:

where can i show an svg file.
need to show 009.svg file
009, stroke + TM

![SVG Snap Logo](https://github.com/benhutchinson/SVG/blob/master/public/img/crocodile.png)



Here I will show you some simple ways to take an additional level of control over an SVG file, but in order to this,

Just as HTML

Assuming that you have found an SVG element, you 

If you are comfortable with HTML 

described using geometric shapes, described mathematically and quite precise
they are not described on a pixel-by-pixel basis.



###Example #3 : Let's Use A Library



https://github.com/ConnorAtherton/walkway

- An interesting case study : Vox Media Xbox One Review (http://product.voxmedia.com/2013/11/25/5426880/polygon-feature-design-svg-animations-for-fun-and-profit)








###What Is Is Not?
- SVG files are not photos...
- The more I learned about the different ways to play with and animate SVG files, the more I appreciated the ease of CSS.  There are some [good tutorials on some CSS transition properties here](http://www.atozcss.com/episodes/) that even touch on some basic 3D transformations such as ```perspective``` for example.
- It is good to have an understanding of how SVG files are composed mathematically, their co-ordinate grid, and how they can be controlled, but clearly for advanced illustrations, using dedicated graphics software such as Adobe Illustrator will be more intuitive.  [Adobe's Project Parfait](http://www.adobe.com/uk/creativecloud/extract.html) also offers insight into how tightly graphics software is being integrated into the web development process.
- More [advanced blending-mode properties](http://webplatform.adobe.com/) seem to be in development.

###Where To Learn More

###Resources & Tutorials
- Caniuse.com
- [Adobe provide a bit of an overview of some of the different image types that exist](https://helpx.adobe.com/illustrator/how-to/illustrator-bitmap-vs-vector.html)



###Technologies

- [Snap SVG, a JavaScript SVG library](http://snapsvg.io).
- SVG
- Inkscape
- Node.js, Express Server, EJS Templating

###Sources
- Snap SVG Raphael
- CSS Tricks: A Compendium Of SVG Information (http://css-tricks.com/mega-list-svg-information/)

- Simpl / Fun (https://jonsuh.com/blog/animate-svg-with-css/)
- MDN
- http://tutorials.jenkov.com/svg/svg-transformation.html
- Example (http://codepen.io/miukimiu/pen/Igouf)

http://image.online-convert.com/convert-to-svg

