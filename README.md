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
  This project includes several external libraries, that are:
  
  <ol>
	  <li>ml5.js</li>
	<blockquote>
		<a https://ml5js.org ></a>
	</blockquote>
	  <li>secondo elemento</li>
	  <li>terzo elemento</li>
</ol>
  
  
</p>

Ciò è dovuto anche grazie alla libreria ml5.js, che sfrutta un algoritmo di pitch detection
per stimare la frequenza fondamentale di un segnale audio, e restituisce un numero decimale che ho sfruttato per associare 
la posizione lungo l’asse delle ordinate dell’uccellino con la frequenza in questione.
Inoltre, ho utilizzato le librerie p5.dom.js per la gestione della canvas, del testo e delle immagini e la p5.sound.js 
per le funzionalità web audio, come la creazione del AudioContext e l’attivazione del microfono.
Ho riprodotto la stringa del titolo e dello score utilizzando lo stesso font del gioco originale, 
gestito tramite un apposito file .css, mentre la meccanica di gioco è gestita da un file principale (sketch.js) 
collegato ad altri due file che gestiscono in maniera indipendente la variabile dell’uccellino e dei pipes (bird.js e pipe.js).
Si consiglia l’uso di Firefox, in quanto il browser Chrome segnala un errore nella creazione dell’AudioContext.
Infine, ho effettuato l’upload del gioco al link “flappybone.surge.sh”.
