<img src="https://cdn.cogecolive.com/prod-20180515/generic_1526397738636915_ori.jpeg" alt="Mia Immagine">

<h1>Flappybone</h1>

<h2>Advanced Coding Tools and Methodologies</h2>

<p>01/07/2019 <br>
  <br>FRANCESCO LORENZO <br>
  <br>CREMONA (CR)
</p>

<h2>Owner and Rights</h2>
<p>
The project was entirely realized by Francesco Lorenzo, graduates in Biomedical Engineeer at University of Padua and student of Music and Acoustics Engineering at Politecnico of Milan. <br>
To him belongs all the rights of the application.
</p>
 
<h2>Goals</h2>
<p>
The project was born from the idea of wanting to try my hand at an arcade video game with the possibility of playing through a musical instrument.
Being a trombonist, it was easy for me to choose the <b>trombone</b> for this purpose, and <br> I chose to revisit <b>flappy bird</b>, a popular game during 2013, with the possibility of interacting with harmonic sounds.<br>
The aim of the game is to try to make the bird fly passing through the largest number of pipes possible, overcoming the force of gravity, playing sounds with different heights depending on the arrangement of the pipes that run in the background.<br>
Unlike other instruments such as the piano, the flute or the trumpet, the trombone, thanks to the coulisse, is capable of producing sounds in a continuous manner, the so-called <b>glissato</b>, thanks to which the little bird can fly in such a way
completely fluid and natural.
</p>

<h2>Specifics</h2>

<p>
The application is written in HTML and CSS, for the graphics, while in Javascript for the logic. <br>
  This project includes three external libraries, that are: <br>
  
  <ol>
	<li>ml5.js</li>
		<blockquote>
			<a href="https://ml5js.org" >
			https://ml5js.org
			</a>
		</blockquote>
	<li>p5.dom.js</li>
		<blockquote>
			<a href="https://p5js.org/reference/#/libraries/p5.dom" >
			https://p5js.org/reference/#/libraries/p5.dom
			</a>
		</blockquote>
	<li>p5.sound.js</li>
		<blockquote>
			<a href="https://p5js.org/reference/#/libraries/p5.sound" >
			https://p5js.org/reference/#/libraries/p5.sound
			</a>
		</blockquote>
</ol>
  
  <br>The <b>ml5.js library</b> uses a pitch detection algorithm
to estimate the fundamental frequency of an audio signal, and returns a decimal number that is used to associate
the position along the axis of the bird's ordinates with the frequency in question. <br>
Moreover, the <b>p5.dom.js library</b> is used for canvas, text and images menagement, while the the <b>p5.sound.js library</b> is used for web audio features, such as the AudioContext creation and the microphone activation.

The application is managed by a principal javascript file, <b>sketch.js</b>, which regulates the game mechanics creating the AudioContext, starting the pitch detection function, managing the score and calling the two files bird.js and pipe.js.<br>
Actually, the files <b>bird.js</b> and <b>pipe.js</b> operate indipendently the bird and the pipes variables, managing respectively the position and the displacement of the bird (governed by the pitch detection algorithm) and the randomic position and displacement of the pipes.

The title and score string are reproduced using the same font as the original game,
managed through a proper .css file: <b>flappynone.css</b>.
	<blockquote>
		font link:
		<a href="https://www.dafont.com/flappybirdy.font" >
			https://www.dafont.com/flappybirdy.font
		</a>
	</blockquote>

Finally, the background image and the bird image have been worked in <b>Adobe Photoshop CC 2018</b> to make them fit with the canvas.
	<blockquote>
		Adobe Photoshop CC 2018:
		<a href="https://www.adobe.com/it/products/photoshop.html" >
			https://www.adobe.com/it/products/photoshop.html
		</a>
	</blockquote>
</p>

<h2>AudioContext Error</h2>

<p>
It is recommend using Firefox, as the Chrome browser reports an error when creating the AudioContext.
</p>

<h2>Conclusions</h2>

<b>Flappybone</b> was designed as a scalable application and new possible features could be implemented in the future, such as a menu game, levels with increasing difficulty, ranking of the best results. <br>
I would like to thank my university professors for the acquired knowledge and support during the development.
<blockquote>
		Project link:
		<a href="http://flappybone.surge.sh/" >
			http://flappybone.surge.sh/
		</a>
	</blockquote>
<blockquote>
		Video tutorial:
		<a href="https://github.com/frankybone/flappybone/blob/master/video.mp4" >
			https://github.com/frankybone/flappybone/blob/master/video.mp4
		</a>
	</blockquote>
</p>
