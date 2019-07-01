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
Il progetto è nato dall’idea di volermi cimentare in un videogioco “arcade” con la possibilità di giocarci attraverso 
uno strumento musicale.Essendo un trombonista, è stato facile per me scegliere il trombone a tal scopo, e ho scelto di rivisitare “flappy bird”, 
gioco molto in voga nel 2013, con la possibilità di interagire attraverso i suoni armonici del trombone.
Lo scopo del gioco è cercare di far volare l’uccellino, vincendo la forza di gravità, attraverso il maggior numero di pipes 
possibile, suonando dei suoni con frequenze diverse a seconda della disposizione dei tubi che scorrono attraverso il background.
A differenza di altri strumenti, quali ad esempio il pianoforte, il flauto o la tromba, il trombone, grazie alla coulisse, 
è capace di produrre suoni in maniera continua, il così detto glissato, grazie ai quali l’uccellino può volare in maniera 
del tutto fluida e naturale.  
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
